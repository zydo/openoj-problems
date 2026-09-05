# Solutions — Rotation of a Sorted Line

A sorted-then-rotated array looks like two non-decreasing runs with
the smaller one at the back: reading it circularly, it never descends
more than once. Conversely, if the circular view has at most one
descent — a position where each element exceeds its circular
successor — the descent marks the rotation point, and un-rotating
there yields the sorted original.

## Circular descent count

Scan the array as a ring: count positions `i` where
`nums[i] > nums[(i + 1) % n]`. The answer is true exactly when that
count is at most one. A fully sorted array contributes zero descents;
a single rotation seam contributes one; any array needing two or more
"fixes" cannot come from one sorted array no matter how it is turned.
Duplicates are harmless — equal neighbors never count as descents, so
an all-equal array passes with zero, and a seam hidden inside a run of
duplicates simply disappears.

On `[5,6,7,1,2,3]` the only descent is `7 > 1` — one seam, so true.
On `[3,1,2,4]` the wrap pair `4 > 3` descends as well, on top of
`3 > 1`: two descents, and no turning repairs both. The scan reads
each circular pair once.

**Complexity:** `O(n)` time, `O(1)` extra space.
