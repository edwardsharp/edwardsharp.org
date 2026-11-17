/*! Lunr is MIT licensed; see ../src/assets/lunr-LICENSE.txt. */
import lunr from "lunr";

export interface SearchDocument {
  url: string;
  title: string;
  text: string;
  tags: string[];
  date: string | null;
  date_title?: string | null;
  date_label?: string | null;
  date_short_label?: string | null;
  kind: string | null;
  locations?: string[];
}

export function parseDocuments(value: unknown): SearchDocument[] {
  if (
    !Array.isArray(value) ||
    !value.every(
      (entry: unknown): entry is SearchDocument =>
        typeof entry === "object" &&
        entry !== null &&
        "url" in entry &&
        typeof entry.url === "string" &&
        entry.url.startsWith("/") &&
        !entry.url.startsWith("//") &&
        !entry.url.includes("\\") &&
        "title" in entry &&
        typeof entry.title === "string" &&
        "text" in entry &&
        typeof entry.text === "string" &&
        "tags" in entry &&
        Array.isArray(entry.tags) &&
        entry.tags.every((tag: unknown) => typeof tag === "string") &&
        (!("locations" in entry) ||
          (Array.isArray(entry.locations) &&
            entry.locations.every(
              (name: unknown) => typeof name === "string",
            ))) &&
        "kind" in entry &&
        (entry.kind === null ||
          (typeof entry.kind === "string" && entry.kind.length > 0)) &&
        "date" in entry &&
        (entry.date === null ||
          (typeof entry.date === "string" &&
            /^\d{4}-\d{2}-\d{2}$/.test(entry.date))) &&
        (!("date_label" in entry) ||
          entry.date_label === null ||
          (typeof entry.date_label === "string" &&
            entry.date_label.length > 0)) &&
        (!("date_short_label" in entry) ||
          entry.date_short_label === null ||
          (typeof entry.date_short_label === "string" &&
            entry.date_short_label.length > 0)) &&
        (!("date_title" in entry) ||
          entry.date_title === null ||
          (typeof entry.date_title === "string" &&
            entry.date_title.length > 0)),
    ) ||
    new Set(value.map((entry) => entry.url)).size !== value.length
  ) {
    throw new TypeError("invalid archive search index");
  }
  return value;
}

export type MatchRange = [start: number, length: number];

export interface SearchHit {
  entry: SearchDocument;
  matches: { title: MatchRange[]; text: MatchRange[]; tags: MatchRange[] };
}

function ranges(match: lunr.MatchData, field: string): MatchRange[] {
  const positions: MatchRange[] = [];
  for (const fields of Object.values(match.metadata)) {
    const values: unknown = fields[field]?.position;
    if (!Array.isArray(values)) continue;
    for (const position of values) {
      if (
        Array.isArray(position) &&
        position.length === 2 &&
        typeof position[0] === "number" &&
        typeof position[1] === "number"
      )
        positions.push([position[0], position[1]]);
    }
  }
  return positions.sort(([a], [b]) => a - b);
}

export function createSearchIndex(documents: SearchDocument[]) {
  const byUrl = new Map(documents.map((entry) => [entry.url, entry]));
  const index = lunr(function () {
    this.ref("url");
    this.field("title", { boost: 10 });
    this.field("tags", { boost: 5 });
    this.field("text");
    this.metadataWhitelist = ["position"];
    for (const entry of documents)
      this.add({ ...entry, tags: entry.tags.join(" ") });
  });

  return (value: string): SearchHit[] => {
    if (!value.trim())
      return documents.map((entry) => ({
        entry,
        matches: { title: [], text: [], tags: [] },
      }));
    const terms = lunr
      .tokenizer(value)
      .map(lunr.trimmer)
      .filter((token) => token.toString() !== "");
    if (!terms.length) return [];
    let matching:
      Map<string, { score: number; match: lunr.MatchData }> | undefined;
    for (const term of terms) {
      const text = term.toString().replace(/\*/g, "");
      if (!text) return [];
      const results = index.query((query) => {
        query.term(text, { boost: 10 });
        query.term(text, { wildcard: lunr.Query.wildcard.TRAILING, boost: 3 });
        if (text.length >= 4) query.term(text, { editDistance: 1 });
      });
      const next = new Map<string, { score: number; match: lunr.MatchData }>();
      for (const result of results) {
        const previous = matching?.get(result.ref);
        if (matching && !previous) continue;
        if (previous) result.matchData.combine(previous.match);
        next.set(result.ref, {
          score: result.score + (previous?.score ?? 0),
          match: result.matchData,
        });
      }
      matching = next;
      if (!matching.size) return [];
    }
    return [...(matching ?? [])]
      .sort(([, a], [, b]) => b.score - a.score)
      .map(([ref, { match }]) => {
        const entry = byUrl.get(ref);
        if (!entry) throw new Error("search result missing from archive index");
        return {
          entry,
          matches: {
            title: ranges(match, "title"),
            text: ranges(match, "text"),
            tags: ranges(match, "tags"),
          },
        };
      });
  };
}

export function createSearch(documents: SearchDocument[]) {
  const search = createSearchIndex(documents);
  return (value: string) => search(value).map(({ entry }) => entry);
}

export function searchFragment(
  text: string,
  matches: MatchRange[],
  limit = 180,
): { text: string; matches: MatchRange[] } {
  const first = matches[0]?.[0] ?? 0;
  let start = Math.max(0, first - Math.floor(limit / 3));
  if (start > 0) {
    const space = text.indexOf(" ", start);
    if (space >= 0 && space < first) start = space + 1;
  }
  const end = Math.min(text.length, start + limit);
  const prefix = start > 0 ? "…" : "";
  return {
    text: prefix + text.slice(start, end) + (end < text.length ? "…" : ""),
    matches: matches
      .filter(([offset, length]) => offset < end && offset + length > start)
      .map(([offset, length]) => [
        Math.max(0, offset - start) + prefix.length,
        Math.min(end, offset + length) - Math.max(start, offset),
      ]),
  };
}
