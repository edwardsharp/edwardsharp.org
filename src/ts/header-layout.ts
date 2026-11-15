export function needsMenu(widths: {
  available: number;
  wordmark: number;
  navigation: number;
  filter: number;
  gap: number;
}): boolean {
  const gaps = widths.filter > 0 ? 2 : 1;
  return (
    widths.wordmark + widths.navigation + widths.filter + gaps * widths.gap >
    widths.available
  );
}
