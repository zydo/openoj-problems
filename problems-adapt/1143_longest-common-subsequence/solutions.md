# Solutions — Longest Common Subsequence

## Two-Row Dynamic Programming

Write `dp[i][j]` for the length of the longest subsequence shared by the
prefixes `s[:i]` and `t[:j]`, with an empty prefix contributing nothing.
Two rules settle every cell. If the prefixes end in the same letter, that
letter can be made the final character of a longest common subsequence —
aligning it costs nothing and always gains the pair — so
`dp[i][j] = dp[i-1][j-1] + 1`. If they end in different letters, the two
final letters cannot both be used, and an optimal answer forgoes at least
one of them: `dp[i][j] = max(dp[i-1][j], dp[i][j-1])`.

Filling rows top to bottom, each cell reads only the row above and the
cells already written to its left, so the whole `m x n` table never needs
to exist: keep one previous row, build the current row from it, swap, and
repeat. The final entry of the last row is the answer.

On `s = "stone"`, `t = "longest"`: the `o` row puts a 1 that survives to
meet the `n` (diagonal step to 2) and the `e` (diagonal step to 3), and no
later cell of the `stone` rows raises the corner past 3 — the witness
"one". Strings with no common letter stay zero everywhere; identical
strings climb their diagonal to the full length.

**Complexity:** `O(m * n)` time, `O(min(m, n))`-row space (the code keeps
`O(n)` by iterating over the longer string's index in the outer loop).
