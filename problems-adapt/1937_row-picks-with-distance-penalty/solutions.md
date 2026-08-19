# Solutions — Row Picks With Distance Penalty

## Row DP with Left and Right Running Maxima

Write `dp[c]` for the best score reachable when the row just processed had
its pick in column `c`. Advancing one row, a pick in column `c` may descend
from any earlier column `p` but forfeits `|p - c|`, and trying every `(p, c)`
pair is quadratic per row. The escape is to tear the absolute value in half
by direction: predecessors with `p <= c` contribute `dp[p] + p - c`, those
with `p >= c` contribute `dp[p] - p + c`. Within either group the only piece
that varies with `p` is `dp[p] ± p`, so the strongest predecessor surfaces
from a running maximum instead of a fresh scan.

Each row therefore goes through two sweeps over the previous vector: left to
right, `left[c] = max(dp[p] + p)` over `p <= c`; right to left,
`right[c] = max(dp[p] - p)` over `p >= c`. Column `c` of the new row is
worth `points[r][c] + max(left[c] - c, right[c] + c)` — the directional
split guarantees each predecessor is weighed under the correct sign of the
penalty, and `p == c` (zero penalty) is covered by both sweeps. The first
row seeds the vector with its own values; the answer is the vector's maximum
after the final row. In the 3x3 example this keeps the staircase
6 → 9 → 7 alive despite its two single-column shifts, for
22 − 2 = 20.

Both sweeps are linear, so the matrix costs one forward and one backward
pass per row. A single row or single column needs no special handling (the
sweeps degenerate gracefully), and column indices enter the arithmetic only
as the ±c shifts, so edges need no index gymnastics.

**Complexity:** `O(m·n)` time, `O(n)` space.
