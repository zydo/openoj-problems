# Spreadsheet Grid

## Description

Model the core of a spreadsheet with live sum formulas. A grid has rows
numbered `1..height` and columns lettered `'A'..width`; every cell starts at
`0`.

Implement the `SpreadsheetGrid` class:

- `SpreadsheetGrid(int height, char width)` creates the grid.
- `void set(int row, char column, int val)` writes a plain value into a
  cell, replacing anything — including a formula — previously there.
- `int get(int row, char column)` reads a cell's current value.
- `int sum(int row, char column, List<String> numbers)` writes a live sum
  formula into the cell: each entry of `numbers` is either a single cell
  `"ColRow"` or a rectangular range `"ColRow1:ColRow2"` (top-left to
  bottom-right); the cell's value becomes the total of everything named,
  and stays live — later changes to a referenced cell update this cell too —
  until the cell is overwritten by another `set` or `sum`. Returns the
  computed value. No input ever creates a circular reference.

### Example 1

```text
Input:
["SpreadsheetGrid", "set", "sum", "set", "get"]
[[3, "C"], [1, "A", 2], [3, "C", ["A1", "A1:B2"]], [2, "B", 2], [3, "C"]]
Output: [null, null, 4, null, 6]
Explanation: Cell C3's formula sums A1 (2) and the range A1:B2 (2), giving
4; once B2 is set to 2, C3's live formula recomputes to 2 + (2+2) = 6.
```

### Constraints

- `1 <= height <= 26`
- `'A' <= width <= 'Z'`
- `1 <= row <= height`, `'A' <= column <= width`
- `-100 <= val <= 100`
- `1 <= numbers.length <= 5`
- At most `100` calls are made to `set`, `get`, and `sum`.
