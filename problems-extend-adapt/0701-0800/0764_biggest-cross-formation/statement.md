# Biggest Cross Formation

## Description

You are given an integer `n` describing an `n x n` grid whose cells all
start as `1` except for a list of blocked cells given by `mines`, where each
`mines[i] = [xi, yi]` sets `grid[xi][yi]` to `0`.

A _cross of order `k`_ is centered on some cell `grid[r][c]` that is `1`, and
extends `k - 1` further cells of `1` in each of the four axis-aligned
directions — up, down, left, and right — from that center. Cells beyond the
tips of the four arms don't matter; only the center and the four arms
themselves need to be `1`.

Return the largest order `k` of any cross that fits somewhere in the grid,
or `0` if no cell can even serve as a center (i.e., every cell is blocked).

### Example 1

![diagram](figures/764-1.svg)

```text
Input: n = 5, mines = [[4,2]]
Output: 2
Explanation: The single blocked cell limits every possible center, so the
biggest cross achievable anywhere in the grid has order 2.
```

### Example 2

![diagram](figures/764-2.svg)

```text
Input: n = 1, mines = [[0,0]]
Output: 0
Explanation: The grid has only one cell, and it is blocked, so no cross —
not even one of order 1 — can be centered anywhere.
```

### Constraints

- `1 <= n <= 500`
- `1 <= mines.length <= 5000`
- `0 <= xi, yi < n`
- Every pair `(xi, yi)` in `mines` is distinct.

## Hints

### Hint 1

For each of the four directions, compute a grid of run lengths: `left[r][c]`
counts the consecutive `1`'s reachable walking left from `(r, c)` before
hitting a `0` or the edge, and similarly for right, up, and down. Each of
these four grids can be filled in `O(n²)` total. The largest cross centered
at `(r, c)` is then just the minimum of its four run lengths at that cell.
