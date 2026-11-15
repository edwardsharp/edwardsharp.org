"""Import Photos exports in six-hour groups; cached place names become PUBLIC metadata."""

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
            if original and original.is_file():
                try:
                    if file_hash(filename) == file_hash(original):
                        matches[photo.uuid] = photo
                except OSError as error:
                    print(f"cannot compare Photos original for {filename}: {error}", file=sys.stderr)
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


def cached_place_name(photo):
    place = photo.place
    if not place:
        return None
    names = getattr(place, "names", None)
    address = getattr(place, "address", None)
    parts = []
    for field, address_field in (
        ("area_of_interest", None),
        ("additional_city_info", "sub_locality"),
        ("region", None),
        ("city", "city"),
        ("state_province", "state_province"),
        ("country", "country"),
        ("inland_water", None),
        ("ocean", None),
    ):
        values = getattr(names, field, []) if names else []
        value = values[0] if values else None
        if not value and address_field:
            value = getattr(address, address_field, None)
        if value and value.strip() and value.strip().casefold() not in {part.casefold() for part in parts}:
            parts.append(value.strip())
    if parts:
        return ", ".join(parts)
    return (place.name.strip() or None) if place.name else None


def metadata(photo):
    return {
        "date": photo.date.isoformat(),
        "title": photo.title or "",
        "description": photo.description or "",
        "tags": photo.keywords or [],
        "place": cached_place_name(photo),
        "last_modified": photo.date_modified.isoformat() if photo.date_modified else None,
    }


def prepare_photo(filename, candidates):
    try:
        captured = capture_time(filename)
    except ValueError as error:
        print(f"WARNING: invalid capture metadata for {filename}: {error}; trying timestamp fallbacks", file=sys.stderr)
        captured = None
    matches = matching_photos(filename, captured, candidates)
    source = "Photos date (exact original match)"
    if captured is None and not matches and len(candidates) == 1:
        matches = candidates
        source = "Photos date (unique filename match)"
    matched = matches[0] if len(matches) == 1 else None
    if matched:
        record = metadata(matched)
    else:
        if captured is not None:
            date = captured.astimezone().isoformat()
            zone = "machine timezone" if captured.tzinfo is None else "embedded timezone"
            source = f"EXIF capture date ({zone}); Photos match unavailable/ambiguous"
        else:
            created = getattr(filename.stat(), "st_birthtime", None)
            if created is None or created <= 0:
                raise ValueError(f"file creation timestamp unavailable: {filename}")
            date = datetime.fromtimestamp(created).astimezone().isoformat()
            source = "file creation time; this may be the export date"
        record = {
            "date": date, "title": "", "description": "", "tags": [],
            "place": None, "last_modified": None,
        }
    record["needs_review"] = captured is None or matched is None
    if record["needs_review"]:
        print(
            f"!!! WARNING: FALLBACK TIMESTAMP: {filename}\n"
            f"    {record['date']} ({source}); needs_review: true",
            file=sys.stderr,
        )
    return record, matched


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
    parser.add_argument("--photoset", action="append", default=[], help="keep a direct child folder together instead of six-hour grouping; repeatable")
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
    skipped = 0
    named = 0
    gps_without_name = 0
    unavailable_location = 0
    for file in files:
        try:
            record, matched = prepare_photo(file, by_name.get(file.stem.casefold(), []))
            if record["place"]:
                named += 1
            elif matched and all(value is not None for value in matched.location):
                gps_without_name += 1
                print(f"GPS present but no cached place name: {file}; importing without a location (no network lookup)", file=sys.stderr)
            else:
                unavailable_location += 1
                reason = "no GPS or cached place name" if matched else "no unique Photos match for cached location"
                print(f"{reason}: {file}; importing without a location", file=sys.stderr)
            records[str(file)] = record
        except (OSError, ValueError, subprocess.CalledProcessError) as error:
            skipped += 1
            print(f"SKIPPING {file}: {error}", file=sys.stderr)
            if isinstance(error, subprocess.CalledProcessError) and error.stderr:
                print(error.stderr.strip(), file=sys.stderr)
    print(f"Prepared {len(records)} images; skipped {skipped}. Cached place names: {named}; GPS without names: {gps_without_name}; location unavailable: {unavailable_location}.")
    if not records:
        raise ValueError("no usable images; no posts written (see skipped-file warnings)")
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
