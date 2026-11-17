import { createSearchIndex, parseDocuments, searchFragment } from "./search.ts";
import type { MatchRange, SearchDocument, SearchHit } from "./search.ts";
import { archiveTitle, groupArchiveEntries } from "./archive-groups.ts";
import {
  filterPosts,
  locationKey,
  populateFilter,
  tagKey,
} from "./feed-filters.ts";

function highlight(element: HTMLElement, text: string, matches: MatchRange[]) {
  let cursor = 0;
  for (const [offset, length] of matches) {
    const start = Math.max(cursor, offset);
    const end = Math.min(text.length, offset + length);
    if (end <= start) continue;
    element.append(text.slice(cursor, start));
    const mark = document.createElement("mark");
    mark.textContent = text.slice(start, end);
    element.append(mark);
    cursor = end;
  }
  element.append(text.slice(cursor));
}

function createEntry(entry: SearchDocument, hit?: SearchHit): HTMLLIElement {
  const item = document.createElement("li");
  const label = document.createElement(entry.date ? "time" : "span");
  label.className = "archive-label";
  if (label instanceof HTMLTimeElement && entry.date)
    label.dateTime = entry.date;
  if (entry.date) {
    for (const { className, text } of [
      { className: "archive-date-wide", text: entry.date_label ?? entry.date },
      {
        className: "archive-date-narrow",
        text: entry.date_short_label ?? entry.date,
      },
    ]) {
      const span = document.createElement("span");
      span.className = className;
      span.textContent = text;
      label.append(span);
    }
  } else label.textContent = "page";
  if (entry.date_title) label.title = entry.date_title;
  const link = document.createElement("a");
  link.href = entry.url;
  const title = archiveTitle(entry);
  highlight(
    link,
    title,
    title === entry.title ? (hit?.matches.title ?? []) : [],
  );
  link.title = entry.date_title ? `${title} / ${entry.date_title}` : title;
  item.append(label, link);
  if (entry.kind) {
    const kind = document.createElement("span");
    kind.className = "archive-kind";
    kind.textContent = entry.kind;
    item.append(kind);
  }
  if (hit && !hit.matches.title.length) {
    const matches = hit.matches.text.length
      ? hit.matches.text
      : hit.matches.tags;
    const text = hit.matches.text.length ? entry.text : entry.tags.join(" ");
    if (matches.length) {
      const snippet = document.createElement("p");
      snippet.className = "archive-snippet";
      const fragment = searchFragment(text, matches);
      highlight(snippet, fragment.text, fragment.matches);
      item.append(snippet);
    }
  }
  return item;
}

async function startArchive(root: HTMLElement): Promise<void> {
  const form = root.querySelector<HTMLFormElement>("form");
  const input = root.querySelector<HTMLInputElement>("input");
  const results = root.querySelector<HTMLElement>(".archive-results");
  const status = root.querySelector<HTMLElement>(".archive-status");
  const retry = root.querySelector<HTMLButtonElement>(".archive-retry");
  const filter = document.querySelector<HTMLSelectElement>(
    ".site-header .feed-filter select",
  );
  const filterForm = filter?.closest("form");
  const clear = root.querySelector<HTMLAnchorElement>(".archive-clear-filter");
  if (
    !form ||
    !input ||
    !results ||
    !status ||
    !retry ||
    !filter ||
    !filterForm ||
    !clear
  ) {
    throw new Error("archive search controls are missing");
  }

  status.setAttribute("role", "status");
  status.textContent = "loading full-text search...";
  retry.hidden = true;
  form.hidden = false;
  input.disabled = true;
  let search: ReturnType<typeof createSearchIndex>;
  let documents: SearchDocument[];
  try {
    const url = root.dataset.searchUrl;
    if (!url) throw new Error("missing archive search URL");
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const parser = new DOMParser();
    documents = parseDocuments(await response.json()).map((entry) => ({
      ...entry,
      text: parser.parseFromString(entry.text, "text/html").body.textContent,
    }));
    search = createSearchIndex(documents);
    populateFilter(
      filter,
      documents.filter((entry) => entry.kind !== null),
    );
  } catch (error) {
    console.error("could not load archive search", error);
    status.setAttribute("role", "alert");
    status.textContent = `could not load search (${error instanceof Error ? error.message : "unknown error"}). the complete archive is still available below.`;
    form.hidden = true;
    retry.hidden = false;
    retry.onclick = () => void startArchive(root);
    return;
  }

  const expandedYears = new Map<string, boolean>();
  const readState = () => {
    const params = new URL(location.href).searchParams;
    input.value = params.get("q") ?? "";
    const type = params.get("type");
    const tag = params.get("tag");
    const place = params.get("location");
    const value = type
      ? `type:${type}`
      : tag
        ? `tag:${tagKey(tag)}`
        : place
          ? `location:${locationKey(place)}`
          : "";
    filter.querySelector("[data-current-filter]")?.remove();
    if (
      value &&
      !Array.from(filter.options).some((option) => option.value === value)
    ) {
      const option = new Option(value.slice(value.indexOf(":") + 1), value);
      option.hidden = true;
      option.dataset.currentFilter = "";
      filter.append(option);
    }
    filter.value = value;
  };
  let wasSearching = false;
  const render = () => {
    if (!wasSearching) {
      for (const group of results.querySelectorAll<HTMLDetailsElement>(
        "[data-year]",
      )) {
        if (group.dataset.year)
          expandedYears.set(group.dataset.year, group.open);
      }
    }
    const query = input.value.trim();
    const scoped = new Set(
      filterPosts(documents, filter.value).map((entry) => entry.url),
    );
    const hits = search(query).filter(({ entry }) => scoped.has(entry.url));
    const byUrl = new Map(hits.map((hit) => [hit.entry.url, hit]));
    const entries = hits.map(({ entry }) => entry);
    const currentYear = String(new Date().getFullYear());
    results.replaceChildren(
      ...groupArchiveEntries(entries).map((group) => {
        const list = document.createElement("ul");
        list.className = "archive-list";
        list.append(
          ...group.entries.map((entry) =>
            createEntry(entry, query ? byUrl.get(entry.url) : undefined),
          ),
        );
        if (group.year === null) return list;
        const details = document.createElement("details");
        details.className = "archive-year";
        details.dataset.year = group.year;
        details.open =
          Boolean(query) ||
          (expandedYears.get(group.year) ?? group.year === currentYear);
        const heading = document.createElement("summary");
        const count = document.createElement("span");
        count.className = "archive-year__count";
        count.textContent = `${group.entries.length} ${group.entries.length === 1 ? "post" : "posts"}`;
        heading.append(`${group.year} `, count);
        details.append(heading, list);
        return details;
      }),
    );
    wasSearching = Boolean(query);
    status.textContent = query
      ? entries.length
        ? `${entries.length} ${entries.length === 1 ? "match" : "matches"}`
        : "nothing found. try something else?"
      : `${entries.length} ${entries.length === 1 ? "entry" : "entries"}`;
    clear.hidden = entries.length > 0 || !filter.value;
    if (!clear.hidden) {
      const selected = filter.selectedOptions[0];
      if (!selected) throw new Error("archive filter selection is missing");
      const name = selected.hasAttribute("data-current-filter")
        ? selected.label
        : selected.label.replace(/ \(\d+\)$/, "");
      clear.textContent = `or clear "${name}" to search everything`;
    }
    const clearUrl = new URL(location.href);
    for (const key of ["tag", "type", "location"])
      clearUrl.searchParams.delete(key);
    clear.href = clearUrl.pathname + clearUrl.search;
  };

  const update = () => {
    const url = new URL(location.href);
    const query = input.value.trim();
    if (query) url.searchParams.set("q", query);
    else url.searchParams.delete("q");
    for (const key of ["tag", "type", "location"]) url.searchParams.delete(key);
    if (filter.value) {
      const separator = filter.value.indexOf(":");
      url.searchParams.set(
        filter.value.slice(0, separator),
        filter.value.slice(separator + 1),
      );
    }
    history.replaceState(history.state, "", url);
    render();
  };

  input.disabled = false;
  filter.disabled = false;
  filterForm.hidden = false;
  filterForm.addEventListener("submit", (event) => event.preventDefault());
  readState();
  let timer: ReturnType<typeof setTimeout>;
  input.addEventListener("input", () => {
    clearTimeout(timer);
    timer = setTimeout(update, 120);
  });
  filter.addEventListener("change", () => {
    clearTimeout(timer);
    update();
  });
  clear.addEventListener("click", (event) => {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    )
      return;
    event.preventDefault();
    filter.value = "";
    update();
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearTimeout(timer);
    update();
  });
  window.addEventListener("popstate", () => {
    clearTimeout(timer);
    readState();
    render();
  });
  render();
}

const archive = document.querySelector<HTMLElement>("[data-archive]");
if (archive) void startArchive(archive);
