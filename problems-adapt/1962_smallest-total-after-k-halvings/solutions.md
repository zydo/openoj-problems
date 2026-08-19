# Solutions — Smallest Total After K Halvings

## Greedy Max-Heap

Every operation deletes `floor(v / 2)` from the entry `v` it lands on, and
that deletion is non-decreasing in `v`. Greedy therefore wins outright:
always spend the round on the current maximum. If some schedule hits `a`
while `b >= a` sits untouched, replaying that round on `b` deletes at least
as much and leaves the array no larger, so swapping repeatedly converts any
schedule into the greedy one without loss. In `[9,2,6]` the first round
takes 4 from the 9, and the second correctly switches to the 6 — after the
first halving the 6 is the maximum, not the leftover 5.

The implementation keeps the entries in a max-heap — Python's `heapq` with
negated keys — and spends each round with a fused pop-and-push
(`heapreplace`): take out the maximum `top`, insert `top - floor(top / 2)`,
one sift in each direction. k rounds cost `O(k log n)` on top of the linear
heapify.

One early exit matters: when the maximum reaches 1, `floor(1 / 2)` deletes
nothing, so every remaining round is a null operation and the loop can stop
at once — relevant whenever `k` dwarfs the total, since the final answer is
just the sum of what is left in the heap.

**Complexity:** `O(n + k log n)` time, `O(n)` space.
