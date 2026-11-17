let nextId = 0;

export function enhanceCodeBlocks(root: ParentNode) {
  for (const pre of root.querySelectorAll<HTMLPreElement>("pre")) {
    if (
      pre.closest(".code-snippet") ||
      pre.textContent.replace(/\r?\n$/, "").split(/\r?\n/).length <= 10
    )
      continue;

    const wrapper = pre.ownerDocument.createElement("div");
    wrapper.className = "code-snippet";
    const toggle = pre.ownerDocument.createElement("button");
    toggle.type = "button";
    toggle.className = "code-snippet__toggle";
    toggle.textContent = "show more";
    toggle.setAttribute("aria-expanded", "false");
    pre.id ||= `code-snippet-${++nextId}`;
    toggle.setAttribute("aria-controls", pre.id);
    pre.dataset.codeCollapsed = "true";
    pre.before(wrapper);
    wrapper.append(pre, toggle);
  }
}

export function handleCodeBlockClick(event: Event) {
  if (event.defaultPrevented || !(event.target instanceof Element)) return;
  const toggle = event.target.closest<HTMLButtonElement>(
    ".code-snippet__toggle",
  );
  if (!toggle) return;
  const pre = toggle.parentElement?.querySelector("pre");
  if (!pre) throw new Error("code snippet is missing");
  const collapsed = toggle.getAttribute("aria-expanded") === "true";
  pre.dataset.codeCollapsed = String(collapsed);
  toggle.setAttribute("aria-expanded", String(!collapsed));
  toggle.textContent = collapsed ? "show more" : "show less";
}
