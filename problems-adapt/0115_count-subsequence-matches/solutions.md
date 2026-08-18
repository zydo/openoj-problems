# Solutions — Count Subsequence Matches

## Dynamic Programming with a Rolling 1-D Array

Track one number per prefix of `t`: let `dp[j]` hold how many ways the first
`j` characters of `t` can be spelled out of the portion of `s` consumed so
far. Feeding in the next character `ch` of `s` can only add possibilities at
places where `t` actually wants `ch` — at such a place, every arrangement that
had already spelled `t[:j-1]` may now spend `ch` on position `j`, which is why
those arrangements carry over as `dp[j] += dp[j-1]`. Wherever `t` wants some
other letter, `ch` is simply passed over and the tally is untouched. The
starting value `dp[0] = 1` records that the empty prefix is spelled exactly
one way: by taking nothing.

The sweep runs `j` from `m` down to `1`, and the direction is essential.
Descending means `dp[j-1]` is still the value from before this character was
introduced at the moment it is read, which reproduces the two-dimensional
recurrence `dp[i][j] = dp[i-1][j] + (match ? dp[i-1][j-1] : 0)` in a single
array. Ascending instead would consult a `dp[j-1]` that this very character
has already increased, effectively letting one character of `s` occupy several
positions of `t` at once.

Once `s` is exhausted, `dp[m]` is the count of distinct position sets that
spell `t`. Characters of `s` matching nothing leave the array alone, and
Python's unbounded integers hold the intermediate tallies comfortably —
though the constraints promise the final answer fits in 32 bits regardless.

**Complexity:** `O(m·n)` time, `O(m)` space, where `n = len(s)` and
`m = len(t)` — each of the `n` outer steps sweeps the `m+1`-entry array once.
