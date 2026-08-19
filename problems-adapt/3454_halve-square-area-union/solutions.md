# Solutions — Halve the Square Area Union

## Y-sweep over events with an interval tree for covered width

Covered area below a height is the integral of the covered strip's width, and
that width is constant between neighboring square bottoms and tops. So sweep
the `2n` event heights upward: at each height, apply the squares that begin
or end there, then record the band up to the next height with the width the
union currently has. The union decomposes into exact integer-area bands, and
the answer lies inside the first band whose far edge reaches half the total.

The union's width is the part that needs a data structure. Compress the
x-coordinates of all square edges into elementary intervals and store, per
node of an interval tree over them, a coverage count and the covered length
inside the node's span. A node with a positive count is wholly covered, a
leaf without one is wholly uncovered, and an interior node falls back to the
sum of its children. Counts change only where a square's span fully covers a
node, and are never cleared below that point, so no lazy propagation is
needed: each square enters and leaves with one `O(log n)` range update, and
the root's covered length is the current width.

One pass records the bands `(y0, y1, width)` with the area accumulated
before each; a second finds the first band whose completed area reaches half
the total and solves `width · (y − y0) = total/2 − area` — written over
integers as `y0 + (total − 2·area) / (2·width)`, so the only floating-point
step is the final division and the `10⁻⁵` tolerance is met with room to
spare even for areas near `10¹⁵`.

Degenerate cases ride along: a square nested inside another, like Example
2's unit square, toggles counts without ever changing the width; equal
heights across different squares group into one event before any width is
read; and Example 3's corner overlap shows the tree earning its keep — the
band from 3 to 4 runs at width 5 because the union of `[0,4]` and `[3,5]`
is one interval, not two. With `2n` events and logarithmic updates each:

**Complexity:** `O(n log n)` time, `O(n)` space.
