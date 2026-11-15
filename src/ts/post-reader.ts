import {
  Virtualizer,
  defaultRangeExtractor,
  elementScroll,
  observeElementOffset,
  observeElementRect,
} from "@tanstack/virtual-core";
import { readerSelection, tagKey } from "./feed-filters.ts";

export interface ReaderPost {
  url: string;
  title: string;
  kind: string;
  tags: string[];
}

export function createPostReader(options: {
  content: HTMLElement;
  toolbar: HTMLElement;
  form: HTMLFormElement;
  select: HTMLSelectElement;
  status: HTMLElement;
  load: (url: string, signal: AbortSignal) => Promise<DocumentFragment>;
  setActive: (post: ReaderPost) => void;
}) {
  const { content, toolbar, form, select, status, load, setActive } = options;
  const cache = new Map<string, DocumentFragment>();
  const mounted = new Map<
    number,
    { node: HTMLElement; controller: AbortController }
  >();
  let allPosts: ReaderPost[] = [];
  let posts: ReaderPost[] = [];
  let opening: ReaderPost | undefined;
  let active: ReaderPost | undefined;
  let virtualizer: Virtualizer<HTMLElement, HTMLElement> | undefined;
  let cleanup: (() => void) | undefined;
  let track: HTMLElement | undefined;
  let generation = 0;
  let transition = 0;
  let animation: Animation | undefined;
  let toolbarHeight = 0;

  const measureToolbar = () => {
    toolbarHeight = toolbar.getBoundingClientRect().height;
    content.style.setProperty(
      "--post-reader-header-height",
      `${toolbarHeight}px`,
    );
  };
  const toolbarResize = new ResizeObserver(() => {
    measureToolbar();
    render();
  });

  const pause = (node: HTMLElement) => {
    for (const media of node.querySelectorAll<HTMLMediaElement>("audio, video"))
      media.pause();
  };

  const clear = () => {
    generation++;
    cleanup?.();
    cleanup = undefined;
    virtualizer = undefined;
    for (const item of mounted.values()) {
      item.controller.abort();
      pause(item.node);
    }
    mounted.clear();
    content.replaceChildren();
  };

  const fill = async (
    index: number,
    item: { node: HTMLElement; controller: AbortController },
    estimate: number,
  ) => {
    const post = posts[index];
    if (!post) throw new Error("reader post is missing");
    const url = new URL(post.url, location.href).href;
    const cached = cache.get(url);
    try {
      const fragment = cached ?? (await load(url, item.controller.signal));
      if (item.controller.signal.aborted || mounted.get(index) !== item) return;
      cache.delete(url);
      cache.set(url, fragment);
      if (cache.size > 12) {
        const oldest = cache.keys().next().value;
        if (oldest !== undefined) cache.delete(oldest);
      }
      item.node.replaceChildren(fragment.cloneNode(true));
      const date = item.node.querySelector(":scope > .eyebrow");
      if (!date) throw new Error("reader date is missing");
      const title = document.createElement("h3");
      title.className = "post-reader__title";
      const link = document.createElement("a");
      link.href = post.url;
      link.textContent = post.title;
      title.append(link);
      date.after(title);
      item.node.style.minHeight = "";
      item.node.removeAttribute("aria-busy");
    } catch (error) {
      if (item.controller.signal.aborted) return;
      console.error("could not load reader post", error);
      const notice = document.createElement("p");
      notice.setAttribute("role", "alert");
      notice.textContent = `could not load post (${error instanceof Error ? error.message : "unknown error"}).`;
      const retry = document.createElement("button");
      retry.type = "button";
      retry.textContent = "retry post";
      retry.addEventListener("click", () => {
        item.node.style.minHeight = `${estimate}px`;
        item.node.setAttribute("aria-busy", "true");
        item.node.replaceChildren("loading post...");
        void fill(index, item, estimate);
      });
      item.node.replaceChildren(notice, retry);
      item.node.style.minHeight = "";
      item.node.removeAttribute("aria-busy");
    }
    virtualizer?.measureElement(item.node);
  };

  const render = () => {
    if (!virtualizer || !track) return;
    const last = posts.at(-1);
    const lastSize = last ? (virtualizer.itemSizeCache.get(last.url) ?? 0) : 0;
    // A short final post must still be able to align with the reader's top.
    const paddingEnd = Math.max(
      0,
      content.clientHeight - toolbarHeight - lastSize,
    );
    if (paddingEnd !== virtualizer.options.paddingEnd)
      virtualizer.setOptions({ ...virtualizer.options, paddingEnd });
    const visible = virtualizer.getVirtualItems();
    const needed = new Set(visible.map((item) => item.index));
    for (const [index, item] of mounted) {
      if (!needed.has(index)) {
        item.controller.abort();
        pause(item.node);
        item.node.remove();
        mounted.delete(index);
      }
    }
    track.style.height = `${virtualizer.getTotalSize()}px`;
    let previous: HTMLElement | undefined;
    for (const row of visible) {
      const post = posts[row.index];
      if (!post) throw new Error("reader row is missing");
      let item = mounted.get(row.index);
      if (!item) {
        const node = document.createElement("article");
        node.className = "post-reader__entry";
        node.dataset.index = String(row.index);
        node.dataset.postUrl = post.url;
        node.setAttribute("aria-label", post.title);
        node.setAttribute("aria-posinset", String(row.index + 1));
        node.setAttribute("aria-setsize", String(posts.length));
        node.setAttribute("aria-busy", "true");
        node.style.minHeight = `${row.size}px`;
        node.textContent = "loading post...";
        item = { node, controller: new AbortController() };
        mounted.set(row.index, item);
        void fill(row.index, item, row.size);
      }
      item.node.style.transform = `translateY(${row.start}px)`;
      const next = previous ? previous.nextSibling : track.firstChild;
      if (next !== item.node) track.insertBefore(item.node, next);
      previous = item.node;
      virtualizer.measureElement(item.node);
    }
    const first = virtualizer.getVirtualItemForOffset(content.scrollTop + 1);
    const post = first && posts[first.index];
    if (post && post !== active) {
      active = post;
      setActive(post);
      measureToolbar();
    }
  };

  const rebuild = (filter: string, currentUrl = active?.url) => {
    if (!opening) throw new Error("reader is not open");
    const selection = readerSelection(allPosts, filter, opening, currentUrl);
    clear();
    posts = selection.posts;
    select.querySelector("option[data-current-filter]")?.remove();
    if (filter && !Array.from(select.options).some((o) => o.value === filter)) {
      const option = new Option(`${filter.slice(4)} (${posts.length})`, filter);
      option.dataset.currentFilter = "";
      select.add(option);
    }
    select.value = filter;
    status.hidden = selection.index !== null;
    status.setAttribute("role", "status");
    status.textContent = selection.index === null ? "no matching posts." : "";
    if (selection.index === null) return;
    const post = posts[selection.index];
    if (!post) throw new Error("reader anchor is missing");
    active = post;
    setActive(post);
    measureToolbar();
    track = document.createElement("div");
    track.className = "post-reader__track";
    const estimate = Math.max(240, content.clientHeight - toolbarHeight);
    track.style.height = `${(posts.length + 1) * estimate}px`;
    content.replaceChildren(track);
    content.scrollTop = selection.index * estimate;
    const version = generation;
    virtualizer = new Virtualizer<HTMLElement, HTMLElement>({
      count: posts.length,
      getScrollElement: () => content,
      getItemKey: (index) => {
        const post = posts[index];
        if (!post) throw new Error("reader key is missing");
        return post.url;
      },
      estimateSize: () => estimate,
      initialOffset: selection.index * estimate,
      paddingEnd: estimate,
      overscan: 1,
      // Virtual offsets start below the overlapping toolbar, not at its top.
      observeElementRect: (instance, callback) =>
        observeElementRect(instance, (rect) =>
          callback({
            ...rect,
            height: Math.max(0, rect.height - toolbarHeight),
          }),
        ),
      observeElementOffset,
      scrollToFn: elementScroll,
      rangeExtractor: (range) => {
        const indexes = defaultRangeExtractor(range);
        const focused = document.activeElement?.closest<HTMLElement>(
          ".post-reader__entry",
        );
        if (focused && content.contains(focused))
          indexes.push(Number(focused.dataset.index));
        return [...new Set(indexes)].sort((a, b) => a - b);
      },
      onChange: () => {
        if (version === generation) render();
      },
    });
    virtualizer.shouldAdjustScrollPositionOnItemSizeChange = (item) =>
      item.index < (virtualizer?.range?.startIndex ?? 0);
    cleanup = virtualizer._didMount();
    virtualizer._willUpdate();
    render();
    virtualizer.scrollToIndex(selection.index, { align: "start" });
  };

  const changeFilter = async (filter: string, currentUrl = active?.url) => {
    if (filter.startsWith("tag:")) filter = `tag:${tagKey(filter.slice(4))}`;
    const version = ++transition;
    animation?.cancel();
    const motion = !matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (motion) {
      animation = content.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 100,
        fill: "forwards",
      });
      await animation.finished.catch((error: unknown) => {
        if (!(error instanceof DOMException && error.name === "AbortError"))
          throw error;
      });
    }
    if (version !== transition || !opening) return;
    const restoreFocus = content.contains(document.activeElement);
    rebuild(filter, currentUrl);
    animation?.cancel();
    if (motion)
      animation = content.animate(
        [
          { opacity: 0, transform: "translateY(4px)" },
          { opacity: 1, transform: "none" },
        ],
        { duration: 180, easing: "ease-out" },
      );
    if (restoreFocus) content.focus({ preventScroll: true });
  };

  select.addEventListener("change", () => void changeFilter(select.value));
  form.addEventListener("submit", (event) => event.preventDefault());
  content.addEventListener("focusout", () => render());
  content.addEventListener("click", (event) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      !(event.target instanceof Element)
    )
      return;
    const link = event.target.closest<HTMLAnchorElement>(".tags a");
    if (
      !link ||
      link.hasAttribute("download") ||
      (link.target && link.target !== "_self")
    )
      return;
    const url = new URL(link.href);
    const tag = url.searchParams.get("tag");
    if (!tag || url.origin !== location.origin) return;
    event.preventDefault();
    void changeFilter(
      `tag:${tag}`,
      link.closest<HTMLElement>(".post-reader__entry")?.dataset.postUrl,
    );
  });

  return {
    open(url: string, feed: ReaderPost[], source: HTMLSelectElement) {
      transition++;
      animation?.cancel();
      allPosts = feed;
      opening = allPosts.find(
        (post) => new URL(post.url, location.href).href === url,
      );
      if (!opening) throw new Error("opening post is missing from the feed");
      active = opening;
      content.tabIndex = 0;
      content.setAttribute("role", "feed");
      content.setAttribute("aria-label", "filtered posts");
      select.replaceChildren(
        ...Array.from(source.children, (node) => node.cloneNode(true)),
      );
      const all = select.options[0];
      if (all)
        all.textContent = `all ${opening.kind} posts (${readerSelection(allPosts, "", opening).posts.length})`;
      form.hidden = false;
      toolbarResize.observe(toolbar);
      rebuild(source.value);
      content.focus({ preventScroll: true });
    },
    close() {
      transition++;
      animation?.cancel();
      opening = undefined;
      toolbarResize.disconnect();
      toolbarHeight = 0;
      content.style.removeProperty("--post-reader-header-height");
      clear();
      form.hidden = true;
    },
  };
}
