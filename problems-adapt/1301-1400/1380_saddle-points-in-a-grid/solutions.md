# Solutions — Saddle Points in a Grid

## Approach: Row minima intersect column maxima

A saddle point belongs to both the set of row minima and the set of column
maxima, and since all entries are distinct each set holds at most one value
per row/column. Compute the minimum of every row and the maximum of every
column, then a saddle point is exactly an element of the intersection — with
distinct values, an element equal to its row's minimum and its column's
maximum. The result is sorted ascending for deterministic comparison.

**Complexity:** `O(m * n)` time for an `m x n` grid, `O(m + n)` extra space.
