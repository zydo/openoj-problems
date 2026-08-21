# Solutions — Maximum Books With Strictly Rising Takes

## Monotonic Stack DP on Strictly Rising Runs

Anchor the block at its right end, shelf `i`, and reason about what the
shelves to its left can contribute. Takes must rise strictly toward `i`, so
the rightmost shelf should be emptied: taking everything there only lowers
what the others are allowed to give, never what `i` itself gives. Once shelf
`i` yields `books[i]`, shelf `i-1` can yield at most `books[i] - 1`, shelf
`i-2` at most `books[i] - 2`, and so on — every take in the run is pinned by
its distance from the right end. Let `dp[i]` record the best total of a run
ending at `i`.

Walking left, the demanded amounts descend by one per shelf, and a shelf
whose stock falls short of its demand is a barrier: the run cannot pass
through it. Say `j` is the nearest such shelf, `books[j] < books[i] - (i - j)`.
The shelves `j+1..i`, a run of length `L`, then contribute the arithmetic
total `L * books[i] - L(L-1)/2`, and the optimal prefix is exactly `dp[j]` —
shelf `j` tops out strictly below what the descending demand would have
asked of it, so appending the run to `dp[j]`'s run keeps the takes strictly
rising. With no barrier in sight the run reaches shelf 0, but no take may be
negative, so its length is capped at `min(i, books[i]) + 1`. On
`books = [4,2,6,9]`: the run at shelf 3 demands 9, 8, 7, ... and is stopped
by the 6 at shelf 2, whose own run was stopped by the 2 at shelf 1; the
spliced runs give 9 + 6 + (1 + 2) = 18.

Finding each nearest barrier naively would be quadratic; the monotonic stack
fixes that. Keep shelves with small stock as candidates, and when shelf `i`
arrives, pop every candidate `x` whose stock still satisfies
`books[x] >= books[i] - (i - x)` — any future run that stops beyond such an
`x` stops at or before `i` anyway. Each shelf enters and leaves the stack
once.

**Complexity:** `O(n)` time, `O(n)` space.
