# Solutions — Halve the Square Area Sum

## Binary search on the line's height

Because every square contributes its area independently, the total is just
`sum(li²)`, and the area below a line at height `y` is a plain sum of
per-square contributions — a non-decreasing function of `y` that starts at 0
and reaches the total. The balance height is therefore findable by bisection:
keep an interval `[lo, hi]` covering every candidate (from 0 to the highest
square top), test the midpoint, and keep the half that still contains the
smallest qualifying height. Directing the search at the _smallest_ such
height matters when the below-area flatlines — Example 2's plateau between
heights 2 and 3 must return 2, not 3.

Testing one height is a linear pass. A square with bottom edge `yi` and side
`li` reaches up to `yi + li`; the part of it below the line is
`li * clamp(y - yi, 0, li)`, so squares entirely above contribute nothing and
squares entirely below contribute their full area. Comparing the running sum
against half the total decides which half of the interval survives.

Overlaps need no machinery at all — that is what keeps this task simpler
than judging the covered region would be: Example 3's inner square is inside
the outer one, yet both feed the sum, so the totals are `16 + 4 = 20` and
the crossing sits at
`y = 7/3`, where the outer square supplies `28/3` below and the inner adds
`2/3` on top. Sixty halvings of a span no wider than `10⁹` land far inside
the `10⁻⁵` tolerance.

**Complexity:** `O(n log Y)` time with about sixty passes over the squares,
`O(1)` extra space.
