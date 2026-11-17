import "./header.ts";
import "./feed.ts";
import "./archive.ts";
import { enhanceCodeBlocks, handleCodeBlockClick } from "./code-blocks.ts";

for (const prose of document.querySelectorAll(
  '.post[data-kind="code"] > .prose',
))
  enhanceCodeBlocks(prose);
document.addEventListener("click", handleCodeBlockClick);
