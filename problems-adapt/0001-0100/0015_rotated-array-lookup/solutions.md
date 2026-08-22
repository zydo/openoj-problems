# Solutions — Rotated Array Lookup

Two searches living off the same fact: a single cut leaves exactly one
seam, so at every midpoint at least one half of the window is still in
plain ascending order. The two-stage search exploits it once and for
all — a first binary search pins the seam down by locating the array's
smallest value, after which the array is two ordinary sorted runs and a
plain binary search runs in whichever run can hold the target. The
single pass exploits that locally instead, asking at each step which
half the seam spares and whether that half's bounds admit the target.

## Find the Pivot, Then Binary Search

The rotation is cheaper to undo than to work around. The array is two
ascending runs joined at a single drop, and the smallest value sits exactly at
the join — so locating that value settles the seam once, up front. Locating it
is itself a binary search: compare any window's midpoint with its last value. A
midpoint above the last value has the drop somewhere to its right, so the
minimum lies beyond the midpoint; otherwise it lies at the midpoint or to its
left. Distinct values are what make the comparison readable, since equality
never occurs. An uncut array never shows a drop, and the window closes in on
index 0.

With the pivot fixed, the geometry is gone. From the pivot to the end the
values climb from `nums[pivot]` to `nums[n-1]`, and everything before the
pivot is larger than all of that — the cut merely moved the top of the sorted
order out front. One test against the back run's span therefore routes the
target: inside `nums[pivot]..nums[n-1]` it can only be in the back run;
outside that span it can only be in the front one. Either interval is
genuinely ascending, so the second search is the plain one — midpoint, compare,
halve — with no further thought about rotation, and an emptied window at the
end is the `-1` case.

Follow `nums = [12,15,20,26,3,8,9]` with `target = 3`. The minimum search
halves `[0..6]` to `[4..6]` to `[4..5]` to `[4..4]`, landing on the 3 at index
4 — the seam. The back run spans 3 to 9 and the target sits at its edge, so
the plain search runs over `[4..6]`, rejects the 8 at its midpoint, and settles
on index 4. A target like 45 in `[30,40,50,10,20]` falls outside the back
run's span of 10 to 20, so the plain search runs over the front run
`[30,40,50]` instead and ends with the window empty.

Two binary searches, and the state is a few index variables either way.

**Complexity:** `O(log n)` time, `O(1)` space.
## Single Pass Binary Search

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

