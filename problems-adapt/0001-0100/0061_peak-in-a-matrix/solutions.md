# Solutions — Peak in a Matrix

Two halvings of the row range, each paying for its decision with a scan of one
row. One compares the maxima of two adjacent rows and follows the climb — a
global argument that leans on the judge's promise of a single peak. The other
interrogates the middle row's largest entry through its vertical neighbors —
a local question whose answer holds for any matrix.

## Unimodal Row Maxima

The judge builds each matrix with exactly one peak, and that promise is
worth a whole proof. A peak is strictly greater than every neighbor, so
the grid's global maximum — which beats everything, neighbors included —
is always a peak; with only one peak in the grid, the peak _is_ the global
maximum. Call its row `i*`.

Now watch the row maxima `R[r]` — the largest entry of each row — as a
sequence down the matrix. Above `i*` it climbs strictly. Row 0's maximum
cannot be beaten within its own row and has nothing above it, so it must
be beaten from below: `R[0] < R[1]`. From there upward, take row `r`'s
maximum with `r < i*`: horizontal neighbors cannot beat it (it tops its
own row, and adjacent cells never tie), and it is not the peak, so some
neighbor beats it. If that neighbor were the cell above, it would force
`R[r-1] > R[r]`, contradicting the rise just established for the pair
below — so the winner is below, `R[r] < R[r+1]`. The argument mirrored
from the bottom row makes the maxima fall strictly after `i*`. The
sequence `R` is therefore strictly unimodal, its summit at `i*`.

That turns the problem into textbook binary search on a unimodal
sequence: compare `R[mid]` with `R[mid + 1]`, keep the larger side, halve
until one row remains, and return that row's maximum — the peak itself.
Both examples resolve in a step or two: `[9, 5]` falls from row 0, so
row 0 wins immediately; `[12, 31, 17]` rises then falls, and both
halvings land on row 1.

The bill is two row scans per halving instead of one, so the asymptotics
match the other method — `O(n log m)` — while the reasoning differs:
this one trusts the unique-peak promise (with several peaks the row
maxima need not be unimodal at all), whereas the vertical-neighbor
search never uses it.

**Complexity:** `O(n log m)` time, `O(1)` space.

## Row Max Binary Search

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
