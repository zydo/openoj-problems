# Updatable Region Sums

## Description

An integer `matrix` is handed to you once, and afterwards two kinds of request
keep arriving in any order: rewrite one cell, or report what an axis-aligned
rectangle of cells currently adds up to. A rectangle is named by its top-left
corner `(top, left)` and its bottom-right corner `(bottom, right)`, with every
row from `top` to `bottom` and every column from `left` to `right` counted in.

Since cells change, a table of totals computed once at the start goes out of
date the moment a write lands — the structure has to absorb a write about as
cheaply as it answers a question.

Implement the `UpdatableRegions` class:

- `UpdatableRegions(int[][] matrix)` — start from the given grid.
- `void setValue(int row, int col, int value)` — make the cell at row `row`
  and column `col` equal `value` from now on.
- `long regionSum(int top, int left, int bottom, int right)` — return the
  current total of every cell in rows `top..bottom` and columns
  `left..right`.

### Example 1

```text
Input:
["UpdatableRegions", "regionSum", "setValue", "regionSum"]
[[[[6, 2, 7, 1, 3], [0, 4, 5, 8, 2], [3, 1, 9, 0, 4], [7, 5, 2, 6, 1], [2, 8, 0, 3, 5]]], [1, 0, 3, 2], [2, 1, 6], [1, 0, 3, 2]]
Output: [null, 36, null, 41]
Explanation:
UpdatableRegions regions = new UpdatableRegions([
    [6, 2, 7, 1, 3],
    [0, 4, 5, 8, 2],
    [3, 1, 9, 0, 4],
    [7, 5, 2, 6, 1],
    [2, 8, 0, 3, 5]]);
regions.regionSum(1, 0, 3, 2); // (0+4+5) + (3+1+9) + (7+5+2) = 36
regions.setValue(2, 1, 6);     // the cell holding 1 now holds 6
regions.regionSum(1, 0, 3, 2); // the same rectangle, now 36 + 5 = 41
```

![A five by five grid drawn twice; a three by three rectangle spanning rows one to three and columns zero to two is outlined in both copies, its cells add to thirty-six on the left, and after the cell in row two column one is rewritten from one to six the identical rectangle on the right adds to forty-one](figures/example-1.svg)

### Example 2

```text
Input:
["UpdatableRegions", "regionSum", "setValue", "regionSum", "regionSum"]
[[[[-4, 7, 0], [5, -2, 3]]], [0, 0, 1, 2], [1, 1, 6], [1, 1, 1, 2], [0, 0, 1, 2]]
Output: [null, 9, null, 9, 17]
Explanation:
UpdatableRegions regions = new UpdatableRegions([[-4, 7, 0], [5, -2, 3]]);
regions.regionSum(0, 0, 1, 2); // the whole grid: -4+7+0+5-2+3 = 9
regions.setValue(1, 1, 6);     // the bottom row becomes [5, 6, 3]
regions.regionSum(1, 1, 1, 2); // part of one row: 6 + 3 = 9
regions.regionSum(0, 0, 1, 2); // the whole grid again, now 17
```

### Constraints

- The grid has `m` rows and `n` columns, with `1 <= m, n <= 200` and every row
  the same length.
- Cell contents, initial or written, never exceed `1000` in absolute value;
  neither does `value`.
- A write names `0 <= row < m` and `0 <= col < n`.
- A question names `0 <= top <= bottom < m` and `0 <= left <= right < n`.
- `setValue` and `regionSum` are called at most `5000` times together.

### Follow-up

Can both operations run in `O(log m · log n)` time on an `m × n` grid?

## Hints

### Hint 1

Corner-anchored totals answer any rectangle in four lookups, but rewriting one
cell invalidates most of that table at once. Look for totals over _pieces_ of
the grid instead — few enough pieces per question to stay fast, and few enough
pieces containing any one cell to keep a write cheap.

### Hint 2

Take the one-dimensional trick — blocks whose lengths are powers of two, slot
`i` covering the `i & (-i)` positions ending at `i` — and apply it along both
axes at once. Slot `(i, j)` then holds the total of a rectangle `i & (-i)` rows
tall and `j & (-j)` columns wide whose bottom-right corner is `(i, j)`.
Numbering from `1` in both directions keeps the low-bit arithmetic valid.

### Hint 3

Peeling the low bit off the row index, and off the column index inside each
step, enumerates disjoint rectangles that exactly tile a corner-anchored
region; adding it back enumerates the slots a written cell belongs to. An
arbitrary rectangle is then four corner-anchored totals combined by inclusion
and exclusion, and a write should propagate the _difference_ it makes, so keep
the current cell contents beside the slots to know what that difference is.
