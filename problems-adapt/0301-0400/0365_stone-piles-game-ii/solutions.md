# Solutions — Stone Piles Game II

## Game DP over Suffix and Limit

Read the row from the far end. The two players divide every pile from
`piles[i:]` onward between them, so if `suf[i]` is that suffix's stone
total, then whatever the current mover finally holds plus whatever the
opponent finally holds is exactly `suf[i]`. One shared objective therefore
suffices: `dp[i][m]` — the largest haul the player to move can secure from
`piles[i:]` when the limit is `m` — also determines the opponent's, as the
complement within the suffix.

A move chooses `x` between 1 and `2m`, collects those piles, and passes
`(i + x, max(m, x))` across the table. The mover's payoff for that choice
is `suf[i] - dp[i + x][max(m, x)]`: the suffix minus the best the opponent
then secures. Maximizing over `x` gives the recurrence, and because both
sides apply it, the table describes perfect play by construction.

Filling runs backwards — `i` from `n - 1` down, `m` from 1 to `n`, base
`dp[n][*] = 0` — with the take loop capped at `min(2m, n - i)` (there is
no move past the row's end) and the successor limit clamped to `n` (a
larger `m` is meaningless with nothing left). `dp[0][1]` answers the
initial position, `M = 1`.

Example 3, `piles = [1,1,1,1,60]`, shows why the complement view matters:
opening with two piles hands Bob a limit of 2, with which he sweeps
everything left including the 60, leaving Alice 2. Taking one pile first
forces Bob to choose between unblocking Alice's path to the 60 and
splitting the small ones; he splits, and Alice's best is
`1 + 1 + 1 = 3`. Totals stay far below 32-bit limits (100 piles of at
most 10⁴ stones).

**Complexity:** `O(n³)` time, `O(n²)` space.
