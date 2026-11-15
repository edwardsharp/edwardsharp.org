export function isMediaKind(kind: string): boolean {
  return ["photo", "photoset", "audio", "video"].includes(kind);
}

export function enhanceMedia(shell: HTMLElement): void {
  const dialog = shell.querySelector<HTMLDialogElement>(".media-dialog");
  const permalink = dialog?.querySelector<HTMLAnchorElement>(
    ".media-dialog__permalink",
  );
  const close = dialog?.querySelector<HTMLButtonElement>(
    ".media-dialog__close",
  );
  const status = dialog?.querySelector<HTMLElement>(".media-dialog__status");
  const retry = dialog?.querySelector<HTMLButtonElement>(
    ".media-dialog__retry",
  );
  const content = dialog?.querySelector<HTMLElement>(".media-dialog__content");
  if (!dialog || !permalink || !close || !status || !retry || !content)
    throw new Error("missing media dialog controls");

  let request: AbortController | undefined;
  let opener: HTMLAnchorElement | undefined;

  const clearMedia = () => {
    for (const media of content.querySelectorAll<HTMLMediaElement>(
      "audio, video",
    ))
      media.pause();
    content.replaceChildren();
  };

  const showError = (error: unknown) => {
    console.error("could not load media", error);
    status.hidden = false;
    status.setAttribute("role", "alert");
    status.textContent = `could not load media (${error instanceof Error ? error.message : "unknown error"}). try again or follow the title to the post.`;
    retry.hidden = false;
  };

  const load = async (url: string) => {
    request?.abort();
    const controller = new AbortController();
    request = controller;
    clearMedia();
    status.hidden = false;
    status.setAttribute("role", "status");
    status.textContent = "loading media...";
    retry.hidden = true;
    try {
      if (new URL(url).origin !== location.origin)
        throw new Error("media posts must be on this site");
      const response = await fetch(url, { signal: controller.signal });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      if (new URL(response.url).origin !== location.origin)
        throw new Error("media post redirected away from this site");
      const page = new DOMParser().parseFromString(
        await response.text(),
        "text/html",
      );
      if (controller.signal.aborted || !dialog.open) return;
      const prose = page.querySelector(".post > .prose");
      if (!prose?.querySelector("img, audio, video, iframe"))
        throw new Error("post media is missing");
      content.replaceChildren(...prose.childNodes);
      status.hidden = true;
    } catch (error) {
      if (!controller.signal.aborted) showError(error);
    }
  };

  for (const card of shell.querySelectorAll<HTMLElement>(".hex-card")) {
    if (isMediaKind(card.dataset.kind ?? ""))
      card.querySelector("a")?.setAttribute("aria-haspopup", "dialog");
  }

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
      !isMediaKind(card.dataset.kind ?? "") ||
      link.hasAttribute("download") ||
      (link.target && link.target !== "_self")
    )
      return;
    event.preventDefault();
    opener = link;
    permalink.textContent =
      card.querySelector(".hex-card__title")?.textContent ?? "media";
    permalink.href = link.href;
    dialog.showModal();
    document.documentElement.classList.add("media-open");
    void load(link.href);
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
      )
        showError(new Error(`unavailable asset: ${event.target.src}`));
    },
    true,
  );
  dialog.addEventListener("close", () => {
    request?.abort();
    clearMedia();
    document.documentElement.classList.remove("media-open");
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
}
