# Solutions — Minimum Start Health

## Backward Dynamic Programming

Why forward reasoning fails here: a room deep in the grid that hands back a
large amount can make absorbing heavy early losses worthwhile, so no local
rule about keeping the total high survives contact with the whole grid. What
*is* stable is the question "how much must the start be for this room?", and
that question answers itself from the far corner inwards.

Define `need[i][j]` as the least the running total can be when *entering*
`(i, j)` such that some right/down continuation from there stays at 1 or above
all the way to the corner. The continuation from `(i, j)` goes to one of two
rooms, and the cheaper to satisfy is the better choice, so
`need[i][j] = max(1, min(need[i+1][j], need[i][j+1]) - grid[i][j])`. The
subtraction applies this room's effect; the outer `max` enforces the floor —
a total of exactly 0 is already fatal, so even a room whose arithmetic lands
there demands a 1.

Two boundary details finish it. A border of infinities keeps the recurrence
from ever stepping outside the grid. And the seed is placed *after* the
corner: `need[m][n-1] = 1`, meaning departure from the bottom-right room costs
nothing but the total must still be at least 1 on the way out — which makes
the corner's own entry value come out as `max(1, 1 - grid[m-1][n-1])`, the
last room's cost included, exactly as the statement requires.

![The need table for the example grid: each cell shows its room value and, in blue, the total needed on entry; the answer need[0][0] is 12.](figures/solution-need-table.svg)

Rows fill from the bottom up and each row from the right, so both onward
values are final when a cell is computed, and `need[0][0]` is the answer. For
the example, the top row's demands are `12, 8, 1` and the bottom row collapses
to `7, 1, 1`: the walk that leaves the top-left room at 8 and grazes 1 in the
top-middle room is what forces the 12. The tiny cases fall out too — a single
harmful room `[[-4]]` demands `5` (cover the loss, keep 1), and a grid of
harmless rooms such as `[[3,0],[2,5]]` still demands `1`, since the total is
positive before any room is entered.

**Complexity:** `O(mn)` time, `O(mn)` space.
