"""Export Apple Notes into a private Markdown review snapshot, never site content."""

import argparse
from contextlib import closing
from datetime import datetime
import hashlib
import json
import os
from pathlib import Path
import re
import shutil
import sqlite3
import subprocess
import sys


HERE = Path(__file__).resolve().parent
REPOSITORY = HERE.parent.parent
NOTES_DB = Path.home() / "Library/Group Containers/group.com.apple.notes/NoteStore.sqlite"


def drawing_facts(path):
    with closing(sqlite3.connect(f"{path.expanduser().resolve().as_uri()}?mode=ro", uri=True)) as database:
        database.execute("PRAGMA query_only = ON")
        database.execute("BEGIN")
        columns = {row[1] for row in database.execute("PRAGMA table_info(ZICCLOUDSYNCINGOBJECT)")}
        types = sorted(column for column in columns if re.fullmatch(r"ZTYPEUTI\d*", column))
        notes = sorted(column for column in columns if re.fullmatch(r"ZNOTE\d*", column))
        if not types or not notes:
            raise ValueError("unsupported Notes attachment schema; cannot distinguish drawings from photos")
        store = database.execute("SELECT Z_UUID FROM Z_METADATA").fetchone()
        entity = database.execute("SELECT Z_ENT FROM Z_PRIMARYKEY WHERE Z_NAME = ?", ("ICNote",)).fetchone()
        if not store or not entity:
            raise ValueError("Notes database has no store identity or ICNote entity")
        known = {row[0] for row in database.execute(
            "SELECT Z_PK FROM ZICCLOUDSYNCINGOBJECT WHERE Z_ENT = ?", (entity[0],)
        )}
        condition = " OR ".join(f"({column} = ? OR {column} LIKE ?)" for column in types)
        deleted = " AND (ZMARKEDFORDELETION IS NULL OR ZMARKEDFORDELETION = 0)" if "ZMARKEDFORDELETION" in columns else ""
        parent = notes[0] if len(notes) == 1 else f"COALESCE({', '.join(notes)})"
        drawings = {row[0] for row in database.execute(
            f"SELECT {parent} FROM ZICCLOUDSYNCINGOBJECT WHERE ({condition}){deleted}",
            ["com.apple.drawing", "com.apple.drawing.%"] * len(types),
        )}
    return str(store[0]).casefold(), known, drawings


def since_date(value):
    if not re.fullmatch(r"\d{4}(?:-\d{2}(?:-\d{2})?)?", value):
        raise ValueError("--since must be YYYY, YYYY-MM, or YYYY-MM-DD")
    parts = [int(part) for part in value.split("-")]
    year, month, day = (parts + [1, 1])[:3]
    return datetime(year, month, day).astimezone()


def timestamp(value):
    if not isinstance(value, str):
        raise ValueError("missing Notes timestamp")
    date = datetime.fromisoformat(value)
    if date.tzinfo is None:
        raise ValueError("Notes timestamp needs an explicit timezone")
    return date


def artifact(root, record):
    path = record["path"]
    if not isinstance(path, str) or Path(path).is_absolute():
        raise ValueError("export artifact needs a relative path")
    file = (root / path).resolve()
    if not file.is_relative_to(root.resolve()) or not file.is_file():
        raise ValueError(f"missing or out-of-root attachment/output: {path}")
    if hashlib.sha256(file.read_bytes()).hexdigest() != record["sha256"]:
        raise ValueError(f"export artifact checksum mismatch: {path}")
    return file


def write_review(source, destination, facts, since=None, field="created"):
    manifest = json.loads((source / "manifest.json").read_text())
    if manifest.get("format") != "notes-exporter.manifest" or manifest.get("version") != 1:
        raise ValueError("unsupported Notes exporter manifest; expected version 1")
    if manifest["run"]["status"] not in ("ok", "partial"):
        raise ValueError("Notes exporter did not complete; inspect its raw manifest")
    skipped = list(manifest["skipped"])
    excluded = {item["id"] for item in skipped}
    errors = []
    exported = 0
    filtered = 0
    for note in manifest["notes"]:
        if note["id"] in excluded or note.get("locked"):
            continue
        try:
            created = timestamp(note["created"])
            modified = timestamp(note["modified"])
            if since and (created if field == "created" else modified) < since:
                filtered += 1
                continue
            identity_match = re.fullmatch(r"x-coredata://([^/]+)/ICNote/p(\d+)", note["id"])
            store, known, drawings = facts
            if not identity_match or identity_match[1].casefold() != store or int(identity_match[2]) not in known:
                raise ValueError("note identity does not match the supplied Notes database")
            kind = "doodle" if int(identity_match[2]) in drawings else "entry"
            markdown = artifact(source, note["outputs"]["md"])
            relative = Path(note["outputs"]["md"]["path"])
            if relative.suffix.lower() != ".md":
                raise ValueError("Notes Markdown output must have an .md extension")
            attachments = [(item, artifact(source, item)) for item in note["attachments"]]
            if kind == "doodle" and not any(item["kind"] == "image" for item, _ in attachments):
                raise ValueError("drawing detected, but no drawing image was exported")
            identity = hashlib.sha256(note["id"].encode()).hexdigest()[:12]
            filename = f"{created.astimezone().date()}-{relative.stem}-{identity}.md"
            output = destination / relative.parent / filename
            tags = note["tags"]
            if not isinstance(tags, list) or not all(isinstance(tag, str) for tag in tags):
                raise ValueError("invalid Notes tags")
            fields = {
                "title": note["title"],
                "date": created.isoformat(),
                "last_modified": modified.isoformat(),
                "kind": kind,
                "tags": (["doodle"] if kind == "doodle" and not any(tag.casefold() == "doodle" for tag in tags) else []) + tags,
                "notes_id": note["id"],
            }
            body = markdown.read_text()
            if body.startswith("---\n"):
                raise ValueError("upstream Markdown already has front matter; refusing duplicate metadata")
            for item, file in attachments:
                target = destination / item["path"]
                target.parent.mkdir(parents=True, exist_ok=True)
                if target.exists():
                    if target.read_bytes() != file.read_bytes():
                        raise ValueError(f"attachment filename collision: {item['path']}")
                else:
                    with target.open("xb") as handle, file.open("rb") as original:
                        shutil.copyfileobj(original, handle)
            output.parent.mkdir(parents=True, exist_ok=True)
            with output.open("x") as handle:
                handle.write("---\n")
                for key, value in fields.items():
                    handle.write(f"{key}: {json.dumps(value, ensure_ascii=False)}\n")
                handle.write(f"---\n{body}")
            exported += 1
        except (OSError, KeyError, TypeError, ValueError) as error:
            errors.append({"id": note.get("id"), "message": str(error)})
    for item in skipped:
        print(f"Notes exporter skipped {item['id']}: {item['reason']}", file=sys.stderr)
    for item in errors:
        print(f"could not prepare note {item['id']}: {item['message']}", file=sys.stderr)
    report = {
        "exported": exported,
        "filtered": filtered,
        "skipped": skipped,
        "errors": errors,
        "upstream_status": manifest["run"]["status"],
        "limitations": "Locked notes and non-image attachments cannot be read by this exporter.",
    }
    with (destination.parent / "report.json").open("x") as handle:
        json.dump(report, handle, ensure_ascii=False, indent=2)
    return report


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("output", type=Path, help="new/empty private folder outside this repository")
    parser.add_argument("--since", help="inclusive local date: YYYY, YYYY-MM, YYYY-MM-DD")
    parser.add_argument("--since-field", choices=("created", "modified"), default="created")
    parser.add_argument("--exporter", type=Path, default=HERE / ".tools/notes-exporter/exportnotes.zsh")
    parser.add_argument("--from-export", type=Path, help="reuse an existing notes-exporter manifest; do not access Notes")
    parser.add_argument("--tags", action="store_true", help="read actual Notes tags; requires Full Disk Access")
    parser.add_argument("--notes-db", type=Path, help="NoteStore.sqlite for drawing detection; required with --from-export")
    args = parser.parse_args()
    cutoff = since_date(args.since) if args.since else None
    output = args.output.expanduser().resolve()
    if output.is_relative_to(REPOSITORY):
        raise ValueError("Notes exports must stay outside this repository")
    if output.exists() and (not output.is_dir() or any(output.iterdir())):
        raise ValueError("choose a new or empty output folder; existing exports are never overwritten")
    source = args.from_export.expanduser().resolve() if args.from_export else output / "raw"
    if args.from_export and not args.notes_db:
        raise ValueError("--from-export requires --notes-db from the same library to classify doodles safely")
    if args.from_export and (output.is_relative_to(source) or source.is_relative_to(output)):
        raise ValueError("input export and output review must be separate folders")
    exporter = args.exporter.expanduser().resolve()
    if not args.from_export and not exporter.is_file():
        raise FileNotFoundError(f"install notes-exporter first (see README), or supply --exporter: {exporter}")
    os.umask(0o077)
    output.mkdir(parents=True, exist_ok=True, mode=0o700)
    output.chmod(0o700)
    destination = output / "notes"
    destination.mkdir(mode=0o700)
    if not args.from_export:
        environment = {key: value for key, value in os.environ.items() if not key.startswith("NOTES_EXPORT_")}
        command = [
            "zsh", str(exporter), "--root-dir", str(source),
            "--convert-markdown", "--folder-hierarchy",
            "--exclude-folders", "Recently Deleted",
            "--non-interactive", "--sync", "false", "--update-qdrant", "false",
        ]
        if args.tags:
            command.append("--tags")
        # Creation-date filtering happens on the manifest, not filesystem dates.
        result = subprocess.run(command, env=environment, check=False)
        if result.returncode not in (0, 2):
            raise RuntimeError(f"Notes exporter failed ({result.returncode}); inspect {source}")
    try:
        facts = drawing_facts(args.notes_db or NOTES_DB)
    except (OSError, sqlite3.Error) as error:
        raise RuntimeError("cannot read Notes drawing metadata; grant Full Disk Access or supply --notes-db") from error
    report = write_review(source, destination, facts, cutoff, args.since_field)
    print(f"{report['exported']} exported, {report['filtered']} outside date range; report: {output / 'report.json'}")
    print("Images are preserved; locked notes and non-image attachments are not exported.", file=sys.stderr)
    return 2 if report["errors"] or report["upstream_status"] != "ok" else 0


if __name__ == "__main__":
    try:
        sys.exit(main())
    except (OSError, KeyError, TypeError, ValueError, RuntimeError) as error:
        print(f"Notes export failed: {error}", file=sys.stderr)
        sys.exit(1)
