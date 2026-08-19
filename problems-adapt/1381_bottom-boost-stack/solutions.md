# Solutions — Bottom-Boost Stack

## Lazy raises on a parallel array

Pushing and popping on an array-backed stack are already constant-time moves;
all the difficulty sits in `boost(k, val)`, whose plain reading — raise the
bottom `min(k, depth)` elements — takes `O(k)` when done on the spot. The
`BottomBoostStack` class instead postpones that work until each element
departs.

Beside the values it maintains a same-depth `pending` array: `pending[i]`
accumulates every raise that elements at depth `i` and shallower have earned
but not yet collected. A `boost` is then a lone write,
`pending[min(k, depth) - 1] += val`, planted at the deepest slot the raise
reaches. `pop` settles up: the departing element collects its pending amount
on the way out, and — since everything pushed earlier stood below it and thus
inside every prefix it was inside — that amount is merged into the new deepest
slot before the slot is discarded.

The merge is what makes the scheme exact. Raises always cover a bottom prefix,
so at any instant the pending amounts are non-decreasing in coverage from the
top down; the element leaving had absorbed its own depth's recorded raises and
all shallower ones, which is exactly the debt still owed to the element now
beneath it. In Example 2 the three boosts land as single writes — `pending`
reads `[0, 30, 0, 0]`, then `[0, 30, 0, 4]`, then `[50, 30, 4]` after the
first pop — and the pops of 11, 6, 43, and 89 unwind those entries, each one
folding its balance a slot further down.

Both the Python and Java reference implementations carry out this scheme with
two parallel arrays (the Java one preallocates `maxSize` slots and moves a
`size` cursor). Every operation writes a constant number of cells, which
answers the follow-up even at `k` equal to full depth.

**Complexity:** `O(1)` time per `push`/`pop`/`boost`, `O(maxSize)` space.
