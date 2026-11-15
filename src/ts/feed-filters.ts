interface FilterPost {
  kind: string;
  tags: readonly string[];
}

export function tagKey(tag: string): string {
  return tag.toLowerCase().replace(/[\s_-]+/g, "");
}

export function countTags(
  posts: readonly Pick<FilterPost, "tags">[],
): Map<string, number> {
  const tagCounts = new Map<string, number>();
  for (const post of posts) {
    const seen = new Set<string>();
    for (const tag of post.tags) {
      const key = tagKey(tag);
      if (!key || seen.has(key)) continue;
      seen.add(key);
      tagCounts.set(key, (tagCounts.get(key) ?? 0) + 1);
    }
  }
  return tagCounts;
}

export function filterChoices(posts: readonly FilterPost[]) {
  const typeCounts = new Map<string, number>();
  const tagCounts = countTags(posts);
  const tagLabels = new Map<string, string>();
  for (const post of posts) {
    typeCounts.set(post.kind, (typeCounts.get(post.kind) ?? 0) + 1);
    for (const tag of post.tags) {
      const key = tagKey(tag);
      if (key && !tagLabels.has(key))
        tagLabels.set(key, tag.trim().toLowerCase().replace(/\s+/g, " "));
    }
  }
  const choices = (
    counts: Map<string, number>,
    prefix: string,
    minimum: number,
    labels?: ReadonlyMap<string, string>,
  ) =>
    [...counts]
      .filter(([, count]) => count >= minimum)
      .sort(
        ([a, aCount], [b, bCount]) =>
          (prefix === "tag" ? bCount - aCount : 0) ||
          (labels?.get(a) ?? a).localeCompare(labels?.get(b) ?? b),
      )
      .map(([value, count]) => ({
        value: `${prefix}:${value}`,
        label: `${labels?.get(value) ?? value} (${count})`,
      }));
  return {
    types: choices(typeCounts, "type", 1),
    tags: choices(tagCounts, "tag", 2, tagLabels),
  };
}

export function filterPosts<T extends FilterPost>(
  posts: T[],
  filter: string,
): T[] {
  if (filter.startsWith("type:"))
    return posts.filter((post) => post.kind === filter.slice(5));
  if (filter.startsWith("tag:")) {
    const key = tagKey(filter.slice(4));
    return posts.filter(
      (post) => key !== "" && post.tags.some((tag) => tagKey(tag) === key),
    );
  }
  if (filter === "") return posts;
  throw new Error("invalid journal filter");
}
