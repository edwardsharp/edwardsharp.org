interface FilterPost {
  kind: string | null;
  tags: readonly string[];
  locations?: readonly string[];
}

export function tagKey(tag: string): string {
  return tag.toLowerCase().replace(/[\s_-]+/g, "");
}

export function locationKey(location: string): string {
  return location.trim().toLowerCase().replace(/\s+/g, " ");
}

function countValues<T>(
  posts: readonly T[],
  values: (post: T) => readonly string[],
  keyFor: (value: string) => string,
): Map<string, number> {
  const counts = new Map<string, number>();
  for (const post of posts) {
    const seen = new Set<string>();
    for (const value of values(post)) {
      const key = keyFor(value);
      if (!key || seen.has(key)) continue;
      seen.add(key);
      counts.set(key, (counts.get(key) ?? 0) + 1);
    }
  }
  return counts;
}

export function countTags(
  posts: readonly Pick<FilterPost, "tags">[],
): Map<string, number> {
  return countValues(posts, (post) => post.tags, tagKey);
}

export function filterChoices(posts: readonly FilterPost[]) {
  const typeCounts = new Map<string, number>();
  const tagCounts = countTags(posts);
  const tagLabels = new Map<string, string>();
  const locationCounts = countValues(
    posts,
    (post) => post.locations ?? [],
    locationKey,
  );
  const locationLabels = new Map<string, string>();
  for (const post of posts) {
    if (post.kind)
      typeCounts.set(post.kind, (typeCounts.get(post.kind) ?? 0) + 1);
    for (const tag of post.tags) {
      const key = tagKey(tag);
      if (key && !tagLabels.has(key))
        tagLabels.set(key, tag.trim().toLowerCase().replace(/\s+/g, " "));
    }
    for (const location of post.locations ?? []) {
      const key = locationKey(location);
      if (key && !locationLabels.has(key))
        locationLabels.set(key, location.trim().replace(/\s+/g, " "));
    }
  }
  const countBand = (count: number) =>
    count <= 10 ? 0 : Math.floor(count / 10);
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
          (prefix !== "type" ? countBand(bCount) - countBand(aCount) : 0) ||
          (labels?.get(a) ?? a).localeCompare(labels?.get(b) ?? b),
      )
      .map(([value, count]) => ({
        value: `${prefix}:${value}`,
        label: `${labels?.get(value) ?? value} (${count})`,
      }));
  return {
    types: choices(typeCounts, "type", 1),
    tags: choices(tagCounts, "tag", 2, tagLabels),
    locations: choices(locationCounts, "location", 2, locationLabels),
  };
}

export function populateFilter(
  select: HTMLSelectElement,
  posts: readonly FilterPost[],
) {
  const choices = filterChoices(posts);
  select.replaceChildren(new Option(`all posts (${posts.length})`, ""));
  for (const [label, values] of [
    ["post typez", choices.types],
    ["locationz", choices.locations],
    ["tagz", choices.tags],
  ] as const) {
    if (!values.length) continue;
    const group = document.createElement("optgroup");
    group.label = label;
    for (const { label, value } of values)
      group.append(new Option(label, value));
    if (select.children.length > 1) select.append(document.createElement("hr"));
    select.append(group);
  }
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
  if (filter.startsWith("location:")) {
    const key = locationKey(filter.slice(9));
    return posts.filter(
      (post) =>
        key !== "" &&
        post.locations?.some((location) => locationKey(location) === key),
    );
  }
  if (filter === "") return posts;
  throw new Error("invalid journal filter");
}

export function readerSelection<T extends FilterPost & { url: string }>(
  posts: T[],
  filter: string,
  openingPost: T,
  currentUrl = openingPost.url,
) {
  const matching = filterPosts(posts, filter || `type:${openingPost.kind}`);
  return {
    posts: matching,
    index: matching.length
      ? Math.max(
          0,
          matching.findIndex((post) => post.url === currentUrl),
        )
      : null,
  };
}
