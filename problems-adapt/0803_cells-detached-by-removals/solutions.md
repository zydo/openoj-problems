# Solutions — Cells Detached By Removals

## Reverse-time replay with union-find

Played forwards, the process only ever destroys structure, and each step can
destroy a region whose size is not bounded by anything local. Played backwards
it only ever creates structure, and creation is what a disjoint-set forest
handles well.

Begin by building the end state: copy the grid, empty every listed coordinate,
and merge what survives. Give the merge a sentinel node numbered `m * n` that
stands for the top edge; every occupied cell of row `0` merges into it, and
every occupied cell merges with its occupied right and lower neighbours, which
covers all four directions once the sweep finishes. Seed the sentinel's size at
zero so a component's size counts real cells only. From then on, the size of
the component containing the sentinel is precisely the number of anchored
cells.

Now walk the list of coordinates from last to first. Read off the sentinel
component's size, then decide whether the coordinate mattered: if the original
grid held nothing there the step was inert and its answer is zero. Otherwise
restore the cell, merge it into the sentinel when it sits in row `0`, merge it
with each of its four neighbours that are currently occupied, and read the
sentinel component's size again. The growth accounts for the restored cell plus
every cell that had been cut off by its removal, so the step's answer is the
difference less one, floored at zero for a restoration that reconnects nothing.

Why this is the same question: after all later removals have been applied, the
set of anchored cells is determined by connectivity alone, and the removal
under consideration is exactly the difference between two such connectivity
states. Reversing the order turns "which cells lost their path to the top" into
"which cells gained one", and a union-find never has to undo anything.

Take `grid = [[1,1,0],[1,0,0],[1,1,1]]` with the single coordinate `[1,0]`:

1. Emptying that cell first leaves the top row's pair `[0,0]`, `[0,1]` merged
   into the sentinel — component size `2` — and the bottom row merged into a
   separate component of its own.
2. Record `2`, then restore the cell.
3. It joins upward to `[0,0]` and downward to `[2,0]`, which drags the whole
   bottom row into the sentinel's component, now size `6`.
4. The answer for the step is `6 - 2 - 1 = 3`.

Each restoration performs a bounded number of merges and lookups, and path
halving with union-by-size keeps each of those effectively constant.

**Complexity:** `O((m n + k) alpha(m n))` time for `k` coordinates on an
`m x n` grid, and `O(m n)` space for the parent, size and working-grid arrays.
