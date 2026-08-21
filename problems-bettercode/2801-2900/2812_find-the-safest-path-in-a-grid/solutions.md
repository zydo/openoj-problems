# Solutions — Find the Safest Path in a Grid

## Multi-Source BFS with Binary Search

The key observation is that the safeness factor of any cell — its Manhattan distance to the nearest thief — can be computed for the whole grid at once by launching a single multi-source BFS from every thief cell simultaneously. Because BFS explores in waves, the first time the wavefront reaches a cell, it has traveled the minimum number of grid steps, which for this unweighted grid equals the Manhattan distance to the closest thief. This produces a `dist` table where `dist[r][c]` is exactly the safeness value of cell `(r, c)`.

A path from `(0, 0)` to `(n - 1, n - 1)` has safeness factor equal to the minimum `dist` value along it, so asking "is there a path with safeness factor at least `v`" is equivalent to asking whether the two corners stay connected when every cell with `dist < v` is deleted. That check is a plain BFS from `(0, 0)` restricted to cells with `dist >= v`, with an early exit if either endpoint itself falls below the threshold. Since the answer is monotone in `v` (a path valid for `v` is valid for any smaller threshold), the maximum factor is found by binary searching `v` over `[0, 2n]` — the largest possible distance in an `n x n` grid — keeping the largest threshold for which the reachability check succeeds.

![Example 2's distance grid from the thief at (0,2), the cells deleted at threshold 2, and a path whose minimum distance is 2.](figures/solution-bfs-threshold.svg)

Edge cases fall out naturally: a thief standing on either corner forces `dist` there to `0`, so no threshold above `0` can ever connect them and the answer is `0`. Both BFS passes are linear in the number of cells, and the binary search multiplies that by a logarithmic factor.

**Complexity:** `O(n^2 log n)` time, `O(n^2)` space.
