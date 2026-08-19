# Solutions — Highest Reachable Frequency

## Sliding window on the sorted array

Increments only ever push values upward, so whichever positions end up
sharing a value were all at most that value to begin with and were lifted
to it. Once the array is sorted, such a set of positions is a contiguous
block, and the cheapest value to lift a block to is its own rightmost
element — that member needs no work at all, and any higher target would
only add to the bill. The bill itself is `width × nums[right] − sum`:
every member short of the right end by `d` contributes `d` increments.

The code walks `right` forward, adding each element to a running block sum,
and evicts from the left while the bill exceeds `k`. Eviction is the only
repair a block ever needs — the leftmost member is the most expensive to
lift — and monotonicity means a block length that has become affordable
never becomes a candidate again at a smaller length. The widest block seen
is the answer.

![The sorted array 1, 3, 4 drawn as bars with the target level set by the
right end 4: the budget pays +3 to lift the 1 and +1 to lift the 3, a bill
of 3 × 4 − 8 = 4 = k, so the whole block of three equal values is
affordable.](figures/solution-raise-to-right-end.svg)

Two boundary cases fall out without special handling. A single element is
always an affordable block, so the answer is at least 1. And when `k` is
large enough to lift everything, the block simply grows to the whole array
and the eviction loop never fires — for `nums = [5,2,5,7]` with `k = 4`,
the block `[5,5,7]` lifts both 5s to 7 at a cost of exactly 4.

**Complexity:** `O(n log n)` time (the sort dominates), `O(n)` space.
