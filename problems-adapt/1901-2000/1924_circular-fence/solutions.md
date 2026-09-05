# Solutions — Circular Fence

## Welzl's Incremental Smallest Enclosing Circle

The cheapest circular fence is the smallest enclosing circle of the point set,
and three points always suffice to pin it down: the circle is either a radius-0
point, has two of the points as a diameter, or runs through three of them as
their circumcircle. Welzl's incremental scheme turns that fact into an
algorithm. Grow the point set one point at a time, carrying the smallest circle
of everything processed so far; the moment a new point `i` lands outside that
circle, `i` is forced onto the border of the corrected one, so rebuild with `i`
fixed — and inside that rebuild the same argument repeats, first pinning a
second border point `j` (the two define a diameter circle), then a third `k`
(the circumcircle of the three).

The two-point circle is the midpoint with a quarter of the squared distance as
squared radius. The three-point case solves the perpendicular-bisector linear
system for the circumcenter; a zero determinant marks three collinear points,
where no circumcircle exists, and the code falls back to the smallest of the
three diameter circles — which is the correct answer for that degenerate
layout. Enclosure testing compares squared distances and adds an epsilon of
`1e-7`, so a point sitting exactly on the border (routine with integer inputs)
is treated as enclosed instead of triggering a pointless rebuild.

Precision deserves one sentence of care because the judge window is `10⁻⁵`:
all coordinates are translated by the first point before becoming floats,
which keeps intermediate products small; the center is shifted back and the
square root taken exactly once, at the very end. A lone input point never
enters the loops and comes back with radius 0.

The first example walks the middle case:
`positions = [[0,0],[6,8],[1,1]]`. Processing `[1,1]` after `[0,0],[6,8]`
changes nothing — it lies inside the diameter circle of the first two — so the
answer stays center `(3, 4)`, radius `5`.

**Complexity:** `O(n)` expected time (`O(n³)` worst case in adversarial orders;
this port does not shuffle), `O(n)` space.
