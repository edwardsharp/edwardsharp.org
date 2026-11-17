/*! @tanstack/virtual-core is MIT licensed; see ../src/assets/tanstack-virtual-LICENSE.txt. */
import {
  Virtualizer,
  defaultRangeExtractor,
  observeWindowOffset,
  observeWindowRect,
  windowScroll,
} from "@tanstack/virtual-core";
import { buildRows, geometry, rowForIndex } from "./honeycomb.ts";
import {
  populateFilter,
  filterPosts,
  locationKey,
  tagKey,
} from "./feed-filters.ts";
import { enhancePostDialog } from "./post-dialog.ts";
import { createTextBackdrop } from "./text-backdrop.ts";

interface PreviewPost {
  id: string;
  url: string;
  title: string;
  kind: string;
  date: string;
  label: string;
  excerpt: string;
  image: string | null;
  alt: string;
  tags: string[];
  locations: string[];
}

function isPreviewPost(value: unknown): value is PreviewPost {
  if (typeof value !== "object" || value === null) return false;
  return (
    ["id", "url", "title", "kind", "date", "label", "excerpt", "alt"].every(
      (key) => key in value && typeof Reflect.get(value, key) === "string",
    ) &&
    "image" in value &&
    (value.image === null || typeof value.image === "string") &&
    "tags" in value &&
    Array.isArray(value.tags) &&
    value.tags.every((tag: unknown) => typeof tag === "string") &&
    "locations" in value &&
    Array.isArray(value.locations) &&
    value.locations.every((location: unknown) => typeof location === "string")
  );
}

function textElement<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  className: string,
  text: string,
) {
  const element = document.createElement(tag);
  element.className = className;
  element.textContent = text;
  return element;
}

function createCard(post: PreviewPost, index: number, total: number) {
  const card = document.createElement("article");
  card.className = `hex-card${post.image ? " has-image" : ""}`;
  card.setAttribute("role", "listitem");
  card.setAttribute("aria-posinset", String(index + 1));
  card.setAttribute("aria-setsize", String(total));
  card.dataset.index = String(index);
  card.dataset.kind = post.kind;
  card.dataset.postUrl = post.url;
  const link = document.createElement("a");
  link.className = "hex-card__link";
  link.href = post.url;
  link.setAttribute("aria-haspopup", "dialog");
  const body = document.createElement("div");
  body.className = "hex-card__body";
  const copy = document.createElement("div");
  copy.className = "hex-card__copy";
  const date = textElement("time", "", post.label);
  date.dateTime = post.date;
  copy.append(
    date,
    textElement("h2", "hex-card__title", post.title),
    textElement("p", "hex-card__excerpt", post.excerpt),
    textElement("span", "hex-card__kind", post.kind),
  );
  if (post.image) {
    const image = document.createElement("img");
    image.className = "hex-card__image";
    if (
      post.kind === "entry" &&
      post.tags.some((tag) => tag.trim().toLowerCase() === "doodle")
    )
      image.classList.add("doodle-image");
    image.src = post.image;
    image.alt = post.alt;
    image.loading = "lazy";
    image.decoding = "async";
    image.addEventListener(
      "error",
      () => {
        image.hidden = true;
        card.classList.remove("has-image");
        copy.append(
          textElement("span", "hex-card__notice", "image preview unavailable"),
        );
      },
      { once: true },
    );
    body.append(image);
  }
  body.append(copy);
  link.append(body);
  card.append(link);
  return card;
}

function enhanceFeed(
  shell: HTMLElement,
  grid: HTMLElement,
  status: HTMLElement,
  more: HTMLButtonElement,
  allPosts: PreviewPost[],
  filterSelect: HTMLSelectElement,
) {
  const batchSize = 24;
  const controls = more.parentElement;
  const filterForm = filterSelect.closest("form");
  const header = filterForm?.closest<HTMLElement>(".site-header");
  if (!controls || !filterForm || !header)
    throw new Error("missing feed controls");
  populateFilter(filterSelect, allPosts);
  const readFilter = () => {
    const params = new URL(location.href).searchParams;
    const type = params.get("type");
    const tag = params.get("tag");
    const place = params.get("location");
    return type
      ? `type:${type}`
      : tag
        ? `tag:${tag}`
        : place
          ? `location:${place}`
          : "";
  };
  const matchingPosts = (filter: string) => filterPosts(allPosts, filter);
  const bioHome = document.querySelector<HTMLAnchorElement>(
    "#bio-panel [data-bio-home]",
  );
  function selectFilter(filter: string) {
    if (filter.startsWith("tag:")) filter = `tag:${tagKey(filter.slice(4))}`;
    if (filter.startsWith("location:"))
      filter = `location:${locationKey(filter.slice(9))}`;
    filterSelect.querySelector("option[data-current-filter]")?.remove();
    if (
      filter &&
      !Array.from(filterSelect.options).some(
        (option) => option.value === filter,
      )
    ) {
      const label = filter.slice(filter.indexOf(":") + 1);
      const option = new Option(
        `${label} (${matchingPosts(filter).length})`,
        filter,
      );
      option.hidden = true;
      option.dataset.currentFilter = "";
      filterSelect.add(option);
    }
    filterSelect.value = filter;
    if (bioHome) bioHome.hidden = !filter;
  }
  let activeFilter = readFilter();
  selectFilter(activeFilter);
  filterSelect.disabled = false;
  filterForm.hidden = false;
  let posts = matchingPosts(activeFilter);
  let loaded = Math.min(batchSize, posts.length);
  let shape = geometry(grid.clientWidth);
  let headerHeight = header.getBoundingClientRect().height;
  let rows = buildRows(loaded, shape.columns);
  let margin = grid.getBoundingClientRect().top + window.scrollY;
  let focusedIndex: number | null = null;
  let pendingFrame = 0;
  const mounted = new Map<number, HTMLElement>();
  const maskedCopies = new WeakSet<HTMLElement>();
  let paintTextBackdrop: ((copy: HTMLElement) => void) | null = null;
  const initialFocused = document.activeElement?.closest(".hex-card");
  if (initialFocused) {
    const url = initialFocused.getAttribute("data-post-url");
    const index = posts.findIndex((post) => post.url === url);
    if (index >= 0) focusedIndex = index;
  }
  grid.replaceChildren();
  grid.classList.add("is-virtual");

  function render() {
    const visible = virtualizer.getVirtualItems();
    const needed = new Set(visible.map((row) => row.index));
    for (const [index, node] of mounted) {
      if (!needed.has(index)) {
        node.remove();
        mounted.delete(index);
      }
    }
    grid.style.setProperty("--tile-width", `${shape.tileWidth}px`);
    grid.style.setProperty("--tile-height", `${shape.tileHeight}px`);
    grid.style.height = `${rows.length ? virtualizer.getTotalSize() + shape.tileHeight - shape.pitch : 0}px`;
    for (const [position, virtualRow] of visible.entries()) {
      const row = rows[virtualRow.index];
      if (!row) throw new Error("missing honeycomb row");
      let node = mounted.get(virtualRow.index);
      if (!node) {
        node = document.createElement("div");
        node.className = "honeycomb-row";
        node.setAttribute("role", "presentation");
        mounted.set(virtualRow.index, node);
      }
      node.style.transform = `translateY(${virtualRow.start - margin}px)`;
      const offset =
        shape.columns > 1 && virtualRow.index % 2 === 1
          ? (shape.tileWidth + shape.gap) / 2
          : 0;
      for (let index = row.start; index < row.end; index++) {
        const column = index - row.start;
        let card = node.children.item(column);
        if (!(card instanceof HTMLElement)) {
          const post = posts[index];
          if (!post) throw new Error("missing honeycomb post");
          card = createCard(post, index, posts.length);
          node.append(card);
        }
        if (!(card instanceof HTMLElement))
          throw new Error("invalid honeycomb card");
        card.style.left = `${offset + column * (shape.tileWidth + shape.gap)}px`;
      }
      if (grid.children.item(position) !== node) {
        grid.insertBefore(node, grid.children.item(position));
      }
    }
    if (paintTextBackdrop) {
      for (const copy of grid.querySelectorAll<HTMLElement>(
        ".has-image .hex-card__copy",
      )) {
        if (maskedCopies.has(copy)) continue;
        paintTextBackdrop(copy);
        maskedCopies.add(copy);
      }
    }
  }

  function scheduleRender() {
    if (pendingFrame) return;
    pendingFrame = requestAnimationFrame(() => {
      pendingFrame = 0;
      render();
    });
  }

  const virtualizer = new Virtualizer<Window, HTMLElement>({
    count: rows.length,
    getScrollElement: () => window,
    estimateSize: () => shape.pitch,
    observeElementRect: observeWindowRect,
    observeElementOffset: observeWindowOffset,
    scrollToFn: windowScroll,
    scrollMargin: margin,
    scrollPaddingStart: headerHeight + 16,
    scrollPaddingEnd: Math.max(0, shape.tileHeight - shape.pitch) + 16,
    overscan: 2,
    onChange: scheduleRender,
  });

  function updateOptions() {
    const pinned =
      focusedIndex === null ? null : rowForIndex(focusedIndex, shape.columns);
    virtualizer.setOptions({
      ...virtualizer.options,
      count: rows.length,
      estimateSize: () => shape.pitch,
      scrollMargin: margin,
      scrollPaddingStart: headerHeight + 16,
      scrollPaddingEnd: Math.max(0, shape.tileHeight - shape.pitch) + 16,
      rangeExtractor: (range) => {
        const indexes = defaultRangeExtractor(range);
        if (
          pinned !== null &&
          pinned < rows.length &&
          !indexes.includes(pinned)
        )
          indexes.push(pinned);
        return indexes.sort((a, b) => a - b);
      },
    });
    virtualizer._willUpdate();
  }

  function updateStatus() {
    const suffix = activeFilter.startsWith("tag:")
      ? ` tagged "${activeFilter.slice(4)}"`
      : activeFilter.startsWith("type:")
        ? ` of type "${activeFilter.slice(5)}"`
        : activeFilter.startsWith("location:")
          ? ` at "${activeFilter.slice(9)}"`
          : "";
    const noun = posts.length === 1 ? "post" : "posts";
    status.classList.toggle("visually-hidden", posts.length > 0);
    status.textContent =
      posts.length === 0
        ? `no posts${suffix}. choose another filter or all posts.`
        : loaded === posts.length
          ? `all ${posts.length} ${noun}${suffix} loaded`
          : `${loaded} of ${posts.length} ${noun}${suffix} loaded`;
    more.hidden = loaded === posts.length;
  }

  function loadMore() {
    loaded = Math.min(posts.length, loaded + batchSize);
    rows = buildRows(loaded, shape.columns);
    updateOptions();
    render();
    updateStatus();
    requestAnimationFrame(loadIfNearEnd);
  }

  const loadIfNearEnd = () => {
    if (
      loaded < posts.length &&
      document.activeElement !== more &&
      controls.getBoundingClientRect().top < window.innerHeight + 600
    ) {
      loadMore();
    }
  };

  function focusTile(index: number) {
    if (index >= loaded) loadMore();
    focusedIndex = index;
    updateOptions();
    render();
    const link = grid.querySelector<HTMLAnchorElement>(
      `[data-index="${index}"] a`,
    );
    if (!link) throw new Error("could not focus the requested post");
    link.focus({ preventScroll: true });
    virtualizer.scrollToIndex(rowForIndex(index, shape.columns), {
      align: "auto",
    });
  }

  const updateGeometry = () => {
    const width = grid.clientWidth;
    const nextMargin = grid.getBoundingClientRect().top + window.scrollY;
    const nextHeaderHeight = header.getBoundingClientRect().height;
    if (
      Math.abs(
        width -
          (shape.tileWidth * shape.columns + shape.gap * (shape.columns - 1)),
      ) < 1 &&
      Math.abs(nextMargin - margin) < 1 &&
      Math.abs(nextHeaderHeight - headerHeight) < 1
    )
      return;
    const anchor = rows[virtualizer.range?.startIndex ?? 0]?.start ?? 0;
    const focusToRestore = focusedIndex;
    shape = geometry(width);
    rows = buildRows(loaded, shape.columns);
    margin = nextMargin;
    headerHeight = nextHeaderHeight;
    mounted.clear();
    grid.replaceChildren();
    updateOptions();
    virtualizer.measure();
    render();
    if (focusToRestore !== null) focusTile(focusToRestore);
    else if (window.scrollY > margin)
      virtualizer.scrollToIndex(rowForIndex(anchor, shape.columns), {
        align: "start",
      });
  };

  function applyFilter(filter: string) {
    activeFilter = filter;
    selectFilter(filter);
    posts = matchingPosts(filter);
    loaded = Math.min(batchSize, posts.length);
    focusedIndex = null;
    rows = buildRows(loaded, shape.columns);
    mounted.clear();
    grid.replaceChildren();
    updateOptions();
    virtualizer.measure();
    const top = Math.max(0, margin - headerHeight - 16);
    if (window.scrollY > top) window.scrollTo(0, top);
    render();
    updateStatus();
    requestAnimationFrame(loadIfNearEnd);
  }

  filterSelect.addEventListener("change", () => {
    const url = new URL(location.href);
    url.searchParams.delete("tag");
    url.searchParams.delete("type");
    url.searchParams.delete("location");
    const filter = filterSelect.value;
    if (filter.startsWith("tag:")) url.searchParams.set("tag", filter.slice(4));
    else if (filter.startsWith("type:"))
      url.searchParams.set("type", filter.slice(5));
    else if (filter.startsWith("location:"))
      url.searchParams.set("location", filter.slice(9));
    history.replaceState(history.state, "", url);
    applyFilter(filter);
  });
  filterForm.addEventListener("submit", (event) => event.preventDefault());
  window.addEventListener("popstate", () => applyFilter(readFilter()));

  more.disabled = false;
  more.textContent = "load more posts";
  more.onclick = () => {
    const firstNew = loaded;
    loadMore();
    if (firstNew < posts.length) focusTile(firstNew);
  };
  grid.addEventListener("focusin", (event) => {
    if (!(event.target instanceof Element)) return;
    const card = event.target.closest<HTMLElement>(".hex-card");
    if (!card) return;
    focusedIndex = Number(card.dataset.index);
    updateOptions();
  });
  grid.addEventListener("focusout", (event) => {
    if (
      event.relatedTarget instanceof Node &&
      grid.contains(event.relatedTarget)
    )
      return;
    focusedIndex = null;
    updateOptions();
    scheduleRender();
  });
  grid.addEventListener("keydown", (event) => {
    if (event.key !== "Tab" || !(event.target instanceof Element)) return;
    const card = event.target.closest<HTMLElement>(".hex-card");
    if (!card) return;
    const next = Number(card.dataset.index) + (event.shiftKey ? -1 : 1);
    if (next >= 0 && next < posts.length) {
      event.preventDefault();
      focusTile(next);
    }
  });
  const resize = new ResizeObserver(updateGeometry);
  resize.observe(shell);
  resize.observe(filterForm);
  resize.observe(header);
  const siteShell = header.parentElement;
  siteShell?.addEventListener("bio-layout", updateGeometry);
  const intersection = new IntersectionObserver(loadIfNearEnd, {
    rootMargin: "600px",
  });
  intersection.observe(controls);
  const cleanup = virtualizer._didMount();
  updateOptions();
  render();
  updateStatus();
  if (focusedIndex !== null) focusTile(focusedIndex);
  void document.fonts.ready.then(updateGeometry);
  void createTextBackdrop()
    .then((paint) => {
      paintTextBackdrop = paint;
      if (paint) render();
    })
    .catch((error: unknown) => {
      console.warn("could not prepare text backdrop blur", error);
    });
  window.addEventListener("pagehide", (event) => {
    if (!event.persisted) {
      cleanup();
      resize.disconnect();
      siteShell?.removeEventListener("bio-layout", updateGeometry);
      intersection.disconnect();
      cancelAnimationFrame(pendingFrame);
    }
  });
}

async function startFeed(
  shell: HTMLElement,
  dialog: ReturnType<typeof enhancePostDialog>,
) {
  const grid = shell.querySelector<HTMLElement>(".honeycomb");
  const status = shell.querySelector<HTMLElement>(".feed-status");
  const more = shell.querySelector<HTMLButtonElement>(".feed-more");
  const filterSelect = document.querySelector<HTMLSelectElement>(
    ".site-header .feed-filter select",
  );
  if (!grid || !status || !more || !filterSelect)
    throw new Error("missing feed markup");
  status.classList.add("visually-hidden");
  status.setAttribute("role", "status");
  status.textContent = "";
  more.disabled = true;
  let posts: PreviewPost[];
  try {
    const url = shell.dataset.feedUrl;
    if (!url) throw new Error("missing post index URL");
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload: unknown = await response.json();
    if (
      !Array.isArray(payload) ||
      payload.length === 0 ||
      !payload.every(isPreviewPost)
    ) {
      throw new Error("invalid post index");
    }
    if (new Set(payload.map((post) => post.id)).size !== payload.length)
      throw new Error("duplicate post IDs");
    posts = payload;
  } catch (error) {
    console.error("could not load the scrolling grid", error);
    status.classList.remove("visually-hidden");
    status.setAttribute("role", "alert");
    status.textContent = `could not load the scrolling grid (${error instanceof Error ? error.message : "unknown error"}). static previews are still available.`;
    more.hidden = false;
    more.disabled = false;
    more.textContent = "retry scrolling grid";
    more.onclick = () => void startFeed(shell, dialog);
    return;
  }
  status.setAttribute("role", "status");
  enhanceFeed(shell, grid, status, more, posts, filterSelect);
  dialog.setFeed(posts, filterSelect);
}

const shell = document.querySelector<HTMLElement>("[data-honeycomb]");
if (shell) {
  const dialog = enhancePostDialog(shell);
  void startFeed(shell, dialog);
}
