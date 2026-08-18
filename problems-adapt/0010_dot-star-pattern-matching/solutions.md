# Solutions — Dot-Star Pattern Matching

## Bottom-up dynamic programming

Write `dp[i][j]` for "the first `i` characters of `s` are described by the
first `j` symbols of `p`". Two base facts seed the table. Nothing describes
nothing, so `dp[0][0]` is true; and a pattern can only describe the empty
prefix by vanishing wholesale, which just trailing `x*` units can do — hence
`dp[0][j]` is true exactly when `p[j-1]` is `*` and erasing that two-symbol
unit still leaves something that describes nothing, `dp[0][j-2]`.

Rows fill top to bottom, left to right. A pattern ending in a literal or `.`
must spend it on one character: `dp[i][j]` inherits `dp[i-1][j-1]` and adds
the agreement test (`.` agrees with everything). A pattern ending in `*` is
freer, because its preceding symbol `p[j-2]` may repeat any number of times —
and two moves cover every count: take zero copies, erasing the `x*` unit and
copying `dp[i][j-2]`; or take one further copy, which is legal precisely when
`p[j-2]` describes `s[i-1]`, and which reduces the question to
`dp[i-1][j]`. Any repetition count is a chain of those moves, so nothing is
left out of the recurrence.

Because cells talk about prefixes, `dp[m][n]` being true means the pattern
reaches the end of `s` — a partial cover never reaches that corner. The code
relies on the guarantee that no `*` opens the pattern. The whole
`(m+1) × (n+1)` table is materialized for readability, though one row would
suffice.

**Complexity:** `O(m·n)` time, `O(m·n)` space.
