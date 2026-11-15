import { needsMenu } from "./header-layout.ts";

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
