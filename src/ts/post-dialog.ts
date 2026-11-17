import { createPostReader, type ReaderPost } from "./post-reader.ts";
import { enhanceCodeBlocks } from "./code-blocks.ts";

export function enhancePostDialog(shell: HTMLElement) {
  const dialog = shell.querySelector<HTMLDialogElement>(".post-dialog");
  const permalink = dialog?.querySelector<HTMLAnchorElement>(
    ".post-dialog__permalink",
  );
  const close = dialog?.querySelector<HTMLButtonElement>(".post-dialog__close");
  const status = dialog?.querySelector<HTMLElement>(".post-dialog__status");
  const retry = dialog?.querySelector<HTMLButtonElement>(".post-dialog__retry");
  const content = dialog?.querySelector<HTMLElement>(".post-dialog__content");
  if (!dialog || !permalink || !close || !status || !retry || !content)
    throw new Error("missing post dialog controls");

  let request: AbortController | undefined;
  let opener: HTMLAnchorElement | undefined;
  let feed: ReaderPost[] | undefined;
  let feedFilter: HTMLSelectElement | undefined;
  let reader: ReturnType<typeof createPostReader> | undefined;

  const clearContent = () => {
    for (const media of content.querySelectorAll<HTMLMediaElement>(
      "audio, video",
    ))
      media.pause();
    content.replaceChildren();
  };

  const showError = (error: unknown) => {
    console.error("could not load post", error);
    status.hidden = false;
    status.setAttribute("role", "alert");
    status.textContent = `could not load post (${error instanceof Error ? error.message : "unknown error"}). try again or follow the title to the post.`;
    retry.hidden = false;
  };

  const loadPage = async (url: string, signal: AbortSignal) => {
    if (new URL(url).origin !== location.origin)
      throw new Error("posts must be on this site");
    const response = await fetch(url, { signal });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    if (new URL(response.url).origin !== location.origin)
      throw new Error("post redirected away from this site");
    const page = new DOMParser().parseFromString(
      await response.text(),
      "text/html",
    );
    const prose = page.querySelector(".post > .prose");
    const date = page.querySelector(".post > .page-heading > .eyebrow");
    const tags = page.querySelector(".post > .post-navigation > .tags");
    if (!prose || !date) throw new Error("post content or date is missing");
    if (prose.parentElement?.dataset.kind === "code") enhanceCodeBlocks(prose);
    const fragment = document.createDocumentFragment();
    fragment.append(date, ...prose.childNodes, ...(tags ? [tags] : []));
    return fragment;
  };

  const load = async (url: string) => {
    request?.abort();
    const controller = new AbortController();
    request = controller;
    clearContent();
    status.hidden = false;
    status.setAttribute("role", "status");
    status.textContent = "loading post...";
    retry.hidden = true;
    try {
      const fragment = await loadPage(url, controller.signal);
      if (controller.signal.aborted || !dialog.open) return;
      content.replaceChildren(fragment);
      status.hidden = true;
    } catch (error) {
      if (!controller.signal.aborted) showError(error);
    }
  };

  for (const link of shell.querySelectorAll(".hex-card__link"))
    link.setAttribute("aria-haspopup", "dialog");

  shell.addEventListener("click", (event) => {
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
    const link = event.target.closest<HTMLAnchorElement>(".hex-card__link");
    const card = link?.closest<HTMLElement>(".hex-card");
    if (
      !link ||
      !card ||
      link.hasAttribute("download") ||
      (link.target && link.target !== "_self")
    )
      return;
    event.preventDefault();
    opener = link;
    permalink.textContent =
      card.querySelector(".hex-card__title")?.textContent ?? "post";
    permalink.href = link.href;
    dialog.showModal();
    document.documentElement.classList.add("post-dialog-open");
    if (reader && feed && feedFilter) {
      request?.abort();
      status.hidden = true;
      retry.hidden = true;
      dialog.classList.add("is-reader");
      try {
        reader.open(link.href, feed, feedFilter);
      } catch (error) {
        reader.close();
        dialog.classList.remove("is-reader");
        showError(error);
      }
    } else void load(link.href);
  });

  close.addEventListener("click", () => dialog.close());
  retry.addEventListener("click", () => void load(permalink.href));
  dialog.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      dialog.close();
    }
  });
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom
    )
      dialog.close();
  });
  content.addEventListener(
    "error",
    (event) => {
      if (
        event.target instanceof HTMLImageElement ||
        event.target instanceof HTMLMediaElement
      ) {
        console.warn("could not load post asset", event.target.src);
        const notice = document.createElement("span");
        notice.className = "asset-notice";
        notice.setAttribute("role", "status");
        notice.textContent =
          event.target instanceof HTMLImageElement
            ? "this image is unavailable."
            : "this audio or video is unavailable.";
        event.target.replaceWith(notice);
      }
    },
    true,
  );
  dialog.addEventListener("close", () => {
    request?.abort();
    reader?.close();
    dialog.classList.remove("is-reader");
    clearContent();
    document.documentElement.classList.remove("post-dialog-open");
    const target = opener?.isConnected
      ? opener
      : Array.from(
          shell.querySelectorAll<HTMLAnchorElement>(".hex-card__link"),
        ).find((link) => link.href === permalink.href);
    const fallback = document.querySelector<HTMLSelectElement>(
      ".site-header .feed-filter select",
    );
    (target ?? fallback)?.focus({ preventScroll: true });
  });

  return {
    setFeed(posts: ReaderPost[], select: HTMLSelectElement) {
      feed = posts;
      feedFilter = select;
      const form = dialog.querySelector<HTMLFormElement>(
        ".post-dialog__filter",
      );
      const readerFilter = form?.querySelector<HTMLSelectElement>("select");
      const toolbar = dialog.querySelector<HTMLElement>(
        ".post-dialog__toolbar",
      );
      if (!form || !readerFilter || !toolbar)
        throw new Error("missing reader controls");
      reader ??= createPostReader({
        content,
        toolbar,
        form,
        select: readerFilter,
        status,
        load: loadPage,
        setActive(post) {
          permalink.textContent = post.title;
          permalink.href = post.url;
          permalink.title = post.title;
        },
      });
    },
  };
}
