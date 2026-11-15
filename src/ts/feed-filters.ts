interface FilterPost {
  kind: string;
  tags: readonly string[];
}

export function filterChoices(posts: readonly FilterPost[]) {
  const typeCounts = new Map<string, number>();
  const tagCounts = new Map<string, number>();
  for (const post of posts) {
    typeCounts.set(post.kind, (typeCounts.get(post.kind) ?? 0) + 1);
    for (const tag of new Set(post.tags))
      tagCounts.set(tag, (tagCounts.get(tag) ?? 0) + 1);
  }
  const choices = (
    counts: Map<string, number>,
    prefix: string,
    minimum: number,
  ) =>
    [...counts]
      .filter(([, count]) => count >= minimum)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([value, count]) => ({
        value: `${prefix}:${value}`,
        label: `${value} (${count})`,
      }));
  return {
    types: choices(typeCounts, "type", 1),
    tags: choices(tagCounts, "tag", 2),
  };
}

export function filterPosts<T extends FilterPost>(
  posts: T[],
  filter: string,
): T[] {
  if (filter.startsWith("type:"))
    return posts.filter((post) => post.kind === filter.slice(5));
  if (filter.startsWith("tag:"))
    return posts.filter((post) => post.tags.includes(filter.slice(4)));
  if (filter === "") return posts;
  throw new Error("invalid journal filter");
}
