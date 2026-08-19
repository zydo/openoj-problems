# Solutions — Least Deferrals for Nonnegative Prefixes

## Greedy with a Min-Heap

Scan the array left to right, holding the running total of the arrangement
built so far and a min-heap of every element already passed. When the total
drops below zero, the only remedy is to send some earlier element to the
back; popping the smallest element seen so far and subtracting it from the
total repairs the violation for a single move.

The choice is optimal by an exchange argument: among all candidates,
removing the minimum lifts the total the most, so any plan that defers a
different element while the minimum is available can be rewritten to defer
the minimum instead — never more moves, never a worse total later. Because
the input's total sum is non-negative, the deferred negatives can always be
absorbed at the back, so the scan never runs out of repairs.

A negative element is dealt with not when it is first read but at the first
total it poisons — exactly the moment it must be displaced. Each element
enters and leaves the heap at most once, so heap work is `O(log n)`
amortized, and an array whose totals never dip returns zero.

Worked on Example 3, `nums = [-1,-2,6,-4,1]`: the total dips to `-1` after
the first element, so the `-1` is deferred (one move, total back to 0); the
`-2` then drags it to `-2` again, so the `-2` is deferred too (two moves);
afterwards the totals run 6, 2, 3 and never dip — the answer is 2.

**Complexity:** `O(n log n)` time, `O(n)` space.
