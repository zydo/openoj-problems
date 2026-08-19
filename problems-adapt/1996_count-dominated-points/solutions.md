# Solutions — Count Dominated Points

## Sort by x descending, track the best y seen

A point is dominated exactly when another point of the array lies strictly
up-and-right of it. Order the points by `x` descending and walk them in that
order: everything already visited has `x` at least as large as the current
point's, so the current point is dominated precisely when one of the visited
points also has a strictly larger `y`. One running maximum of `y` therefore
answers the question for every point — no pairwise scanning needed.

Equal `x` is the sole trap, because domination requires `x` to be *strictly*
larger and equal-`x` points cannot dominate one another. Sorting each
equal-`x` group by `y` ascending dissolves it: when the sweep reaches a
point, the running maximum of `y` was set either by a strictly larger-`x`
group, or by an equal-`x` point with smaller-or-equal `y` — never by an
equal-`x` point with larger `y`. So the test `y < maxY` is exact. Inside a
group the maximum rises only along non-dominated members, and each new group
inherits it whole.

Concretely, for `points = [[6,3],[6,8],[2,9],[4,7]]` the sorted order is
`[6,3], [6,8], [4,7], [2,9]`. After `[6,3]`: `maxY = 3`. After `[6,8]`:
not below 3, so `maxY = 8`. At `[4,7]`: `7 < 8`, dominated — the maximum
stays 8, and the dominator `[6,8]` has strictly larger `x`, as required.
At `[2,9]`: `9 ≥ 8`, not dominated. The count is 1.

After the sort the walk is a single pass counting the points whose `y` falls
below the running maximum, updating the maximum exactly when a point is not
dominated so later, smaller-`x` points compare against it.

**Complexity:** `O(n log n)` time, `O(n)` space.
