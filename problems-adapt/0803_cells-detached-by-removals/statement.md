# Cells Detached By Removals

## Description

An `m x n` matrix `grid` holds `1` in every occupied cell and `0` elsewhere.
Call an occupied cell **anchored** when it lies in row `0`, or when one of the
four cells sharing an edge with it is itself anchored. Anchoring therefore
spreads outward from the top row through connected runs of occupied cells.

The array `removals` gives coordinates to clear out, one after another, in the
given order. Clearing `removals[i] = [r, c]` empties that cell. Any occupied
cell that loses its anchoring as a result is detached, and detached cells are
emptied on the spot — they never come to rest anywhere.

For each step `i`, report how many cells detach because of it. The cleared cell
itself is not counted, and clearing a cell that is already empty detaches
nothing.

### Example 1

```text
Input: grid = [[1,1,0],[1,0,0],[1,1,1]], removals = [[1,0]]
Output: [3]
Explanation: Column 0 is the only path from the bottom row up to row 0. Clearing
the middle of that path cuts the whole bottom row loose, so three cells detach.
```

### Example 2

```text
Input: grid = [[1,1,1],[0,1,0],[1,1,1]], removals = [[1,1],[0,0],[2,2]]
Output: [3,0,0]
Explanation: The single cell at [1,1] carries the entire bottom row, so
clearing it detaches all three. Clearing [0,0] next costs nothing, since every
cell of row 0 is anchored on its own. The third step names a cell that has
already gone, so nothing happens.
```

### Example 3

```text
Input: grid = [[1,0,1],[1,1,1],[1,0,1]], removals = [[0,1],[0,2],[1,2]]
Output: [0,0,1]
Explanation: The first step names an empty cell. The second removes a cell of
row 0, but the right column still reaches the top through the middle row. Only
the third step, which cuts that link, strands the cell at [2,2].
```

### Constraints

- `grid` has `m` rows and `n` columns, with `m == grid.length` and `n == grid[i].length`
- `1 <= m <= 200` and `1 <= n <= 200`
- every `grid[i][j]` is either `0` or `1`
- `removals` holds between `1` and `4 * 10^4` pairs
- each `removals[i]` is a pair `[r, c]` with `0 <= r <= m - 1` and `0 <= c <= n - 1`
- no coordinate pair repeats

## Hints

### Hint 1

Going forwards is awkward: one clearing can strand an arbitrarily large region,
and there is no cheap way to take that back. Run the tape backwards instead —
start from the grid with every listed cell already gone, and put them back one
at a time in reverse order.

### Hint 2

Backwards, cells only ever join, which is what a disjoint-set structure is good
at. Add a sentinel node standing for "the top", give it size zero, and merge
every occupied cell of row `0` into it. The size of the sentinel's component is
then the number of anchored cells.

### Hint 3

Restoring a cell and merging it with its occupied neighbours grows the
sentinel's component by the restored cell plus exactly the cells that had
detached when it was cleared. So record the component size before and after,
subtract, and subtract one more for the restored cell — flooring at zero for
the case where the restoration reconnects nothing.
