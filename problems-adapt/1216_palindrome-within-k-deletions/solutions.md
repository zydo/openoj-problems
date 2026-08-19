# Solutions — Palindrome Within k Deletions

## Longest palindromic subsequence

Reframe the question: choosing which letters to delete is choosing which to
keep, and the survivors must read the same both ways — they are a palindromic
subsequence. A budget of `k` deletions from `n` letters therefore asks for a
palindromic subsequence of length at least `n - k`, and the whole test
collapses to one comparison, `n - LPS(s) <= k`, where `LPS(s)` is the length
of the longest palindromic subsequence.

That length comes from the classic interval table: `dp[i][j]` holds the best
subsequence length inside `s[i..j]`. Matching ends wrap the inner interval's
answer, `dp[i][j] = dp[i+1][j-1] + 2`; differing ends mean one of the two is
expendable, so the better of the two shrunk intervals, `max(dp[i+1][j],
dp[i][j-1])`, carries forward. Single letters anchor the table at 1.

The fill order runs `i` right to left with `j` climbing from `i + 1`, so
every strictly shorter interval a transition reads — `dp[i+1][j-1]`,
`dp[i+1][j]`, `dp[i][j-1]` — is already on the table. The empty-string guard
covers the degenerate end, though one letter alone is trivially palindromic
and any `k >= 1` accepts it.

On `"stoops"` with `k = 2`: the best subsequence is `"soos"` (the two s's
wrapping the two o's), length 4, and `6 - 4 = 2` exactly meets the budget —
the t and the p are the deletions. On `"tunnel"` the table tops out at the
pair `"nn"`, length 2, demanding four deletions, so `k = 2` fails.

**Complexity:** `O(n²)` time, `O(n²)` space.
