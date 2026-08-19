# Solutions — Shared Gaps Across Timelines

## Pool, Sort, and Sweep

Flatten every occupied interval into one list and sort by start, then end.
The timeline that supplied an interval no longer matters because a moment is
shared idle time only when it lies outside their complete union.

Sweep the sorted intervals while carrying the greatest end reached by the
current union block. A new start strictly beyond that end exposes a finite
gap, so append `[previousEnd, start]`. Whether or not a gap was emitted,
extend the running end with the maximum of itself and the current end.

The strict comparison merges intervals that merely touch and prevents
zero-length output. No artificial endpoints are introduced, so the unbounded
regions before the first block and after the last never appear.

**Complexity:** `O(N log N)` time and `O(N)` space for `N` total intervals.
