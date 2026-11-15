/*! Lunr is MIT licensed; see ../src/assets/lunr-LICENSE.txt. */
import lunr from "lunr";

export interface SearchDocument {
  url: string;
  title: string;
  text: string;
  tags: string[];
  date: string | null;
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
        "date" in entry &&
        (entry.date === null ||
          (typeof entry.date === "string" &&
            /^\d{4}-\d{2}-\d{2}$/.test(entry.date))),
    ) ||
    new Set(value.map((entry) => entry.url)).size !== value.length
  ) {
    throw new TypeError("invalid archive search index");
  }
  return value;
}

export function createSearch(documents: SearchDocument[]) {
  const byUrl = new Map(documents.map((entry) => [entry.url, entry]));
  const index = lunr(function () {
    this.ref("url");
    this.field("title", { boost: 10 });
    this.field("tags", { boost: 5 });
    this.field("text");
    for (const entry of documents) this.add(entry);
  });

  return (value: string): SearchDocument[] => {
    if (!value.trim()) return documents;
    const terms = lunr
      .tokenizer(value)
      .map(lunr.trimmer)
      .filter((token) => token.toString() !== "");
    if (!terms.length) return [];
    return index
      .query((query) => {
        query.term(terms, { presence: lunr.Query.presence.REQUIRED });
      })
      .map(({ ref }) => {
        const entry = byUrl.get(ref);
        if (!entry) throw new Error("search result missing from archive index");
        return entry;
      });
  };
}
