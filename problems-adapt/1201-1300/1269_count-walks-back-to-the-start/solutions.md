# Solutions — Count Walks Back to the Start

## Linear DP over Bounded Positions

One move shifts the marker by at most one cell, so a walk of `steps` moves
can never stand farther than `steps` cells from cell 0. Even with `width` up
to 10⁶, only the slice of `min(width, steps + 1)` cells is ever reachable,
and nothing outside that slice can influence the answer — the running time
does not grow with `width` at all.

The table is a single row `dp`, where `dp[i]` counts the walks that end at
cell `i` after the moves processed so far; it starts as `dp[0] = 1`. Each
move builds the next row: cell `i` collects contributions from `dp[i]`
itself (hold) and from its one or two neighbors inside the slice (step in).
Every entry is taken modulo 10⁹ + 7 as soon as it is formed, so the numbers
stay machine-sized throughout.

After `steps` rounds, `dp[0]` holds exactly the walks that came home. The
slice bound also settles the corner cases on its own: with one cell the row
never spreads, so only the all-hold walk is counted, and with a huge `width`
the truncation discards nothing reachable.

**Complexity:** `O(steps · min(width, steps))` time, `O(min(width, steps))`
space.
