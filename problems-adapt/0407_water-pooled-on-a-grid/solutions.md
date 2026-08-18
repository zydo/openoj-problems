# Solutions — Water Pooled On A Grid

## Priority-Queue Flood From the Border

Water above a border cell simply leaves the grid, so what an interior cell
keeps is governed by the cheapest barrier between it and the border: the cell
fills to the minimum, over all escape routes, of the highest ground the route
crosses. That observation sets an agenda — settle cells in increasing order of
that barrier — and a min-heap over the frontier is the data structure that
follows the agenda.

Seed the heap with every border cell, all marked settled, and repeatedly pop
the smallest entry. When level `h` comes off, it is the lowest point on the
entire frontier, so no untouched cell can keep water above `h`: every route
from such a cell to the outside must cross the frontier somewhere, and no
crossing point is lower than `h`. Each unvisited neighbor of the popped cell is
therefore finished on the spot. Ground below `h` keeps `h - nh` cubes, the
amount needed to bring it up to the popped level; ground at `h` or above keeps
nothing and joins the wall.

The neighbor goes back on the heap carrying `max(h, nh)` rather than its own
terrain height `nh`. Heap entries thus record the effective water-plus-terrain
level, so the frontier tracks the running spill line as it advances inward, and
each new pop is genuinely the next place water would overflow.

On the second example — the rim of 4s around a ring of 1s with a 3 in the
middle — the heap first drains the border, all at level 4. Popping inward, each
1-cell is below 4 and takes 3 cubes, and the center 3 takes a fourth; the
answer, 16, is complete once the heap empties. Maps with no interior, such as a
single row or column, never hold anything: every cell begins on the frontier,
so no neighbor is ever unsettled.

Each cell enters and leaves the heap once, so the sweep over the `m x n` grid
does constant work per cell on top of the heap operations.

**Complexity:** `O(mn log(mn))` time, `O(mn)` space.
