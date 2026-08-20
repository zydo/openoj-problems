# Solutions — Grid Placement From Ordering Rules

## Two topological sorts

The row rules and the column rules never interact: a cell's row depends only
on the first list, its column only on the second. Split the problem along
those axes. Each list is a directed graph on the numbers `1..k` — an edge
`a -> b` means `a` must be peeled before `b` — and a legal placement exists on
that axis exactly when the graph peels completely. Kahn's algorithm does the
peeling: seed a queue with the zero-indegree vertices, repeatedly take a
vertex out, and decrement its successors' indegrees, enqueueing each the
moment it reaches zero. Repeated rules only add parallel edges with matching
indegrees, so they are harmless. If fewer than `k` vertices come out, a cycle
blocked the rest and the whole answer is the empty matrix.

A completed peel gives an ordering in which every rule's source precedes its
target. Take one ordering per axis; then number `v`'s natural home is
`(row_pos[v], col_pos[v])`, the index `v` holds in each ordering. Distinct
vertices occupy distinct indices in an ordering, so the `k` homes are `k`
distinct cells and no two numbers collide; writing `v` into its home and `0`
everywhere else realizes every rule on both axes at once.

For `k = 3` with `rowConditions = [[2,1],[1,3]]` and
`colConditions = [[1,3],[2,3]]`, the row peel yields `2, 1, 3` and the column
peel `1, 2, 3`: number 1 lands at `(1, 0)`, 2 at `(0, 1)`, 3 at `(2, 2)`,
giving `[[0,2,0],[1,0,0],[0,0,3]]`.

**Complexity:** `O(k + n + m)` time and space, `n` and `m` being the two rule
lists' lengths.
