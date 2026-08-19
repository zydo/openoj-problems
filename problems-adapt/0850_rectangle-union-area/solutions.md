# Solutions — Rectangle Union Area

## Coordinate compression grid

The obstacle is the coordinate range, not the number of rectangles: `10^9`
positions per axis rules out any grid over real coordinates, while `200`
rectangles contribute at most `400` distinct values to each axis. Those values
are the whole story, because coverage can only change where a rectangle edge
lies. Sort the distinct x values and the distinct y values, and the vertical and
horizontal lines through them carve the plane into at most `399 x 399` cells,
each of which is entirely inside or entirely outside every single rectangle.

That turns an area problem into a marking problem. Look each rectangle's four
coordinates up in the two index maps to get its cell range, and flag every cell
in it. Take the range half-open — from the index of `x1` up to but excluding
the index of `x2`, likewise in y — so a rectangle claims precisely the cells its
interior meets. Two rectangles sharing an edge then flag disjoint cell sets,
with nothing double-flagged and nothing missed between them. Overlap needs no
special handling at all: flagging an already-flagged cell changes nothing, which
is exactly the "count shared ground once" rule.

The final sweep restores real distances. A flagged cell at grid position
`(i, j)` stands for `(xs[i+1] - xs[i]) * (ys[j+1] - ys[j])` units of area, and
those are summed with a reduction after each addition. Reducing every step
matters here: an individual cell can approach `10^18`, so letting the running
total grow unbounded would overflow fixed-width arithmetic in several of the
languages. The reduction is also why the returned number is a remainder rather
than the area itself.

Degenerate slivers take care of themselves. A zero-width strip between two
equal coordinates never exists, since the distinct values were deduplicated
before sorting, and touching-but-not-overlapping rectangles contribute their
cells separately.

**Complexity:** `O(R · u · v)` time and `O(u · v)` space for `R` rectangles
producing `u` distinct x and `v` distinct y coordinates, with `u, v <= 2R`.
