# Solutions — Vertical Order Traversal of a Binary Tree

## One coordinate sweep, sorted per column

The answer is a total order on the nodes, so one traversal that records a
`(column, row, value)` triple for every node captures all the input data the
answer can depend on. The walk is a depth-first descent carried by an
explicit stack of `(node, row, column)` frames — deliberately not recursion,
because with up to a thousand nodes the tree may be a single 1000-deep
chain, past the recursion comfort zone of the runtimes this judge pins.

Each visited node deposits its `(row, value)` pair in its column's bucket.
Sorting finishes the job: a bucket's pairs sort by `(row, value)`, so rows
read top to bottom and — the twist this problem adds to plain vertical order
— two nodes sharing one `(row, column)` cell fall back to value order,
which is exactly why the example with the two swapped nodes has the same
answer as the unswapped tree. The columns themselves emit left to right.

Every node is recorded once and joins one per-column sort of at most `n`
pairs, so the whole pass is `n log n`; the buckets and the walk stack hold
`O(n)` records between them.

**Complexity:** `O(n log n)` time, `O(n)` space.
