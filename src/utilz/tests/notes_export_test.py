from datetime import timedelta
from contextlib import closing
import hashlib
import importlib.util
import json
from pathlib import Path
import sqlite3
import subprocess
import sys
import tempfile
import unittest


SPEC = importlib.util.spec_from_file_location("notes_export", Path(__file__).parents[1] / "export-notes.py")
notes = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(notes)


class NotesExportTest(unittest.TestCase):
    def fixture(self, root, suffix=""):
        source = root / "source"
        source.mkdir()
        database = root / "NoteStore.sqlite"
        with closing(sqlite3.connect(database)) as connection, connection:
            connection.executescript(f"""
                CREATE TABLE Z_METADATA (Z_UUID TEXT);
                INSERT INTO Z_METADATA VALUES ('test-store');
                CREATE TABLE Z_PRIMARYKEY (Z_NAME TEXT, Z_ENT INTEGER);
                INSERT INTO Z_PRIMARYKEY VALUES ('ICNote', 1);
                CREATE TABLE ZICCLOUDSYNCINGOBJECT (
                    Z_PK INTEGER PRIMARY KEY, Z_ENT INTEGER,
                    ZTYPEUTI{suffix} TEXT, ZNOTE{suffix} INTEGER,
                    ZMARKEDFORDELETION INTEGER);
                INSERT INTO ZICCLOUDSYNCINGOBJECT VALUES (1, 1, NULL, NULL, 0);
                INSERT INTO ZICCLOUDSYNCINGOBJECT VALUES (2, 1, NULL, NULL, 0);
                INSERT INTO ZICCLOUDSYNCINGOBJECT VALUES (3, 1, NULL, NULL, 0);
                INSERT INTO ZICCLOUDSYNCINGOBJECT VALUES (101, 2, 'public.png', 1, 0);
                INSERT INTO ZICCLOUDSYNCINGOBJECT VALUES (102, 2, 'com.apple.drawing.2', 2, 0);
                INSERT INTO ZICCLOUDSYNCINGOBJECT VALUES (103, 2, 'com.apple.drawing', 1, 1);
            """)
        boundary = notes.since_date("2020-06")
        records = []
        for number in (1, 2, 3):
            image = source / f"images/{number}.png"
            image.parent.mkdir(exist_ok=True)
            image.write_bytes(b"fixture image")
            markdown = source / f"md/account/{number}.md"
            markdown.parent.mkdir(parents=True, exist_ok=True)
            markdown.write_text(f"some text\n\n![image](../../images/{number}.png)\n")
            def artifact(path):
                return {"path": str(path.relative_to(source)), "sha256": hashlib.sha256(path.read_bytes()).hexdigest()}
            records.append({
                "id": f"x-coredata://test-store/ICNote/p{number}",
                "title": f"note {number}",
                "created": (boundary if number != 3 else boundary - timedelta(seconds=1)).isoformat(),
                "modified": (boundary + timedelta(days=30)).isoformat(),
                "tags": ["noise"],
                "outputs": {"md": artifact(markdown)},
                "attachments": [{"kind": "image", **artifact(image)}],
            })
        manifest = {"format": "notes-exporter.manifest", "version": 1, "run": {"status": "ok"}, "skipped": [], "notes": records}
        (source / "manifest.json").write_text(json.dumps(manifest))
        return source, database, manifest

    def test_partial_dates_are_strict_and_support_calendar_boundaries(self):
        for value, expected in [("2020", (2020, 1, 1)), ("2020-06", (2020, 6, 1)), ("2020-02-29", (2020, 2, 29))]:
            date = notes.since_date(value)
            self.assertEqual((date.year, date.month, date.day), expected)
            self.assertIsNotNone(date.tzinfo)
        for value in ["2020-2", "2021-02-29", "2020-13", "2020-06-00", "2020-06-01T00:00Z"]:
            with self.assertRaises(ValueError):
                notes.since_date(value)

    def test_cli_writes_the_requested_private_folder_without_accessing_notes_app(self):
        with tempfile.TemporaryDirectory() as temporary:
            root = Path(temporary)
            source, database, _ = self.fixture(root)
            output = root / "chosen-output"
            result = subprocess.run([
                sys.executable, str(Path(notes.__file__)), str(output),
                "--from-export", str(source), "--notes-db", str(database),
                "--since", "2020-06",
            ], text=True, capture_output=True)
            self.assertEqual(result.returncode, 0, result.stderr)
            report = json.loads((output / "report.json").read_text())
            self.assertEqual(report["exported"], 2)
            self.assertEqual(len(list((output / "notes").glob("md/account/*.md"))), 2)
            self.assertEqual(output.stat().st_mode & 0o777, 0o700)

    def test_drawings_not_photos_become_doodles_with_dates_and_working_relative_images(self):
        for suffix in ("", "1"):
            with self.subTest(schema=suffix), tempfile.TemporaryDirectory() as temporary:
                root = Path(temporary)
                source, database, _ = self.fixture(root, suffix)
                original = database.read_bytes()
                destination = root / "review/notes"
                destination.mkdir(parents=True)
                report = notes.write_review(source, destination, notes.drawing_facts(database), notes.since_date("2020-06"))
                self.assertEqual((report["exported"], report["filtered"], report["errors"]), (2, 1, []))
                files = sorted(destination.glob("md/account/*.md"))
                self.assertEqual(len(files), 2)
                self.assertIn('kind: "entry"', files[0].read_text())
                doodle = files[1].read_text()
                self.assertIn('kind: "doodle"', doodle)
                self.assertIn('tags: ["doodle", "noise"]', doodle)
                self.assertIn("date: ", doodle)
                self.assertIn("last_modified: ", doodle)
                self.assertEqual((files[1].parent / "../../images/2.png").resolve().read_bytes(), b"fixture image")
                self.assertEqual(database.read_bytes(), original)

    def test_modified_filter_keeps_original_creation_date_and_missing_images_are_reported(self):
        with tempfile.TemporaryDirectory() as temporary:
            root = Path(temporary)
            source, database, manifest = self.fixture(root)
            (source / "images/2.png").unlink()
            destination = root / "review/notes"
            destination.mkdir(parents=True)
            report = notes.write_review(source, destination, notes.drawing_facts(database), notes.since_date("2020-06"), "modified")
            self.assertEqual(report["exported"], 2)
            self.assertEqual(len(report["errors"]), 1)
            self.assertIn("missing", report["errors"][0]["message"])
            old = next(destination.glob("md/account/*-3-*.md")).read_text()
            self.assertIn(f'date: "{manifest["notes"][2]["created"]}"', old)
            self.assertIn(f'last_modified: "{manifest["notes"][2]["modified"]}"', old)

    def test_wrong_store_and_stale_locked_notes_are_not_exported(self):
        with tempfile.TemporaryDirectory() as temporary:
            root = Path(temporary)
            source, database, manifest = self.fixture(root)
            manifest["notes"][0]["id"] = "x-coredata://other-store/ICNote/p1"
            manifest["skipped"] = [{"id": manifest["notes"][1]["id"], "reason": "locked"}]
            (source / "manifest.json").write_text(json.dumps(manifest))
            destination = root / "review/notes"
            destination.mkdir(parents=True)
            report = notes.write_review(source, destination, notes.drawing_facts(database))
            self.assertEqual(report["exported"], 1)
            self.assertEqual(len(report["errors"]), 1)
            self.assertIn("identity", report["errors"][0]["message"])


if __name__ == "__main__":
    unittest.main()
