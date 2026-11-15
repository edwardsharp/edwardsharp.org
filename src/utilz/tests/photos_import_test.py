from datetime import datetime
import importlib.util
from pathlib import Path
from types import SimpleNamespace
import tempfile
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

    def test_ambiguous_batch_never_invokes_the_post_writer(self):
        with tempfile.TemporaryDirectory() as temporary:
            directory = Path(temporary)
            (directory / "IMG_1208.jpg").write_bytes(b"fixture")
            one = photo("one", "2020-06-01T12:00:01-04:00")
            two = photo("two", "2020-06-01T12:00:01-04:00")
            module = SimpleNamespace(PhotosDB=lambda _: SimpleNamespace(photos=lambda: [one, two]))
            with patch.dict("sys.modules", {"osxphotos": module}), patch("sys.argv", ["import-photos.py", str(directory)]), patch.object(photos, "capture_time", return_value=one.date), patch.object(photos.subprocess, "run") as writer:
                with self.assertRaisesRegex(ValueError, "no posts written"):
                    photos.main()
                writer.assert_not_called()


if __name__ == "__main__":
    unittest.main()
