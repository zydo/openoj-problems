# Solutions — Water Pooled Between Bars

## Two Pointers

Decompose the answer by column. Above bar `i` the surface sits at the smaller
of two numbers — the tallest bar anywhere to its left and the tallest anywhere
to its right — and the depth there is that surface minus `height[i]`, floored
at zero. Summing the depths gives the total, so all that is really needed is,
for each position, those two running maxima.

Building them as arrays costs linear extra space. Two pointers converging from
the ends get the same information for free. Keep `left` and `right` at the
extremes with `left_max` and `right_max` recording the tallest bar met so far
on each side, both starting at zero since no height is negative. Each step
compares the two bars under the pointers and works on the shorter one.

The reason that is sound deserves stating plainly. Suppose the left bar is the
shorter. Then somewhere at or beyond `right` there stands a bar of at least
`height[right]`, which exceeds `height[left]` — so whatever the true right-hand
maximum for position `left` turns out to be, it is not the smaller of the pair,
and the surface above `left` is decided by `left_max` alone. Nothing further
right can change the verdict. If the bar is itself a new left-hand record it
holds nothing and simply raises `left_max`; otherwise it holds exactly
`left_max - height[left]`. Then the pointer moves in. The mirror image of the
argument covers the right side.

Every iteration retires one position, and the loop runs while `left < right`,
so the position where they meet is never counted — which is harmless, since a
global maximum holds nothing anyway. Degenerate inputs need no special
handling: on `height = [1,2,3]` the shorter side is always the left, no bar
ever falls below its own running record, and the total stays zero; a
single-bar input never enters the loop at all.

**Complexity:** `O(n)` time, `O(1)` space.
