# Largest Solid-Rim Square

## Description

You are given a 2-D `grid` whose cells are `0`s and `1`s. A subgrid is a
square when its height equals its width, and it counts as having a solid
rim when every cell on its four boundary edges is a `1` — cells strictly
inside may be anything. Return the area (cell count) of the largest
square subgrid with a solid rim, or `0` when the grid contains no such
square.

### Example 1

```text
Input: grid = [[0,1],[1,0]]
Output: 1
Explanation: No 2×2 square qualifies — each candidate has a `0` on its
rim — but the two `1` cells are 1×1 squares, so the answer is `1`.
```

### Example 2

```text
Input: grid = [[1,1,1,1],[1,1,1,1],[1,1,0,1],[1,1,1,1]]
Output: 16
Explanation: The whole 4×4 grid has a solid rim; the lone `0` at its
center sits strictly inside, so it does not matter.
```

### Example 3

```text
Input: grid = [[0,0],[0,0]]
Output: 0
```

### Constraints

- `1 <= grid.length, grid[i].length <= 100`
- `grid[i][j]` is `0` or `1`

## Hints

### Hint 1

A rim test for an arbitrary square scans its four edges, which is slow if
done per candidate. Precompute something once that makes any edge
checkable instantly.

### Hint 2

A 2-D prefix-sum table is one option: a strip of `side` cells is all `1s`
exactly when its sum equals `side`, and every rectangle sum is four table
lookups.

### Hint 3

Enumerate each top-left corner together with each side length that fits
the grid, test the four edges in constant time, and keep the largest
passing `side²`.
