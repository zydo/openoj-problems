# Solutions — Longest Scattered Palindrome

Both methods fill a quadratic table over the same letters, but they enter
the problem from different doors. The interval DP stays inside the string,
scoring each stretch by what its two end letters admit — agreeing ends
wrap, disagreeing ends shed. The reversal view steps outside instead: a
mirror is precisely a subsequence the string shares with its own reverse,
so the longest-common-subsequence recurrence over two prefix families does
the work — and because that table reads only the row above it, the whole
fill folds into two rows of memory.

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

## LCS With the Reversed String

A mirror is a subsequence that survives reversal, which invites a change of
venue: lay the string beside its own reverse and take what they share. The
claim is that `LPS(s)` equals `LCS(s, reverse(s))`. One direction is
immediate. A mirror of length `k` picked from `s` also appears in the
reversal, because reversing `s` reverses the picked letters and a mirror
reads the same both ways — so it is common to both strings. The other
direction is the theorem's content. A common subsequence `Z` of length `k`
gives `s` two readings of `Z`: one left-to-right, one right-to-left. Pair
each letter's slot in the forward reading with the same letter's slot in
the backward reading; those pairs cross at some middle slot `m`. The slots
left of the crossing spell the first `m` letters of `Z` followed by those
same letters in reverse order — a mirror of length `2m` inside `s` — and
the slots right of it spell the last `k - m` letters with their reverse,
another mirror, of length `2(k - m)`. The two lengths sum to `2k` (a slot
shared by both readings merges a single letter and still leaves the longer
side at least `k`), so a common subsequence of length `k` forces a mirror
of length `k`, and neither table can beat the other.

The recurrence is the textbook LCS one, over prefixes of the two strings.
Let `t` be the reversal and `dp[i][j]` score `s[0..i)` against `t[0..j)`.
When the two first letters agree they open a common subsequence, so
`dp[i][j] = dp[i - 1][j - 1] + 1`; when they differ, at least one is absent
from an optimal answer and `dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])`.
The zero row seeds the table, and the answer is `dp[n][n]`.

Each cell reads only the cell above it and the cell to its left, so the
code keeps two rows — `prev` holds row `i - 1` while `curr` grows left to
right — and the fill lives in `O(n)` memory where the interval table needed
`n²`. For `s = "acgtca"` the reversal is `"actgca"`; the letters `a c g c a`
appear in order in both, which is the same `acgca` the interval DP dug out
of the stretch table — two independent recurrences witnessing one optimum.
The guard for an empty string returns 0, matching the interval solution's
caution.

**Complexity:** `O(n²)` time, `O(n)` space.
