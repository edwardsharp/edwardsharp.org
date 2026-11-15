import { createSearch, parseDocuments } from "./search.ts";
import type { SearchDocument } from "./search.ts";
import { archiveTitle, groupArchiveEntries } from "./archive-groups.ts";

function createEntry(entry: SearchDocument): HTMLLIElement {
  const item = document.createElement("li");
  const label = document.createElement(entry.date ? "time" : "span");
  label.className = "archive-label";
  if (label instanceof HTMLTimeElement && entry.date)
    label.dateTime = entry.date;
  label.textContent = entry.date ?? "page";
  const link = document.createElement("a");
  link.href = entry.url;
  link.textContent = archiveTitle(entry);
  link.title = link.textContent;
  item.append(label, link);
  if (entry.kind) {
    const kind = document.createElement("span");
    kind.className = "archive-kind";
    kind.textContent = entry.kind;
    item.append(kind);
  }
  return item;
}

async function startArchive(root: HTMLElement): Promise<void> {
  const form = root.querySelector<HTMLFormElement>("form");
  const input = root.querySelector<HTMLInputElement>("input");
  const results = root.querySelector<HTMLElement>(".archive-results");
  const status = root.querySelector<HTMLElement>(".archive-status");
  const retry = root.querySelector<HTMLButtonElement>(".archive-retry");
  if (!form || !input || !results || !status || !retry) {
    throw new Error("archive search controls are missing");
  }

  status.setAttribute("role", "status");
  status.textContent = "loading full-text search...";
  retry.hidden = true;
  form.hidden = false;
  input.disabled = true;
  let search: ReturnType<typeof createSearch>;
  try {
    const url = root.dataset.searchUrl;
    if (!url) throw new Error("missing archive search URL");
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const parser = new DOMParser();
    const entries = parseDocuments(await response.json()).map((entry) => ({
      ...entry,
      text: parser.parseFromString(entry.text, "text/html").body.textContent,
    }));
    search = createSearch(entries);
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
    const entries = search(query);
    const currentYear = String(new Date().getFullYear());
    results.replaceChildren(
      ...groupArchiveEntries(entries).map((group) => {
        const list = document.createElement("ul");
        list.className = "archive-list";
        list.append(...group.entries.map(createEntry));
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
        : "no matches. try other words."
      : `${entries.length} ${entries.length === 1 ? "entry" : "entries"}`;
  };

  const update = () => {
    const url = new URL(location.href);
    const query = input.value.trim();
    if (query) url.searchParams.set("q", query);
    else url.searchParams.delete("q");
    history.replaceState(history.state, "", url);
    render();
  };

  input.disabled = false;
  input.value = new URL(location.href).searchParams.get("q") ?? "";
  input.addEventListener("input", update);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    update();
  });
  window.addEventListener("popstate", () => {
    input.value = new URL(location.href).searchParams.get("q") ?? "";
    render();
  });
  render();
}

const archive = document.querySelector<HTMLElement>("[data-archive]");
if (archive) void startArchive(archive);
