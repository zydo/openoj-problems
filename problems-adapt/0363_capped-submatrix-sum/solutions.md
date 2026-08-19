# Solutions — Capped Submatrix Sum

## Row Bands Plus A Sorted Prefix Search

A block is fixed by four numbers: its first and last row, its first and last
column. Enumerating all four is `O(m^2 n^2)` blocks and, with the cap in play,
there is no shortcut that skips the rows. So the rows are enumerated and the
columns are solved cleverly.

Fix a top row and let the bottom row descend from it. Maintain one array
holding, for each column, the sum of that column's cells between the two rows.
Dropping the bottom row by one adds a single row of cells into that array, so
maintaining it across the whole descent costs `O(n)` per step rather than a
fresh recomputation. Every block whose row range is the current band is now a
stretch of consecutive entries of that array, and the problem has shrunk to one
dimension: find the largest stretch total that stays at or below `k`.

That one-dimensional question is answered with running sums. Walking the array
left to right, let `S` be the sum of everything up to and including the current
column. A stretch ending here has total `S - E` for some earlier running sum
`E`, where `E = 0` stands for a stretch that starts at the first column. The
total obeys the cap exactly when `E >= S - k`, and among the candidates that
qualify the smallest one yields the largest total. Keeping the earlier running
sums in sorted order turns that into a single binary search for the first entry
at or above `S - k`, after which the current running sum is inserted in place
for later columns to query.

Because the sums flowing through the search are running sums, the cap must
never be applied to a raw value — the comparison is always against
`S - k`, which is what allows negative caps and all-negative grids to be
handled without a special case. When no earlier running sum qualifies at a
given column, no stretch ending there is legal and the column simply
contributes nothing to the answer; the guarantee that some block fits keeps the
final result defined.

For the follow-up: the row pairs cost a quadratic factor and the columns only a
logarithmic one, so when one dimension is far larger than the other, transpose
the grid and let the short side drive the band enumeration.

**Complexity:** `O(m^2 n log n)` time and `O(n)` space, or the same with the
dimensions swapped after a transpose.
