import { needsMenu } from "./header-layout.ts";

for (const toggle of document.querySelectorAll<HTMLButtonElement>(
  "[data-bio-photo-toggle]",
)) {
  toggle.addEventListener("click", () => {
    toggle.setAttribute(
      "aria-pressed",
      String(toggle.getAttribute("aria-pressed") !== "true"),
    );
  });
}

function enhanceHeader(header: HTMLElement) {
  const wordmark = header.querySelector<HTMLElement>(".wordmark");
  const navigation = header.querySelector<HTMLElement>("nav");
  const toggle = header.querySelector<HTMLButtonElement>(".header-toggle");
  const filter = header.querySelector<HTMLFormElement>(".feed-filter");
  if (!wordmark || !navigation || !toggle)
    throw new Error("header navigation controls are missing");

  const updateHeight = () => {
    document.documentElement.style.setProperty(
      "--header-height",
      `${header.getBoundingClientRect().height}px`,
    );
  };
  const setOpen = (open: boolean) => {
    const compact = header.classList.contains("is-compact");
    header.classList.toggle("is-open", compact && open);
    toggle.setAttribute("aria-expanded", String(compact && open));
    toggle.setAttribute(
      "aria-label",
      compact && open ? "close navigation" : "open navigation",
    );
    navigation.inert = compact && !open;
    if (compact && !open) navigation.setAttribute("aria-hidden", "true");
    else navigation.removeAttribute("aria-hidden");
    updateHeight();
  };
  const update = () => {
    const links = Array.from(navigation.querySelectorAll("a"));
    const gap = Number.parseFloat(getComputedStyle(header).columnGap);
    const navigationWidth = () =>
      links.reduce(
        (width, link) => width + link.getBoundingClientRect().width,
        0,
      ) +
      Math.max(0, links.length - 1) *
        Number.parseFloat(getComputedStyle(navigation).columnGap);
    header.classList.remove("has-icon-navigation");
    const widths = {
      available: header.getBoundingClientRect().width,
      wordmark: wordmark.getBoundingClientRect().width,
      navigation: navigationWidth(),
      filter:
        filter && !filter.hidden
          ? Number.parseFloat(getComputedStyle(filter).minWidth)
          : 0,
      gap,
    };
    const icons = needsMenu(widths);
    header.classList.toggle("has-icon-navigation", icons);
    const compact =
      icons && needsMenu({ ...widths, navigation: navigationWidth() });
    const changed = compact !== header.classList.contains("is-compact");
    const restoreFocus =
      compact && changed && navigation.contains(document.activeElement);
    const focusNavigation =
      !compact && changed && document.activeElement === toggle;
    header.classList.toggle("is-compact", compact);
    toggle.hidden = !compact;
    setOpen(changed ? false : header.classList.contains("is-open"));
    if (restoreFocus) toggle.focus({ preventScroll: true });
    if (focusNavigation)
      navigation
        .querySelector<HTMLAnchorElement>("a")
        ?.focus({ preventScroll: true });
  };

  toggle.addEventListener("click", () =>
    setOpen(!header.classList.contains("is-open")),
  );
  header.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header.classList.contains("is-open")) {
      event.preventDefault();
      setOpen(false);
      toggle.focus();
    }
  });
  navigation.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a"))
      setOpen(false);
  });
  const resize = new ResizeObserver(update);
  for (const element of [header, wordmark, navigation, filter])
    if (element) resize.observe(element);
  update();
  void document.fonts.ready.then(update);
  window.addEventListener("pagehide", (event) => {
    if (!event.persisted) resize.disconnect();
  });
}

const header = document.querySelector<HTMLElement>(".site-header");
if (header) enhanceHeader(header);

const bio = document.querySelector<HTMLElement>("#bio-panel");
const wordmark = header?.querySelector<HTMLAnchorElement>(".wordmark");
const main = document.querySelector<HTMLElement>("main");
if (header && bio && wordmark && main) {
  const shell = bio.parentElement;
  if (!shell) throw new Error("bio container is missing");
  bio.inert = true;
  bio.setAttribute("aria-hidden", "true");
  bio.hidden = false;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let open = false;
  let animations: Animation[] = [];
  const finishReveal = () => {
    shell.classList.toggle("is-bio-open", open);
    for (const animation of animations) animation.cancel();
    animations = [];
    shell.dispatchEvent(new Event("bio-layout"));
  };
  const setBioOpen = (open: boolean, restoreFocus = true) => {
    window.scrollTo({ top: 0, behavior: "instant" });
    animateReveal(open);
    wordmark.setAttribute("aria-expanded", String(open));
    bio.inert = !open;
    bio.setAttribute("aria-hidden", String(!open));
    main.inert = open;
    if (open)
      bio
        .querySelector<HTMLElement>(".bio-panel__content")
        ?.focus({ preventScroll: true });
    else if (restoreFocus) wordmark.focus({ preventScroll: true });
  };
  const animateReveal = (nextOpen: boolean) => {
    const currentTop =
      header.getBoundingClientRect().top - shell.getBoundingClientRect().top;
    for (const animation of animations) animation.cancel();
    animations = [];
    open = nextOpen;
    shell.classList.add("is-bio-open");
    const height = bio.getBoundingClientRect().height;
    const from = currentTop - height;
    const to = open ? 0 : -height;
    if (reducedMotion.matches || Math.abs(to - from) < 1) {
      finishReveal();
      return;
    }
    // commit layout once, then slide the bio and page together without reflowing each frame
    animations = Array.from(shell.children, (element) =>
      element.animate(
        [
          { transform: `translateY(${from}px)` },
          { transform: `translateY(${to}px)` },
        ],
        {
          duration: 560 * Math.min(1, Math.abs(to - from) / height),
          easing: "cubic-bezier(0.45, 0, 0.2, 1)",
          fill: "both",
        },
      ),
    );
    animations[0]!.onfinish = finishReveal;
  };
  wordmark.addEventListener("click", (event) => {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    )
      return;
    event.preventDefault();
    setBioOpen(!open);
  });
  header
    .querySelector<HTMLSelectElement>(".feed-filter select")
    ?.addEventListener("change", () => {
      if (open) setBioOpen(false, false);
    });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && open) {
      event.preventDefault();
      setBioOpen(false);
    }
  });
  window.addEventListener("resize", finishReveal);
  reducedMotion.addEventListener("change", finishReveal);
}
