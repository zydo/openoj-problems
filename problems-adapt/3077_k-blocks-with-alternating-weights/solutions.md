# Solutions — K Blocks with Alternating Weights

## Suffix DP with rolling arrays

Let `dp[i][j][x]` stand for the best score still available from the
suffix `nums[i..]` when `j` blocks remain to be placed, and `x = 1` means
`nums[i]` sits inside the leftmost of those remaining blocks. Numbering
the blocks still to place from the right collapses the weight table: the
`j`-th remaining block carries weight `j` if `j` is odd and `-j` if it is
even, because the final block is worth `+1`, the one before it `-2`, and
so on alternating up to `k` — precisely the coefficients of the score
formula.

Each position offers three choices, and they cover everything.
Folding `nums[i]` into the current block gives
`nums[i] * weight(j) + max(dp[i+1][j-1][0], dp[i+1][j][1])` — the first
option ends the block and drops to the next, the second extends the
block by this element. Standing `nums[i]` outside every block hands over
to `dp[i+1][j][0]`, and `dp[i][j][0]` is the larger of the two. The one
reachable base state is `dp[n][0][0] = 0`; all other boundary states are
negative infinity so they can never win a maximum — this is what forbids
placing fewer than `j` blocks, since blocks of pure loss sometimes still
have to be taken.

On `[3, -1, 4, -1, 5]` with `k = 3`, the optimum spends its weight budget
by merging the first `-1` into the opening block (`3 * 6 = 18`) and
letting the second `-1` ride alone under the `-2` weight (`+2`), then
cashing `5` at weight `1` — 25 in total, better than any all-positive
split such as `[3] [4] [5]`, which nets only 6.

The sweep moves `i` from `n - 1` down to `0` holding only the previous
row, so the layers take `(k + 1) x 2` entries. The bound `n * k <= 10^6`
caps the state count, and 64-bit accumulation is mandatory — a single
block can sum to `10^13`.

**Complexity:** `O(n * k)` time, `O(k)` space.
