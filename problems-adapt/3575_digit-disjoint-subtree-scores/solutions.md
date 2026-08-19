# Solutions — Digit-Disjoint Subtree Scores

## Tree DP over digit masks with max-plus subset convolution

A set of nodes qualifies exactly when the digit sets behind their values are
pairwise disjoint, so each value reduces to a ten-bit mask over the digits
`0`–`9`. Let `dp[u][m]` be the largest sum selectable inside `u`'s subtree
whose combined digit mask is exactly `m`, with a sentinel for masks no
selection reaches. A value that repeats a digit within itself — `33`, say —
can never be selected, so such nodes are marked unselectable up front; they
still pass their children's tables upward untouched.

Folding a child into `u`'s table is a max-plus convolution over subsets: the
combined digit set `c` receives the best of `a[x] + b[c ^ x]` taken over
every submask `x` of `c`. Enumerating submasks of every `c` costs `3^10`
steps per merge, and there are only `n - 1` merges — one per child edge — so
the whole table work stays trivial next to `n ≤ 500`. Taking `u` itself
overlays `vals[u]` onto every mask that contains `u`'s digit mask, reading
the children's best selection of the complementary digits.

Worked example: the star `vals = [7,7,3,9]` with root `0`. Each leaf's table
peaks at its own value — `7`, `3`, `9`. Convolving the three leaf tables
gives `19` on the digit set `{7, 3, 9}` (one seven only, since both sevens
share mask `{7}`), and the root may join the selection only by displacing its
duplicate leaf, which changes nothing. So `best[0] = 19`, and the four maxima
total `19 + 7 + 3 + 9 = 38`.

`best[u]` is simply the largest entry of `u`'s finished table — mask `0`
holds the empty selection, keeping it nonnegative — and these maxima are
summed modulo `10⁹ + 7`. Traversal uses an explicit stack pre-order consumed
in reverse as a post-order, so a 500-node path poses no recursion risk.

**Complexity:** `O(n · 3^10)` time, `O(n · 2^10)` space.
