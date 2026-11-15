from datetime import datetime
import importlib.util
import io
import json
from pathlib import Path
from types import SimpleNamespace
import tempfile
import subprocess
import unittest
from unittest.mock import patch


SPEC = importlib.util.spec_from_file_location("photos_import", Path(__file__).parents[1] / "import-photos.py")
photos = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(photos)


def photo(uuid, date):
    return SimpleNamespace(
        uuid=uuid, original_filename="IMG_1208.HEIC", filename=f"{uuid}.HEIC",
        date=datetime.fromisoformat(date), date_original=datetime.fromisoformat(date),
        title="performance", description="a caption", keywords=["noise"],
        place=SimpleNamespace(name="A venue, Brooklyn, New York, United States"),
        date_modified=None,
        path=None, location=(None, None),
    )


class PhotosImportTest(unittest.TestCase):
    def test_no_exif_requires_an_exact_library_original_not_just_a_filename(self):
        with tempfile.TemporaryDirectory() as temporary:
            root = Path(temporary)
            exported = root / "IMG_1208.jpg"
            original = root / "original.jpg"
            exported.write_bytes(b"same original")
            original.write_bytes(b"same original")
            candidate = photo("one", "2020-06-01T12:00:01-04:00")
            candidate.path = str(original)
            self.assertEqual(photos.matching_photos(exported, None, [candidate]), [candidate])
            original.write_bytes(b"different image")
            self.assertEqual(photos.matching_photos(exported, None, [candidate]), [])

    def test_name_and_capture_time_match_converted_exports_without_guessing_adjacent_seconds(self):
        older = photo("older", "2020-06-01T12:00:00.500-04:00")
        current = photo("current", "2020-06-01T12:00:01.500-04:00")
        path = Path("img_1208.jpg")
        self.assertEqual(photos.matching_photos(path, datetime.fromisoformat("2020-06-01T16:00:01Z"), [older, current]), [current])
        self.assertEqual(photos.matching_photos(path, datetime.fromisoformat("2020-06-01T12:00:01"), [older, current]), [current])
        self.assertEqual(photos.matching_photos(Path("renamed.jpg"), current.date, [current]), [])
        self.assertEqual(photos.metadata(current)["place"], "A venue, Brooklyn, New York, United States")
        self.assertNotIn("latitude", photos.metadata(current))

    def test_missing_exif_uses_unique_photos_filename_and_marks_review(self):
        candidate = photo("one", "2020-06-01T12:00:01-04:00")
        with patch.object(photos, "capture_time", return_value=None), patch("sys.stderr", new_callable=io.StringIO) as warnings:
            record, matched = photos.prepare_photo(Path("IMG_1208.jpg"), [candidate])
        self.assertIs(matched, candidate)
        self.assertEqual(record["date"], candidate.date.isoformat())
        self.assertTrue(record["needs_review"])
        self.assertIn("!!! WARNING: FALLBACK TIMESTAMP", warnings.getvalue())
        self.assertIn("unique filename", warnings.getvalue())

    def test_ambiguous_missing_exif_uses_file_creation_not_some_photos_metadata(self):
        one = photo("one", "2020-06-01T12:00:01-04:00")
        two = photo("two", "2021-06-01T12:00:01-04:00")
        created = datetime.fromisoformat("2019-01-01T00:00:00Z").timestamp()
        with patch.object(photos, "capture_time", return_value=None), patch.object(Path, "stat", return_value=SimpleNamespace(st_birthtime=created)), patch("sys.stderr", new_callable=io.StringIO) as warnings:
            record, matched = photos.prepare_photo(Path("IMG_1208.jpg"), [one, two])
        self.assertIsNone(matched)
        self.assertEqual(datetime.fromisoformat(record["date"]).timestamp(), created)
        self.assertTrue(record["needs_review"])
        self.assertEqual(record["tags"], [])
        self.assertIsNone(record["place"])
        self.assertIn("may be the export date", warnings.getvalue())

    def test_unmatched_exif_is_kept_instead_of_using_the_export_timestamp(self):
        captured = datetime.fromisoformat("2019-01-01T00:00:00Z")
        candidate = photo("one", "2020-06-01T12:00:01-04:00")
        with patch.object(photos, "capture_time", return_value=captured), patch("sys.stderr", new_callable=io.StringIO):
            record, matched = photos.prepare_photo(Path("IMG_1208.jpg"), [candidate])
        self.assertIsNone(matched)
        self.assertEqual(datetime.fromisoformat(record["date"]).timestamp(), captured.timestamp())
        self.assertTrue(record["needs_review"])
        self.assertEqual(record["description"], "")

    def test_cached_places_include_neighborhoods_and_postal_fallback_without_street_addresses(self):
        candidate = photo("one", "2020-06-01T12:00:01-04:00")
        candidate.place = SimpleNamespace(
            name="Venue, City, Country",
            names=SimpleNamespace(area_of_interest=["Venue"], additional_city_info=["Neighborhood"], city=["City"], country=["Country"]),
            address=SimpleNamespace(sub_locality="Neighborhood", state_province="State", street="not a place name"),
        )
        self.assertEqual(photos.metadata(candidate)["place"], "Venue, Neighborhood, City, State, Country")
        candidate.place = SimpleNamespace(name=None, names=None, address=SimpleNamespace(city="City", country="Country"))
        self.assertEqual(photos.metadata(candidate)["place"], "City, Country")
        candidate.place = None
        self.assertIsNone(photos.metadata(candidate)["place"])

    def test_one_bad_file_does_not_block_the_other_images(self):
        with tempfile.TemporaryDirectory() as temporary:
            directory = Path(temporary).resolve()
            good = directory / "IMG_1208.jpg"
            good.write_bytes(b"fixture")
            (directory / "broken.jpg").write_bytes(b"invalid")
            candidate = photo("one", "2020-06-01T12:00:01-04:00")
            candidate.place = None
            candidate.location = (1.0, 2.0)
            module = SimpleNamespace(PhotosDB=lambda _: SimpleNamespace(photos=lambda: [candidate]))
            written = {}
            def capture(filename):
                if filename == good:
                    return candidate.date
                raise subprocess.CalledProcessError(1, "magick", stderr="bad image")
            def writer(command, **kwargs):
                filename = command[command.index("--photos-metadata") + 1]
                written.update(json.loads(Path(filename).read_text()))
                return SimpleNamespace(returncode=0)
            with patch.dict("sys.modules", {"osxphotos": module}), patch("sys.argv", ["import-photos.py", str(directory)]), patch.object(photos, "capture_time", side_effect=capture), patch.object(photos.subprocess, "run", side_effect=writer), patch("sys.stderr", new_callable=io.StringIO) as warnings:
                self.assertEqual(photos.main(), 0)
            self.assertEqual(set(written), {str(good)})
            self.assertFalse(written[str(good)]["needs_review"])
            self.assertIn("SKIPPING", warnings.getvalue())
            self.assertIn("bad image", warnings.getvalue())
            self.assertIn("GPS present but no cached place name", warnings.getvalue())
            self.assertIsNone(written[str(good)]["place"])

    def test_all_bad_files_never_invoke_the_post_writer(self):
        with tempfile.TemporaryDirectory() as temporary:
            directory = Path(temporary)
            (directory / "IMG_1208.jpg").write_bytes(b"fixture")
            module = SimpleNamespace(PhotosDB=lambda _: SimpleNamespace(photos=lambda: []))
            with patch.dict("sys.modules", {"osxphotos": module}), patch("sys.argv", ["import-photos.py", str(directory)]), patch.object(photos, "capture_time", side_effect=subprocess.CalledProcessError(1, "magick")), patch.object(photos.subprocess, "run") as writer, patch("sys.stderr", new_callable=io.StringIO):
                with self.assertRaisesRegex(ValueError, "no posts written"):
                    photos.main()
                writer.assert_not_called()


if __name__ == "__main__":
    unittest.main()
