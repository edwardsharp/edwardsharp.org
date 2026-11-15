import type { SearchDocument } from "./search.ts";

export function archiveTitle(entry: SearchDocument): string {
  const title = entry.title.trim();
  if (title && !/^(no title|untitled)$/i.test(title)) return title;
  return entry.date ? `${entry.kind ?? "post"} / ${entry.date}` : entry.url;
}

export function groupArchiveEntries(entries: SearchDocument[]): {
  year: string | null;
  entries: SearchDocument[];
}[] {
  const groups = new Map<string | null, SearchDocument[]>();
  for (const entry of entries) {
    const year = entry.date?.slice(0, 4) ?? null;
    const group = groups.get(year);
    if (group) group.push(entry);
    else groups.set(year, [entry]);
  }
  return [...groups]
    .sort(([a], [b]) =>
      a === b ? 0 : a === null ? -1 : b === null ? 1 : b.localeCompare(a),
    )
    .map(([year, entries]) => ({ year, entries }));
}
