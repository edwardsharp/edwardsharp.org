"""Import only a folder of Photos exports; cached place names become PUBLIC metadata."""

import argparse
from datetime import datetime
import hashlib
import json
from pathlib import Path
import subprocess
import sys
import tempfile


HERE = Path(__file__).resolve().parent
EXTENSIONS = {".jpg", ".jpeg", ".png", ".bmp", ".gif", ".webp", ".heic", ".heif", ".tif", ".tiff", ".avif"}


def capture_time(filename):
    result = subprocess.run(
        ["magick", "identify", "-format", "%[EXIF:*]", str(filename)],
        check=True, text=True, capture_output=True,
    )
    if result.stderr.strip():
        print(result.stderr.strip(), file=sys.stderr)
    fields = {}
    for line in result.stdout.splitlines():
        if line.startswith("exif:") and "=" in line:
            key, value = line[5:].split("=", 1)
            fields[key] = value.strip()
    if not fields.get("DateTimeOriginal"):
        return None
    date = datetime.strptime(fields["DateTimeOriginal"], "%Y:%m:%d %H:%M:%S")
    offset = fields.get("OffsetTimeOriginal")
    if offset:
        date = datetime.fromisoformat(date.isoformat() + offset)
        if date.tzinfo is None:
            raise ValueError(f"invalid capture timezone offset: {filename}")
    return date


def matching_photos(filename, captured, candidates):
    stem = filename.stem.casefold()
    matches = {}
    for photo in candidates:
        names = {Path(photo.original_filename).stem.casefold(), Path(photo.filename).stem.casefold()}
        if stem not in names:
            continue
        if captured is None:
            original = Path(photo.path) if photo.path else None
            if original and original.is_file() and file_hash(filename) == file_hash(original):
                matches[photo.uuid] = photo
            continue
        for date in (photo.date_original, photo.date):
            if captured.tzinfo is None:
                comparable = date.replace(tzinfo=None)
            else:
                comparable = date
            # EXIF commonly has second precision while Photos retains fractions.
            if captured.replace(microsecond=0) == comparable.replace(microsecond=0):
                matches[photo.uuid] = photo
                break
    return list(matches.values())

def file_hash(path):
    with path.open("rb") as file:
        return hashlib.file_digest(file, "sha256").hexdigest()


def metadata(photo):
    place = photo.place
    return {
        "date": photo.date.isoformat(),
        "title": photo.title or "",
        "description": photo.description or "",
        "tags": photo.keywords or [],
        "place": place.name if place else None,
        "last_modified": photo.date_modified.isoformat() if photo.date_modified else None,
    }


def images(directory):
    for child in sorted(directory.iterdir()):
        if child.name.startswith(".") or child.is_symlink():
            continue
        if child.is_dir():
            yield from images(child)
        elif child.is_file() and child.suffix.lower() in EXTENSIONS:
            yield child
        else:
            print(f"skipping unsupported file: {child}", file=sys.stderr)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("directory", type=Path, help="manually exported images; keep original filenames and capture metadata")
    parser.add_argument("--library", type=Path, help="Photos library; defaults to the last-opened library")
    parser.add_argument("--photoset", action="append", default=[], help="group a direct child folder; repeatable")
    parser.add_argument("--dry-run", action="store_true", help="match metadata and preview posts without writing site content")
    args = parser.parse_args()
    directory = args.directory.expanduser().resolve(strict=True)
    if not directory.is_dir():
        raise ValueError("image input must be a directory")
    files = list(images(directory))
    if not files:
        raise ValueError("no supported images in this folder")
    root = HERE.parent.parent
    print(f"Posts: {root / 'content/_posts'}/YEAR; media: {root / 'content/media'}/YEAR")
    if args.dry_run:
        print("Dry run: no posts, media, or import-history files will be written.")
    try:
        import osxphotos
    except ModuleNotFoundError as error:
        if error.name != "osxphotos":
            raise
        raise RuntimeError("install src/utilz/requirements.txt into src/utilz/.venv (see README)") from error
    database = osxphotos.PhotosDB(str(args.library.expanduser().resolve()) if args.library else None)
    wanted = {file.stem.casefold() for file in files}
    by_name = {}
    for photo in database.photos():
        for name in {Path(photo.original_filename).stem.casefold(), Path(photo.filename).stem.casefold()} & wanted:
            by_name.setdefault(name, []).append(photo)
    records = {}
    errors = []
    for file in files:
        try:
            captured = capture_time(file)
            matches = matching_photos(file, captured, by_name.get(file.stem.casefold(), []))
            if len(matches) != 1:
                if captured is None:
                    raise ValueError(f"no EXIF capture date and no unique exact-original match: {file}")
                raise ValueError(f"{len(matches)} library matches for {file}; cannot safely identify this export")
            if captured is None:
                print(f"matched {file.name} by exact original-file hash; using its Photos capture date")
            record = metadata(matches[0])
            if not record["place"]:
                print(f"no cached place name for {file}; importing without a location", file=sys.stderr)
            records[str(file)] = record
        except (ValueError, subprocess.CalledProcessError) as error:
            errors.append(str(error))
    if errors:
        for error in errors:
            print(error, file=sys.stderr)
        raise ValueError("unmatched/ambiguous exports; no posts written. Keep original filenames and capture metadata.")
    print("Full cached place names, captions, and keywords will be public; raw GPS is not copied.", file=sys.stderr)
    with tempfile.TemporaryDirectory(prefix="photos-metadata-") as temporary:
        filename = Path(temporary) / "metadata.json"
        filename.write_text(json.dumps(records))
        command = [
            "node", str(HERE / "import-images.ts"), str(directory),
            "--date-source", "exif", "--photos-metadata", str(filename),
        ]
        for name in args.photoset:
            command.extend(["--photoset", name])
        if args.dry_run:
            command.append("--dry-run")
        return subprocess.run(command, cwd=HERE.parent.parent, check=False).returncode


if __name__ == "__main__":
    try:
        sys.exit(main())
    except (OSError, ValueError, RuntimeError, subprocess.CalledProcessError) as error:
        print(f"Photos import failed: {error}", file=sys.stderr)
        sys.exit(1)
