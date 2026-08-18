# Solutions — Peak Interval Overlap

## Sorted Starts with a Min-Heap of End Times

Visit the intervals in start order and every arrival becomes one small
decision: either some earlier interval has already finished by now, or none
has. Which one finished is beside the point — only the *earliest* end among
the running intervals decides when the running count next drops, and a min-heap
of end times keeps exactly that value on top.

The intervals are sorted by start, and each `[start, end]` then inspects the
heap's minimum. A minimum of at most `start` means an interval closed before
this one opened, so the pair swaps: the old end is popped and `end` takes its
place (`heapreplace` in Python), leaving the running count unchanged. A minimum
above `start` means everything running is still going, so `end` is pushed and
the count climbs. The heap grows only on real simultaneity, so its size is the
peak concurrency — and no arrangement can beat the peak, since every interval
running at the witnessing instant needs its own slot.

Sorting costs `O(n log n)` and each of the `n` heap operations another
`O(log n)`; when every interval overlaps, the heap holds all `n` of them. The
half-open reading of an interval is carried by the `<=` test: on
`[[1,4],[4,7]]` the end 4 is at most the start 4, so the second interval
replaces rather than joins, and the answer is 1.

**Complexity:** `O(n log n)` time, `O(n)` space.
