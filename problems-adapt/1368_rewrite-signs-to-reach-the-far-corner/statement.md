# Rewrite Signs to Reach the Far Corner

## Description

Every cell of an `m x n` grid carries a sign pointing to the next cell to
enter. The value of `grid[i][j]` means:

- `1` — step right, from `grid[i][j]` to `grid[i][j + 1]`
- `2` — step left, to `grid[i][j - 1]`
- `3` — step down, to `grid[i + 1][j]`
- `4` — step up, to `grid[i - 1][j]`

Some signs may point outside the grid.

You enter at the top-left cell `(0, 0)`. A walk keeps taking the step each
cell prescribes, and you want to end at the bottom-right cell
`(m - 1, n - 1)`. Before setting out you may rewrite the sign of any cell,
paying `1` per cell rewritten (a cell can be rewritten once).

Return the least total payment after which following the signs from
`(0, 0)` lands you on `(m - 1, n - 1)`.

### Example 1

```text
Input: grid = [[3,4,4],[3,4,4],[3,4,4],[3,4,2]]
Output: 2
Explanation: The first column points down all the way, so you reach (3, 0)
for free. Rewrite (3,0) from down to right, walk to (3,1), then rewrite
(3,1) from up to right and step onto (3,2). Two rewrites in total; no
single rewrite suffices, since after one free trip down column 0 both
remaining turns are still needed.
```

### Example 2

```text
Input: grid = [[1,1,3],[4,2,3],[1,4,2]]
Output: 0
Explanation: (0,0) says right, (0,1) says right, (0,2) says down, (1,2)
says down, and that is the goal cell (2,2). Nothing needs rewriting.
```

### Example 3

```text
Input: grid = [[2,3],[3,1]]
Output: 1
Explanation: The start cell points left, off the grid, so it must be
rewritten. Pointing it right sends you to (0,1), whose down sign finishes
the walk at (1,1).
```

### Constraints

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 100`
- `1 <= grid[i][j] <= 4`

## Hints

### Hint 1

Make it a shortest-path question: cells are nodes, and stepping from a cell
to each of its four neighbours costs `0` when the cell's sign already
points there and `1` otherwise — the price of rewriting it.

### Hint 2

Every edge weight is 0 or 1, so Dijkstra degenerates into 0-1 BFS with a
deque: free steps enter at the front, paid steps at the back. The answer is
the distance to `(m - 1, n - 1)`.
