# Solutions — Longest Ascending Grid Path

Every legal step climbs to a strictly larger value, so no walk can return
to a cell it has left — the grid is a directed acyclic graph whose edges
point from each cell to its larger four-direction neighbours, and the task
is longest path on that DAG. Both solutions memoize the same quantity —
`dp[i][j]`, the length of the longest ascending walk starting at `(i, j)` —
and both trust strict ascent to rule out cycles, needing no visited marks.
What separates them is how the DAG gets processed. One refuses to traverse
it at all: it sorts the cells by value, and ascending value order is a
topological order for free. The other explores it depth-first from each
cell, letting each walk's answer fall out of the walks it continues into —
with the call stack spelled out explicitly rather than borrowed from the
language runtime.

## Value-Ordered DP over the Cell DAG

Longest-path on a DAG wants a topological order, and ascending value order
is one for free.

The solver sorts every cell by value and keeps `dp[i][j]` seeded at 1 for
the walk of the cell alone. Cells are then processed smallest first; when a
cell's turn comes, each strictly smaller neighbour has already been
finalized (it sits earlier in the sorted order), so `dp[i][j]` is one plus
the largest `dp` among those neighbours, and the running maximum absorbs
it. The transition compares with strict `<`, so equal-valued neighbours
never link: strict ascent is enforced by the comparison itself, and the
relative order of equal-valued cells in the sort is immaterial because none
of them reads the others.

![The example grid beside its dp table: accent cells trace the walk 3 → 5 → 7 → 11 along the left column and bottom row, the path lengths ending at those cells growing 1, 2, 3, 4 toward the top-left corner.](figures/solution-cell-dag.svg)

Written bottom-up, the sort does the work a memoized search would do, with
no recursion and no visited bookkeeping. Plateaus of equal values need no
care — a plateau contributes no edges at all, which is why the pairs of
equal 11s, 7s and 3s in the first example leave its single four-step walk
unbeaten.

Boundaries: a 1×1 grid returns 1 from the initialization, and an empty
input returns 0 up front. Sorting the `m · n` cells dominates the two
linear grid sweeps; the DP table and sorted cell list hold the space.

**Complexity:** `O(mn log(mn))` time, `O(mn)` space.

## Memoized DFS with an Explicit Stack

The other route through the DAG: start a walk at a cell and follow actual
edges, one at a time. Standing on `(i, j)`, the longest ascending walk
leaving it is `1 + max` over the walks leaving each strictly larger
neighbour — a definition that recurses, so the natural shape is a
depth-first search that asks the question of every cell it reaches and
caches the answer in `memo`. Once any search has fixed `memo[i][j]`, no
later visitor re-walks that ground; a 200-cell column or a 2500-cell
serpentine grid is traversed once, not per start cell.

The recursion is carried on an explicit stack of frames — `(row, column,
next direction)` — rather than the language's call stack, so every port
runs identically regardless of a language's recursion limits: a grid whose
entire population forms one strictly ascending path is a 40 000-deep
recursion in the naive form. A frame first visits itself (`memo = 1`, the
walk of the cell alone), then tries its four directions in turn; when it
meets a larger neighbour whose memo is already final it absorbs
`memo + 1` on the spot, and when the neighbour is still virgin it descends,
pushing a frame. The fourth direction exhausted, the frame's own value is
final: it pops, offers `memo + 1` to the frame it descended from, and
feeds the running maximum. Pushing only virgin cells is what keeps each
cell on the stack at most once — a frame's larger neighbours can never be
its own ancestors, since ancestors are strictly smaller, so any non-virgin
neighbour's memo is genuinely finished.

Same memo table, same strict-`>` edge test, same answer as the sorted
sweep — arrived at by walking the DAG instead of ordering it. The stack
and the memo are the whole footprint; each cell is pushed once and each of
its four directions examined once.

**Complexity:** `O(mn)` time, `O(mn)` space.
