# Solutions — Count Non-Decreasing Splits

## Length-Indexed DP with a Common-Prefix Table

Index states by where the final number ends and how long it is: `dp[i][j]`
counts the cuts of the prefix `num[:i]` whose last piece is `num[i-j:i]`,
of length `j`. Monotonicity of the list constrains only the boundary between
the last two pieces: with the previous piece of length `k` ending at `i-j`,
it must satisfy `num[i-j-k:i-j] <= num[i-j:i]` numerically. When `k < j`
the previous piece has strictly fewer digits, and a shorter digit run
without leading zeros is always the smaller number, so every such `k` is
allowed at once. When `k == j` both pieces have `j` digits and the decision
is a plain lexicographic comparison of equal-length runs. Collecting
`pre[i][j] = dp[i][1] + ... + dp[i][j]` collapses the `k < j` family into
one subtraction-free lookup — `dp[i][j]` becomes `pre[i-j][min(j-1, i-j)]`,
plus `dp[i-j][j]` when the equal-length comparison goes through.

That comparison is the performance crux: done digit by digit it costs
`O(j)` per cell and `O(n³)` overall, far past the budget at `n = 3500`. So
the code first fills `lcp[i][j]`, the agreement length of the suffixes
starting at `i` and `j`, with the usual right-to-left recurrence
`lcp[i][j] = lcp[i+1][j+1] + 1` when the characters match and 0 otherwise.
Writing `a = i - 2j` and `b = i - j` for the two candidate starts, agreement
of `lcp[a][b] >= j` means the pieces are identical; otherwise the mismatched
pair at offset `lcp[a][b]` settles the ordering in constant time.

Boundary behavior lives in the recurrence itself: a final piece starting
with `'0'` scores zero, the whole-prefix piece `j == i` scores exactly 1,
and a string opening with `'0'` returns 0 before any table is built, since
no legal first piece exists. `"1213"` exercises the equal-length branch —
`12 <= 13` — and totals 4 cuts. Everything reduces modulo `10⁹ + 7`, and
the answer is `pre[n][n]`.

**Complexity:** `O(n²)` time, `O(n²)` space.
