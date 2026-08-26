# Solutions — Find a Safe Walk Through a Grid

## 0-1 BFS on the cheapest unsafe-cell count

Think of the walk as paying one health point for every unsafe cell it
enters — and note that both endpoints are entered: the walk begins by
stepping onto `(0, 0)` and ends by stepping onto `(m - 1, n - 1)`, so a
path's cost is the number of `1` cells on it, start and destination
included. The walk is safe exactly when some path costs at most
`health - 1`: spending that much leaves the required positive remainder.
Example 1 shows the boundary — with `health = 1` the budget is zero, so
only a fully safe path qualifies; Example 3 shows the endpoints charging,
where the best path pays for all four unsafe cells it touches (the center
is safe but every other cell of the grid, corners included, is not).

So compute, for every cell, the minimum number of unsafe cells entered on
any walk from `(0, 0)` to it, then compare the value at the bottom-right
corner against `health - 1`. Edge moves cost 1 when the neighbor is
unsafe and 0 when it is safe — a shortest-path problem whose edge weights
are only 0 and 1, which is what 0-1 BFS exploits. A double-ended queue
holds frontier cells; popping from the front relaxes each neighbor and
pushes it back to the front when the move was free (same layer) or to the
back when it cost a point (next layer). Every cell therefore enters the
deque at most once per improved distance, distances are finalized in
nondecreasing order just as in Dijkstra, and the answer is whether the
destination's final distance stays within the budget. A plain BFS or a
binary heap both work too; the deque merely avoids the heap's log factor.

The numbers stay tiny: costs never exceed `m * n <= 2500`, so 32-bit
integers hold everything with room to spare.

**Complexity:** `O(mn)` time — every cell is relaxed O(4) times and deque
operations are constant; `O(mn)` space for the distance matrix and deque.
