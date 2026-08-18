# Solutions — Select Kth Largest

Two ways to answer without fully sorting: either narrow in on the answer's
sorted position, or stream the array through a heap that keeps only the
top `k` values.

## Randomized Quickselect

The value wanted is the one that would land at index `n - k` of the array
sorted ascending, so the whole task is discovering a single sorted
position — the order of everything else is irrelevant. Quickselect keeps a
live window `[lo, hi]` promised to contain that index and contracts it one
partition at a time: choose a pivot, sweep so that every value strictly
smaller than the pivot ends up on its left, and the pivot settles at its
final sorted slot (duplicates ride the right side of the split, which is
what keeps the partition sound under heavy repetition). Only the half of
the split still covering the target survives to the next round, and the
window loses at least one element each time. The loop runs iteratively
over `[lo, hi]` rather than by recursion.

Pivots come from the window uniformly at random. Fixed pivot rules are
what make plain quickselect brittle — pre-sorted or constant arrays then
discard one element per partition and the work turns quadratic. Random
pivots deny any fixed input that leverage: each partition cuts the window
by an expected constant fraction, the expected total is linear, and a
quadratic run has probability vanishing toward zero no matter what arrays
the judge sends.

**Complexity:** `O(n)` expected time — every round costs the window size
and the window decays geometrically in expectation; worst case `O(n^2)`
with probability tending to zero. `O(1)` extra space: the partition is
in place and the window is two indices.

## Min-Heap of Size k

A min-heap holding exactly `k` values always contains the `k` largest seen
so far, smallest of them — the running kth largest — at the root. The
opening `k` elements are heaped straight away; each remaining element is
compared with the root before the heap is touched: only something strictly
above that minimum belongs in the top `k`, and it enters by popping the
root and pushing itself. Skipping all the rest is what holds the sweep at
`O(n log k)` — most elements cost one comparison.

Every heap operation is logarithmic in `k`, not `n`, so this undercuts a
full `O(n log n)` sort whenever `k` is small next to `n`; small `k` also
means the heap rarely turns over, leaving the pass nearly linear. When the
scan closes, the root carries the least of the top `k` — the kth largest
by rank with duplicates counted, exactly as specified. The extreme `k = n`
just keeps every element, the root being the array minimum, still correct.

**Complexity:** `O(n log k)` time — `O(k)` to heapify the opening `k`
elements plus at most `n - k` replacements at `O(log k)` apiece. `O(k)`
extra space for the heap.
