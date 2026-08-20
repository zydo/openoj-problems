# Solutions — Fewest Insertions to Reach a Palindrome

## Interval DP on Palindrome Insertions

Write `dp[i][j]` for the fewest insertions that turn `s[i..j]` into a
palindrome, and fill the table by growing interval length so both inner
subintervals are ready. The outer pair decides each entry. Matching ends
cost nothing — they mirror each other — leaving `dp[i][j]` equal to
`dp[i+1][j-1]` (0 for intervals of length at most two, since one or two
equal letters are already palindromes). When the ends differ, one insertion
somewhere is unavoidable, and the cheaper of the two one-sided retreats is
the right one: `dp[i][j] = 1 + min(dp[i+1][j], dp[i][j-1])`, corresponding
to giving `s[i]` a mirror after `j` or `s[j]` a mirror before `i`. The whole
string's cost is `dp[0][n-1]`.

The recurrence is safe because an unmatched outer character can always be
paired with a freshly inserted twin at no worse cost than any alternative —
resolving mismatches from the outside in charges exactly one insertion per
repaired pair and never overpays.

The same table computes `n` minus the longest palindromic subsequence:
letters on that subsequence pair up for nothing, and each letter off it
needs exactly one inserted partner. Nothing else needs special casing —
single letters are free, adjacent equal pairs are free, and adjacent
mismatches cost one.

**Complexity:** `O(n²)` time, `O(n²)` space.
