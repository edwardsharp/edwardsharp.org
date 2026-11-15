import { readFileSync } from "node:fs";
import { countTags, tagKey } from "./feed-filters.ts";

const input: unknown = JSON.parse(readFileSync(0, "utf8"));
function isTagList(value: unknown): value is string[] {
  return (
    Array.isArray(value) &&
    value.every((tag: unknown) => typeof tag === "string")
  );
}
if (!Array.isArray(input) || !input.every(isTagList))
  throw new Error("expected an array of post tag lists");

const counts = countTags(input.map((tags) => ({ tags })));
console.log(
  JSON.stringify(
    Object.fromEntries(
      input.flatMap((tags) =>
        tags.map((tag) => [tag, counts.get(tagKey(tag)) ?? 0]),
      ),
    ),
  ),
);
