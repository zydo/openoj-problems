# Solutions — Drains To Both Seas

Both variants invert the flow and flood inland from the two coastlines; they
discover identical reachable sets and differ only in the discipline that orders
the frontier.

## dfs_from_borders

Following droplets downhill from every interior cell asks a separate question
per cell, and most of that work repeats. Reversal collapses it: a cell spills
to a sea exactly when some chain of neighbours with non-decreasing elevation
leads from that sea's edge back up to the cell — the same chain read backwards.

The `reachable` helper takes the coastline as a seed list, marks it seen, and
runs an iterative DFS with an explicit stack. Popping `(r, c)`, it steps to the
four neighbours whose elevation is at least `heights[r][c]` — precisely the
cells that could have poured into the one in hand. Cells are marked the moment
they are pushed, so each enters the stack once and the traversal stays linear
no matter how convoluted the terrain.

The upper-left flood starts from the whole top row and left column, the
lower-right flood from the bottom row and right column; the corner cells sit in
both seed lists, which also makes a 1x1 grid fall out correctly — its single
cell touches everything. A row-major sweep over the grid then emits the cells
carrying both floods' marks, already in the required order.

On the flat-rim example `[[4,4,4],[4,1,4],[4,4,4]]` each flood covers the
entire rim — equal elevations pass water in every direction — while the sunken
centre, elevation 1, is never tall enough for either flood to climb, and the
sweep skips it.

**Complexity:** `O(mn)` time, `O(mn)` space.

## bfs_from_borders

The same reversed flood with a FIFO queue in place of the stack. `reachable`
seeds the seen-set and the queue with the coastline, then dequeues a cell and
enqueues every unseen neighbour whose elevation is at least `heights[r][c]` —
again the cells that could have spilled into the dequeued one. Reachability now
spreads in rings of increasing distance from the coast instead of burrowing
along one path, but the set discovered when the queue empties is identical.

Marking on enqueue rather than on dequeue is what keeps each cell in the queue
at most once, holding the traversal to linear work on arbitrarily tangled
elevation maps. The two seed lists are unchanged — top row plus left column for
one sea, bottom row plus right column for the other, corners in both.

The answer is collected by the same row-major pass over the grid, so the output
matches the DFS variant cell for cell regardless of visiting order.

**Complexity:** `O(mn)` time, `O(mn)` space.
