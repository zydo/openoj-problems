# Solutions — Longest Scattered Palindrome

## Interval Dynamic Programming

Any candidate mirror lives inside a stretch `s[i..j]` of the string, which
suggests scoring stretches, not prefixes. Let `dp[i][j]` be the length of
the best mirror picked from `s[i..j]`. The two end letters decide
everything. If `s[i] == s[j]`, that pair can sit at the two ends of a mirror
built from whatever lies strictly between them, so
`dp[i][j] = dp[i + 1][j - 1] + 2`. If they differ, a best mirror for the
stretch cannot use both ends, so it survives intact in one of the two
one-end-shorter stretches and
`dp[i][j] = max(dp[i + 1][j], dp[i][j - 1])`. Wrapping is never a loss:
whatever mirror the inside stretch holds, putting equal letters around it
keeps left-to-right order and keeps the reading reversible.

Stretches of length 1 score 1 — the diagonal `dp[i][i] = 1` — and the loops
run `i` downward and `j` upward, so by the time a cell is written the three
shorter stretches it reads (drop the left end, drop the right end, drop
both) are already final. The zero-filled table makes the both-ends case
correct even for two adjacent equal letters, where the inside stretch is
empty and scores 0, giving 2.

How the table fills for `s = "acgtca"`:

1. Every diagonal cell is seeded with 1.
2. Stretches of length 2 and 3: no equal pair of ends exists (`a c`, `c g`,
   `g t`, `t c`, `c a`, and the length-3 wraps all disagree), so every cell
   copies down to 1.
3. Length 4: the stretch `c g t c` has agreeing ends, so
   `dp[1][4] = dp[2][3] + 2 = 1 + 2 = 3` — the mirror `c?c`. All its
   neighbours stay at 1.
4. Length 5: `a c g t c` cannot use both ends (`a` vs `c`), but dropping
   the right end exposes the length-4 stretch, so `dp[0][4] = 3`; likewise
   `dp[1][5] = max(1, 3) = 3`.
5. Length 6: `a` and `a` agree, so `dp[0][5] = dp[1][4] + 2 = 3 + 2 = 5` —
   the `a…a` pair wrapped around the inner `c?c`, giving `acgca` with the
   `t` skipped.

Two details fall out of the initialization. Adjacent equal letters are the
empty-inside case above, and the guard for an empty string returns 0 even
though the constraints promise `n >= 1`. The answer for the whole string is
`dp[0][n - 1]`.

**Complexity:** `O(n²)` time, `O(n²)` space.
