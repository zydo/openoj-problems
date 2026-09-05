# Solutions — Nearest BST Value II

## Inorder walk, then grow the window

An explicit-stack inorder walk flattens the BST to its sorted list of values, and over a sorted list the distance to `target` is a V-shaped curve — decreasing up to the target, increasing after it. The k closest values are therefore a contiguous window of that list, and the hints' predecessor/successor expansion becomes a plain two-frontier scan: find the split where `target` falls, then k times take whichever frontier value is nearer, expanding outward. This is that expansion run on the flattened array instead of on parent pointers and path stacks.

The pinned order falls out of the scan directly. A frontier only ever moves away from the target, so both frontier distances are non-decreasing and each pick is the smaller of the two — the picks come out ordered by non-decreasing distance. When the frontiers are exactly equidistant the left one is taken, and it always holds the smaller value. Node values and `target` are bounded by 10⁹, so the half-integer midpoints that create such ties — and both sides of every subtraction — are exactly representable IEEE-754 doubles; one subtraction and an absolute value decide each comparison, with no tolerance anywhere.

The walk is iterative, so a degenerate 10^4-node chain cannot overflow the call stack, and `k <= n` guarantees the loop never exhausts both frontiers. On a balanced tree the two-stack version of the same expansion, walking predecessors and successors through the tree itself, answers in `O(h + k)` without materializing the whole list — the follow-up's less-than-`O(n)` target — but for an arbitrary BST the full walk is already optimal, since reading the values alone takes n steps.

**Complexity:** `O(n)` time, `O(n)` space.
