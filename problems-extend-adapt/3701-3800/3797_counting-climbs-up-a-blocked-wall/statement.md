# Counting Climbs Up A Blocked Wall

## Description

You are given a string array grid of n rows, each string of length m,
modeling a wall. A cell `grid[i][j]` is either:

- `'.'`: open, and may be stood on, or
- `'#'`: blocked, and may never be entered.

A climb is a walk that begins anywhere open on the bottom row (row n - 1)
and finishes anywhere open on the top row (row 0). Walking obeys these
rules:

- Every move lands on an open cell.
- A move covers Euclidean distance at most d — the integer parameter you
  are given — where cells `(r1, c1)` and `(r2, c2)` sit
  `sqrt((r1 - r2)² + (c1 - c2)²)` apart.
- A move either holds the current row or rises exactly one row (from row r
  to row r - 1).
- Two consecutive moves may not both hold the row: after a move that stays,
  the next move (unless the walk has already finished) must rise.

Count the distinct climbs. The answer can be huge, so report it modulo
`10⁹ + 7`.

### Example 1

```text
Input: grid = [".#.","..."], d = 1
Output: 4
Explanation: The top-middle cell is blocked. From (1,0) one climbs
straight into (0,0); from (1,2) one climbs straight into (0,2); from
(1,1) a sideways slide to (1,0) or to (1,2) can be followed by a rise
into (0,0) or (0,2). Those four walks are all the climbs.
```

### Example 2

```text
Input: grid = ["...","..#"], d = 2
Output: 30
Explanation: With d = 2 the diagonal rises open up, and the blocked
bottom-right cell only trims the starts; counting every walk that ends
on the top row gives 30.
```

### Example 3

```text
Input: grid = [".#."], d = 3
Output: 4
Explanation: With a single row, bottom and top coincide, so every walk
both starts and finishes there: the two one-cell walks, plus a slide
between the two open cells in either direction.
```

### Constraints

- `1 <= n == grid.length <= 750`
- `1 <= m == grid[i].length <= 750`
- `grid[i][j]` is `'.'` or `'#'`.
- `1 <= d <= 750`

## Hints

### Hint 1

Dynamic programming over the rows, from bottom to top, is the natural
frame.

### Hint 2

Carry two numbers per cell: ways to stand there having just risen into
the row, versus ways having just slid within it. A slid-arrival may only
leave by rising.

### Hint 3

Each move's reach is a column interval (the row-hold bound is |dc| <= d;
the rise bound is |dc| <= floor(sqrt(d² - 1))), so prefix sums over the
row aggregate a whole interval's contribution in O(1).

### Hint 4

Row r's two arrays fully determine row r - 1's; the answer is the sum of
both arrays over the open cells of row 0.
