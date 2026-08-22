# Grid Spread Time

## Description

An `m x n` `grid` records the state of every cell with one of three digits:

- `0` — the cell is blocked and never participates,
- `1` — the cell is waiting,
- `2` — the cell is already reached.

One round advances the picture: every waiting cell that shares an edge with a
reached cell becomes reached itself. Diagonal neighbours do not count.

Return how many rounds pass before no waiting cell is left. Return `-1` if some
cell waits forever.

### Example 1

```text
Input: grid = [[1,1,1],[1,0,1],[2,1,0]]
Output: 5
```

![A three by three grid of digits, each waiting cell tagged with the round at which the spread arrives; the tags run from one up to five.](figures/solution-spread-bfs.svg)

### Example 2

```text
Input: grid = [[2,1,0],[1,0,1],[0,1,1]]
Output: -1
Explanation: The three waiting cells along the bottom right are fenced off by
blocked cells, so no round ever reaches them.
```

### Example 3

```text
Input: grid = [[2,0],[0,2]]
Output: 0
Explanation: Nothing is waiting when the clock starts, so no round is needed.
```

### Constraints

- `m == grid.length` and `n == grid[i].length`
- Both `m` and `n` lie between `1` and `10` inclusive.
- Each entry of `grid` is one of `0`, `1`, `2`.

## Hints

### Hint 1

Every cell that starts at `2` is a source, and they all act at the same time.
Seed a breadth-first search with all of them before the first expansion.

### Hint 2

The round a cell is reached in is its breadth-first distance from the nearest
source, so the answer is the largest distance the search ever assigns — carry
the distance on each queue entry, or peel the queue one layer at a time.

### Hint 3

Count the waiting cells up front and decrement as the search claims them. A
non-zero count once the queue empties is the `-1` case; a zero count from the
very start is the answer `0`.
