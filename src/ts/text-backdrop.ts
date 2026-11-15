export async function createTextBackdrop(): Promise<
  ((copy: HTMLElement) => void) | null
> {
  if (
    !CSS.supports("backdrop-filter", "blur(4px)") &&
    !CSS.supports("-webkit-backdrop-filter", "blur(4px)")
  ) {
    console.warn("text backdrop blur is unsupported in this browser");
    return null;
  }
  await document.fonts.ready;

  return (copy) => {
    const bounds = copy.getBoundingClientRect();
    const rectangles: string[] = [];
    for (const element of copy.children) {
      if (!(element instanceof HTMLElement)) continue;
      const clip = element.getBoundingClientRect();
      const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
      let node;
      while ((node = walker.nextNode())) {
        for (const match of (node.textContent ?? "").matchAll(/\S+/gu)) {
          const range = document.createRange();
          range.setStart(node, match.index);
          range.setEnd(node, match.index + match[0].length);
          for (const rect of range.getClientRects()) {
            const left = Math.max(rect.left, clip.left);
            const top = Math.max(rect.top, clip.top);
            const right = Math.min(rect.right, clip.right);
            const bottom = Math.min(rect.bottom, clip.bottom);
            if (right <= left || bottom <= top) continue;
            rectangles.push(
              `<rect x="${left - bounds.left}" y="${top - bounds.top}" width="${right - left + 2}" height="${bottom - top + 2}"/>`,
            );
          }
        }
      }
    }
    const mask = `<svg xmlns="http://www.w3.org/2000/svg" width="${bounds.width + 2}" height="${bounds.height + 2}"><g fill="white">${rectangles.join("")}</g></svg>`;
    copy.style.setProperty(
      "--text-mask",
      `url("data:image/svg+xml,${encodeURIComponent(mask)}")`,
    );
    copy.classList.add("has-text-mask");
  };
}
