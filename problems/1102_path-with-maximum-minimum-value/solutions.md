# Solutions — Path With Maximum Minimum Value

## Greedy Max-Heap Best-First Search

Maximizing the minimum cell along a path has optimal substructure for a best-first search: among all frontier candidates, stepping onto the highest-valued unvisited cell can never hurt, because that cell's value either raises the running minimum or leaves it unchanged, and any path to the goal through the frontier must pass through some frontier cell whose value is at most the one chosen. This is Dijkstra with max replacing min and the path cost being the running minimum — the first time the goal is popped, its recorded minimum is the best achievable.

The implementation drives a max-heap of negated cell values starting from the origin, whose value seeds the running best. Popping a cell updates best = min(best, cell value); reaching the bottom-right cell returns best immediately. Each expansion pushes the four cardinal neighbors that are in bounds and unvisited, marking them visited at push time so no cell enters the heap twice.

Greedy termination is what makes this correct and fast: by always expanding the most valuable frontier cell, the search reaches the goal along a path whose bottleneck is the maximum over all paths, without exploring by distance. Marking visited on push (not on pop) keeps the heap at most one entry per cell. Edge cases: a 1×1 grid returns the single cell's value on the first pop; the start cell's own value correctly caps the answer (e.g. an origin of 0 can never score above 0).

![The example grid with the bottleneck path 5 → 4 → 5 → 6 → 6 found by the max-heap walk.](figures/solution-best-first-grid.svg)

**Complexity:** `O(mn log(mn))` time, `O(mn)` space.
