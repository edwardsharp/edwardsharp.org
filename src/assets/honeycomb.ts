export function geometry(width: number) {
  if (!Number.isFinite(width) || width <= 0) {
    throw new RangeError("grid width must be positive");
  }
  const gap = 12;
  const columns =
    width < 280 ? 1 : Math.min(5, Math.max(2, Math.floor((width + gap) / 252)));
  const tileWidth = (width - (columns - 1) * gap) / columns;
  const tileHeight = (tileWidth * 2) / Math.sqrt(3);
  const pitch =
    columns === 1 ? tileHeight + gap : ((tileWidth + gap) * Math.sqrt(3)) / 2;
  return { columns, gap, tileWidth, tileHeight, pitch };
}

export function buildRows(count: number, columns: number) {
  if (
    !Number.isInteger(count) ||
    count < 0 ||
    !Number.isInteger(columns) ||
    columns < 1
  ) {
    throw new RangeError("invalid honeycomb item count or columns");
  }
  const rows: { start: number; end: number }[] = [];
  for (let start = 0; start < count;) {
    const capacity =
      columns === 1 || rows.length % 2 === 0 ? columns : columns - 1;
    const end = Math.min(count, start + capacity);
    rows.push({ start, end });
    start = end;
  }
  return rows;
}

export function rowForIndex(index: number, columns: number) {
  if (columns === 1) return index;
  const cycle = columns * 2 - 1;
  return Math.floor(index / cycle) * 2 + (index % cycle >= columns ? 1 : 0);
}
