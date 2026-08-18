# Solutions — Rotated Array Lookup

## Modified binary search on the sorted half

Halving works whenever you can prove one side cannot hold the answer. A single
cut leaves exactly one seam in the array, and a seam cannot be in two places at
once: for any window `[lo, hi]` and its midpoint, at least one of the two
halves is free of it and therefore still ascending. Comparing `nums[lo]` with
`nums[mid]` identifies that half — if the first value does not exceed the
middle one, the left half is the clean one, otherwise the right half is. Using
`<=` rather than `<` covers the window so narrow that `lo` and `mid` are the
same position, and on an uncut array the test simply always names the left.

A clean half is bounded by its two ends, so deciding whether `target` belongs
there is one range test, not a scan. If `target` falls inside those bounds the
window shrinks to that half; if it does not, the answer — if the array holds it
at all — has to be on the other side, and the window shrinks there instead.
Distinct values are what make the bounds crisp, since no value can appear on
both sides of a boundary.

![The window halves [0..6] -> [4..6] -> [4..4] for nums = [12,15,20,26,3,8,9] and target 3, each step keeping the ordered half that can contain the target.](figures/solution-binary-search-halving.svg)

Follow `nums = [12,15,20,26,3,8,9]` with `target = 3`. The midpoint is index 3
holding 26; since 12 does not exceed 26 the left half is clean, spanning 12 to
26, and 3 is below that span, so the window moves to `[4..6]`. There the
midpoint is index 5 holding 8, the left half spans 3 to 8, and 3 does fall in
it, so the window becomes `[4..4]` — where the midpoint is the answer. A search
for a value the array never holds runs the same way and ends with the window
empty, which is the `-1` case.

Every iteration discards half the window and the state is a few index
variables.

**Complexity:** `O(log n)` time, `O(1)` space.
