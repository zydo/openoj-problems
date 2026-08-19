# Solutions — Fewest Rewrites into k Palindromes

## Interval Cost Table and Partition DP

Two questions can be answered separately. What does one piece cost, and where
do the cuts go?

For a block `s[i..j]`, the cheapest way to make it read the same both ways is
to pair the outermost characters, then the next pair inward, and so on: each
mismatched pair is settled with one rewrite, matched pairs with none. That
price depends only on the interval, so it is tabulated for all intervals by
increasing length — `price[i][j] = price[i+1][j-1] + (s[i] != s[j])`, with
empty and one-character intervals free.

For the cuts, let `dp[c][i]` be the least total cost of splitting the prefix
of length `i` into exactly `c` palindromic pieces. The last piece is some
`s[j..i-1]`, so `dp[c][i]` is the minimum of `dp[c-1][j] + price[j][i-1]`
over every legal `j`, with `dp[1][i] = price[0][i-1]`. The outer loop begins
at `i = c` because `c` non-empty pieces swallow at least `c` characters, and
unreachable entries hold a sentinel larger than any real price — no single
interval ever costs more than `n // 2`.

The answer is `dp[k][n]`. It is optimal because rewrites spent inside one
piece never help another (pieces are disjoint), and the loop tries every
placement of the final boundary. The extremes need no special handling:
`k = n` shatters the string into free single letters, `k = 1` pays the
whole-string price, and a string that already cuts cleanly costs 0.

**Complexity:** `O(k · n²)` time, `O(n²)` space.
