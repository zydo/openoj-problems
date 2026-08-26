# Solutions — Finding the Number of Visible Mountains

## Rotate the plane, sort, and keep a running maximum

A mountain's sides have slopes 1 and -1, so its region is
`|X - x| <= y - Y` for every ground point `(X, Y)` under peak `(x, y)`.
Peak `a` therefore lies inside or on mountain `b` exactly when both
`xa - xb <= ya - yb` and `xb - xa <= yb - ya` hold — that is, when
`xa + (-ya) >= xb + (-yb)` and `xa + ya >= xb + yb`. Rotating every peak
to `(u, v) = (x - y, x + y)` turns this containment test into plain
componentwise comparison: mountain `b` hides mountain `a` iff
`u_b <= u_a` and `v_b >= v_a`. The rotation is just a 45-degree change of
basis, so nothing about which peaks dominate which changes — only the
bookkeeping gets easier.

Sort by `u` ascending, breaking ties by `v` descending, then sweep. A
peak is visible exactly when no earlier-processed peak has an equal or
smaller `u` together with an equal or larger `v`; because of the tie
order, any such dominator appears before it in the sweep. So track the
maximum `v` seen so far and count a peak as visible only if its own `v`
is strictly greater than that running maximum. Equal `(u, v)` duplicates
sit adjacent after sorting: each sees the previous copy's identical `v`,
fails the strict comparison, and correctly disappears from the count,
matching Example 2 where coincident peaks hide each other.

**Complexity:** `O(n log n)` time, `O(n)` space.
