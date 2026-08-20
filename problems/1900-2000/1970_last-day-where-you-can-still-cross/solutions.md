# Solutions — Last Day Where You Can Still Cross

## Binary Search on the Day with BFS Feasibility

The crossing property is monotone in time: land cells only flood, never dry, so once a top-to-bottom walk becomes impossible it stays impossible forever. This monotonicity means the set of days on which crossing is possible is a prefix of days, and binary search can find its right endpoint. The search looks for the largest `day` such that a walk still exists after the first `day` cells of `cells` have been flooded, using the upper-mid form (`mid = (lo + hi + 1) // 2`) so the loop converges on the last feasible day.

Feasibility is checked with a BFS over the land grid. The grid is rebuilt for the query day by marking the first `day` cells as water; every unflooded cell in the top row is seeded into a queue (a multi-source BFS from all possible starting points), and the search expands over unflooded, unvisited neighbors in the four cardinal directions. Success is reported the moment any cell in the bottom row is dequeued; if the queue drains without that, the day is infeasible.

The search range starts at day 1 (guaranteed crossable, since only one cell is flooded in a grid with at least 4 cells arranged in at least two rows and columns) and ends at `row * col`. Rebuilding the grid and running BFS each check costs `O(RC)` — writing `R` and `C` for the row and column counts — and there are `O(log(RC))` checks. An equivalent alternative noted in the hints is to process days in reverse and union land cells back with a disjoint-set structure, but the binary search with BFS achieves the same bound with simpler code.

**Complexity:** `O(RC log(RC))` time, `O(RC)` space.
