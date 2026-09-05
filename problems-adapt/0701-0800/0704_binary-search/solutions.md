# Solutions — Binary Search

## Iterative Closed-Interval Binary Search

Carry two indices, `lo` and `hi`, standing for a window of positions that is
inclusive at both ends, and keep one promise about them: if `target` is in the
array at all, its position is somewhere in `nums[lo..hi]`. The window starts as
the whole array, where the promise is free.

One probe per iteration keeps it. Look at `mid`, the middle position of the
window. If the entry there equals `target` the search is over. If it is below
`target`, then it and everything left of it are below `target` as well — the
array is increasing — so `lo` moves to `mid + 1`. If it is above `target`, the
mirror move sets `hi` to `mid - 1`. Both branches drop `mid` itself along with
the half it rules out, which is why the window strictly shrinks and the loop
cannot spin.

When `lo` passes `hi` the window is empty. The promise then says `target` was
never in the array, so the answer is `-1`. Nothing else needs a special case:
an array of one entry, a target below everything or above everything, a match
at either end — each is just the same loop run to its natural stop. Values are
distinct, so a match is _the_ match and its position can be returned on the
spot.

Example 2 shows the miss: with `nums = [-8,-3,1,4,6,10,15]` and `target = 7`
the window `[0,6]` probes 4, moves to `[4,6]`, probes 10, moves to `[4,4]`,
probes 6, moves to `[5,4]` — empty, so `-1`.

**Complexity:** `O(log n)` time, `O(1)` space.
