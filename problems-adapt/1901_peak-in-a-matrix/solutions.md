# Solutions — Peak in a Matrix

## Binary search on rows via the row maximum

The row maximum carries the search. Take the middle row and scan out its
largest entry — that entry already outranks its left and right neighbors
by construction, leaving the vertical direction as the only one that can
disqualify it. Compare it with the cells directly above and below (the
`-1` border outside the grid stands in for either). Winning both
comparisons makes it a peak and ends the search; otherwise the strictly
taller vertical neighbor shows the way.

Moving toward that taller neighbor is justified by a maximality argument.
Say the up-neighbor wins, so `mat[mid-1][j] > mat[mid][j]`, and recall
that the whole of row `mid` sits at or below `mat[mid][j]` — it is the row
maximum. Restrict to the top half, rows `lo..mid-1`, and consider its
largest element: every neighbor it has inside the half is smaller, and
its one neighbor that could lie outside — the cell beneath it in row
`mid` — is smaller as well, because all of row `mid` lies below
`mat[mid-1][j]`, itself at most the half's maximum. The half's maximum is
therefore a peak of the entire matrix, so shrinking to that half
(`hi = mid - 1`) cannot strand the answer. The down-neighbor case mirrors
onto the bottom half.

Each round scans one row of length `n` and halves the row range, and
termination is guaranteed because the retained half always contains a
peak. One-row and one-column matrices need no special casing: the `-1`
border guards the out-of-range lookups. Example 2's grid resolves in one
round — the middle row's maximum, 31, tops 12 above and 17 below.

**Complexity:** `O(n log m)` time, `O(1)` space.
