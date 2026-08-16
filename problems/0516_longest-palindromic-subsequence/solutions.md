# Solutions — Longest Palindromic Subsequence

## Interval Dynamic Programming

Let `dp[i][j]` be the length of the longest palindromic subsequence inside `s[i..j]`. The table is filled over `i` descending and `j` ascending so that when a cell is written, the three cells it depends on — the interval without its left end, without its right end, and without both ends — are already final. A single character is a palindrome of length 1, handled by `dp[i][i] = 1` as the diagonal.

The recurrence has two cases. When the ends match, `s[i] == s[j]`, the two characters can wrap the best palindrome strictly inside, giving `dp[i][j] = dp[i + 1][j - 1] + 2`; when they differ, at least one of the two ends is not part of an optimal palindrome for this interval, so `dp[i][j] = max(dp[i + 1][j], dp[i][j - 1])`. Wrapping the inner best is safe because any palindrome of the inner interval combined with the matching outer pair remains a subsequence in order.

Two edge details fall out of the initialization. The zero-filled table makes `dp[i + 1][j - 1]` evaluate to 0 for adjacent equal characters, where the inner interval is empty, correctly yielding 2; and the empty-string guard returns 0 up front even though the constraints promise `n >= 1`. The answer for the whole string is `dp[0][n - 1]`, computed after the double loop visits every interval once.

**Complexity:** `O(n^2)` time, `O(n^2)` space.
