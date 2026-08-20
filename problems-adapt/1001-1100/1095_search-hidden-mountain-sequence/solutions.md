# Solutions — Search a Hidden Mountain Sequence

## Triple binary search

The shape is the whole puzzle: one strictly ascending run, one summit,
one strictly descending run. Each of those three facts is bisection-
friendly through `get`, and `length()` costs nothing.

**Finding the summit.** The predicate `get(mid - 1) < get(mid)` is
monotone — true up to and including the summit, false from the next
index on — so bisecting for its last true occurrence pins the summit.
Every step spends two reads, roughly `2 log n` for the whole hunt. The
strict rise guarantees exactly one sign change, so the surviving `lo` is
the summit's index.

**Searching the slopes.** Left of the summit the sequence behaves like a
plain ascending array: bisect for the first index whose value reaches
`target`, then confirm equality. Searching this half first is what makes
the answer the _smallest_ index — any hit there precedes everything on
the right half, so the search can stop on the spot. Only on a miss does
the mirrored bisection run over the strictly descending right half
(first index whose value drops to `target` or below, then confirm). A
miss on both halves leaves `-1`.

At `n = 10⁴` the three searches together spend roughly `4 log n ≈ 55`
reads — far inside the 100-read budget, while any linear scan would
exceed it by two orders of magnitude.

**Complexity:** `O(log n)` time, `O(1)` space.
