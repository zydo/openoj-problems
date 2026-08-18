# Solutions — Static Region Sums

## Integral Image

Every question reads the same frozen grid, so the area-counting work
belongs to construction. `StaticRegions` builds an integral image:
`prefix[r][c]` totals the cells in rows `0..r-1` and columns `0..c-1`, and
a guard row and column of zeros pad the top and left so that no index in
the arithmetic ever needs a boundary case.

Filling it is inclusion–exclusion at every cell: the entry above already
counts a row strip, the entry to the left a column strip, and both strips
count the diagonal entry — so `prefix[r][c] = matrix[r-1][c-1] +
prefix[r-1][c] + prefix[r][c-1] - prefix[r-1][c-1]`. One sweep of the grid
produces the whole table.

A query then runs the same identity with the signs kept: the anchored
rectangle ending at `(bottom, right)`, less the strip of anchored
rectangles above the query, less the strip to its left, plus back the
corner those two strips both removed:
`regionSum(top, left, bottom, right) = prefix[bottom+1][right+1] -
prefix[top][right+1] - prefix[bottom+1][left] + prefix[top][left]`. On the
Example 1 grid this makes the interior block `regionSum(1, 1, 2, 3)` four
lookups totalling `20`, whatever its area — four operations for a single
cell or for the whole grid alike.

The Java port accumulates into `long`; the largest possible total is
`200 · 200 · 10⁴ = 4 · 10⁸`, beyond 32 bits. Up to `10⁴` queries ride on
quadratic preprocessing and constant-time answers.

**Complexity:** `O(m · n)` construction, `O(1)` per `regionSum`, `O(m · n)`
extra space.
