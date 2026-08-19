# Solutions — Wood Cutting Revenue

## 2D dynamic programming over sheet sizes

Any plan for an `h x w` sheet ends in one of three moves: sell it as is
for `price[h][w]`, slice it across into `h1 x w` and `(h - h1) x w`, or
slice it down into `h x w1` and `h x (w - w1)`. Both halves of a cut are
smaller than the original, so the best revenue `dp[h][w]` obeys a
recurrence over exactly these options with the halves solved on their
own — nothing that happens to one half constrains the other. Rotation is
off the table, so height and width stay asymmetric throughout.

Prices first go into a dense table `price[h][w]`, zero where a shape has
no listing and the maximum where a shape repeats (the constraints
promise distinct shapes, but taking the max costs nothing). Then `dp`
fills in increasing height and width: a horizontal slice reads rows
`h1 < h`, tried only up to the midpoint since the complementary `h - h1`
split mirrors it, and a vertical slice reads earlier columns of the row
in progress. Every subproblem referenced is therefore already final, and
`dp[i][j]` starts from `price[i][j]` so that selling whole is the
default a cut has to beat.

`dp[m][n]` is optimal because the recurrence tries every first cut and,
inductively, the best continuation of both halves — whole-sale is
covered for every subpiece too. Stopping each inner loop at the midpoint
halves the split enumeration without dropping any partition. Pieces
without a listing simply earn 0 when left unsold, a `1 x w` or `h x 1`
strip still cuts along its long side, and a sheet whose own shape is
unsellable gathers its worth entirely from its fragments.

**Complexity:** `O(m*n*(m+n))` time, `O(m*n)` space.
