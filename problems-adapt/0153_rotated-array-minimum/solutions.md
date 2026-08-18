# Solutions — Rotated Array Minimum

## Binary Search against the Right End

Moving a suffix to the front turns one increasing sequence into two, laid side
by side, and the value being asked for opens the second of them. There is
exactly one index where a value is smaller than its predecessor, and that index
is the target — so the task is really to locate a single boundary, which is
what binary search is for.

The decision at each step is which half of the window still holds the boundary,
and the comparison that settles it is `nums[mid]` against `nums[hi]`, the value
at the window's right edge. If the midpoint is the larger, the midpoint still
belongs to the first stretch and the boundary lies beyond it, so the window
becomes `[mid + 1, hi]`. If it is not, everything from the midpoint to the right
edge already increases, which places the boundary at the midpoint or before it,
and the window becomes `[lo, mid]` — the midpoint is kept, because it may be
the answer itself.

Choosing the right edge as the reference rather than the left is what keeps
the un-rotated case honest. When the whole array increases, every comparison
lands in the second branch, `hi` walks steadily down to index `0`, and the
first entry is returned — which is exactly right for `[2,14,29,38]`. Comparing
against `lo` instead would need a separate test for that case.

The window shrinks by half every iteration and always contains the answer, so
`lo` and `hi` converge on a single index whose value is returned; an array of
one entry never enters the loop at all. Distinct values mean the comparison is
never a tie, so no case is ambiguous.

**Complexity:** `O(log n)` time, `O(1)` space.
