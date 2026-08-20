# Solutions — Common Interval Pieces

## Two-pointer sweep

Nothing has to be sorted or de-duplicated first: each collection already
arrives ordered and gap-separated, which is exactly the shape a merge walk
wants. Hold a cursor in each collection and look only at the pair of intervals
they point at. Whatever those two share starts at the later of their two left
endpoints and stops at the earlier of their two right endpoints — the code
forms `lo = max(rangesA[i][0], rangesB[j][0])` and `hi = min(rangesA[i][1],
rangesB[j][1])` and records `[lo, hi]` precisely when `lo <= hi`. Endpoints
belong to the intervals, so equality is a real answer rather than a rejection:
against `[7,12]`, the interval `[2,7]` contributes the width-zero piece
`[7,7]`.

Deciding which cursor to move is the part that makes the walk linear. Compare
the two right endpoints and retire the interval with the smaller one. Its
collection's remaining intervals all begin strictly after it, so it cannot
reach anything the other cursor will visit later, and no future pair will ever
need it again. When the two right endpoints tie, either cursor may move; the
implementation advances the second, and the retired interval is equally
finished under either choice.

Run that on the first example and the cursors produce `[2,4]`, then `[7,7]`,
`[9,10]`, `[16,17]` and `[19,20]`, in that order — the output comes out sorted
for free, because each emitted piece lies inside the pair of intervals under
the cursors and the cursors only move forward.

The loop's guard fails immediately when either collection is empty, which is
why the second example needs no special case. Across the whole run each
iteration retires one interval, so there are at most `m + n` of them.

**Complexity:** `O(m + n)` time, `O(1)` extra space beyond the returned list.
