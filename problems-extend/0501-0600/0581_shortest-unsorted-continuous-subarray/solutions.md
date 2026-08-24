# Solutions — Shortest Unsorted Continuous Subarray

## Running extremes from both ends

An element is misplaced exactly when an order seen from one end breaks at
it: something larger stands before it, or something smaller after it. So one
scan left to right carrying the running maximum — the prefix max — flags
every index whose value dips below it, and the last flag it leaves is the
window's right edge; one scan right to left carrying the running minimum —
the suffix min — flags every index whose value rises above it, and the
leftmost of those, the last flag the backward scan leaves, is the left
edge. Every index neither scan flags already sits larger than all before it
and smaller than all after it, so the stretch between the two edges is the
shortest subarray whose sort leaves the whole array sorted, and length 0
falls out when no flag ever appears.

The comparisons are strict, so equal values never extend the window on
their own: an element that merely equals the running extreme still fits the
sorted order and raises no flag. `[1, 2, 2, 3]` therefore needs no work,
while `[1, 3, 2, 2, 2]` needs its length-4 window — the plateau is flagged
by the 3 above it, not by its own repeats — and an entirely equal array
records nothing and returns 0.

Sorting a copy and comparing it against the original finds the same first
and last mismatched positions in `O(n log n)`. The two running-extreme
scans answer the follow-up instead: each element is touched once, and
nothing is kept beyond the two boundary indices and the two running
extremes.

**Complexity:** `O(n)` time, `O(1)` space.
