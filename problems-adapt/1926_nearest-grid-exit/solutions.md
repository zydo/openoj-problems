# Solutions — Nearest Grid Exit

## Breadth-First Search

With every move priced at one step, the grid is an unweighted graph, and a
breadth-first search outward from the entrance reaches cells in nondecreasing
order of distance. Whichever border cell the search dequeues first — the
entrance aside — is therefore as close as any exit gets, and the distance
recorded for it is the answer.

The implementation carries distances in a `dist` matrix seeded with `-1`, so
one array doubles as the visited set; the entrance starts at `0`, and a deque
drives the loop. The border test `(i == 0 or i == m-1 or j == 0 or j == n-1)
and (i, j) != (er, ec)` fires when a cell leaves the queue rather than when
it enters: testing on dequeue excludes the entrance cleanly (it often sits on
the border, as in the 3-row example where the walk must go around it) while
still crediting any later border cell with its true step count. A neighbor
joins the queue only if it lies inside the grid, holds `'.'`, and has never
been reached; distances are stamped at enqueue time, which is precisely what
keeps the queue sorted by distance.

When the queue empties without a single exit being dequeued, every reachable
border cell is either walled or is the entrance itself, and the function
returns -1 — Example 3's sealed corner is the smallest such case. Walls are
never entered, so they cost nothing beyond the bounds and character checks,
and each open cell passes through the queue at most once.

**Complexity:** `O(m·n)` time, `O(m·n)` space.
