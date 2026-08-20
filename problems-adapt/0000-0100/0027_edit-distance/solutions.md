# Solutions — Edit Distance

## Two-Row Wagner–Fischer DP

Write the question at prefix granularity: `dp[i][j]` is the least number of
operations turning the first `i` characters of `source` into the first `j` of
`target`. Two edges of the table are arithmetic, not search — building a
`j`-character prefix from nothing is `j` insertions, and erasing an
`i`-character prefix to nothing is `i` deletions. The code plants those
directly: the initial row is `0..n`, and every subsequent row opens with its
own index `i`.

Inside the table, only the two trailing characters of the prefixes can force a
decision. When `source[i-1] == target[j-1]`, align them and pay nothing:
`dp[i][j] = dp[i-1][j-1]`. When they differ, exactly one paid operation must
resolve the mismatch, and each operation names the prefix pair it leaves
behind. A replacement makes both trailing characters equal and inherits the
diagonal `dp[i-1][j-1]`. A deletion discards `source[i-1]` and inherits
`dp[i-1][j]` — one fewer source character to account for. An insertion
supplies `target[j-1]` and inherits `dp[i][j-1]` — one fewer target character
still owed. Every edit sequence ends in one of those three moves, so taking
the cheapest of the three plus one is exact, not merely a bound.

Follow `"brisk"` into `"click"`: the `i` at position 2 and the trailing `k`
align for free, and the three mismatched positions each cost one replacement,
totalling 3. Follow `""` into `"grain"` and no row ever fills with anything
but the insertion count — 5. Neither empty input is special to the code: an
empty `source` means the outer loop never runs and the seeded `prev[n] = n`
comes back; an empty `target` collapses every row to `[i]`, returning `m`.

Storage is the reason for the rolling form. Row `i` reads only row `i - 1`
plus the cell to its own left, so `curr` is filled left to right and then
swapped in as `prev`, and the `m x n` table never exists.

**Complexity:** `O(m * n)` time, `O(n)` space.
