# Solutions — Floor and Ceiling in a Search Tree

## Inorder Flatten, Then Binary Search

The inorder walk of a binary search tree emits its values in ascending order,
so one traversal converts the tree into a sorted array — and from then on the
tree's shape, however skewed, is irrelevant. That trade is what makes the
query volume affordable: there can be as many queries as nodes, and random
access beats repeated root-to-leaf descents.

For a query `q`, two bisects settle the pair. `bisect_right` lands just past
the final entry `<= q`; stepping back one gives the floor, and landing at
index 0 means every value exceeds `q`, so the floor is `-1`. Symmetrically,
`bisect_left` finds the first entry `>= q` — the ceiling — and falling off
the far end means no ceiling exists. When `q` is stored in the tree, both
searches converge on it and the pair collapses to `[q, q]`, as with the query
7 in the first example.

The walk is iterative — slide down pushing left children, pop, record, step
right — which keeps a `10⁵`-node degenerate tree clear of recursion limits.
Stored values are distinct here, but the bisect pair would behave sensibly
with duplicates too: `right` stops past the last copy, `left` at the first.

One `O(n)` flattening plus two `O(log n)` probes per query gives
`O(n + q log n)` overall; the sorted array is the only sizable allocation.

**Complexity:** `O(n + q log n)` time, `O(n)` space.
