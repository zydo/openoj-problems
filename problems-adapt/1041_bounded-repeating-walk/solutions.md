# Solutions — Bounded Repeating Walk

## Single-pass displacement check

Play the string out exactly once from the origin with a north heading, carrying
position `(x, y)` and heading `(dx, dy)`. `G` shifts one unit along the heading;
`L` and `R` quarter-turn it via the coordinate swaps `(dx, dy) -> (-dy, dx)` and
`(dx, dy) -> (dy, -dx)` — no angle bookkeeping or compass labels anywhere.

The verdict reads straight off that single pass. End facing north but away from
the origin and each repetition deposits the same displacement in the same
direction — an endless drift, so `false`. Every other ending says `true`:
landing back at the origin closes each pass into a loop on its own, while a
final heading of west, south, or east means each pass's displacement is the
previous one spun by a fixed 90, 180, or 270 degrees, and after at most four
passes those rotated copies cancel back at the origin, leaving the walk cycling
inside a fixed region.

`"GGRR"` shows the half-turn version: the first pass banks two units north
facing south, the second walks them straight back, and the walker oscillates on
one segment forever. The test `(x, y) == (0, 0) or (dx, dy) != (0, 1)` states
the whole dichotomy — home again, or turned at all.

**Complexity:** `O(n)` time, `O(1)` space.
