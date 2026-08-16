# Solutions — Convert Sorted List to Binary Search Tree

## Divide and Conquer with a Slow/Fast Midpoint

In a sorted segment, the middle element is the only choice of root that
makes both sides a BST and keeps them as equal in size as possible — so
recursing on the two halves around it yields a height-balanced tree. The
nodes before the middle form the left subtree, the nodes after it the
right.

Because the input is a singly linked list, the middle is found by walking
two pointers: `slow` advances one node per step, `fast` two, and when
`fast` runs past the end `slow` has stopped on the midpoint. With the loop
guarded by `fast and fast.next`, an even-length segment leaves `slow` on
the second of the two middle nodes, matching the required tie-break. A
third pointer `prev` trails `slow` so `prev.next = None` can cut the list
in two; the recursion then treats `node` and `slow.next` as independent
list heads.

Empty segments (`node is None`) return `None`, and a one-node segment is
turned directly into a leaf before the pointer walk — which also matters
for safety, since with a single node `prev` would still be `None` when
the cut happens.

**Complexity:** `O(n log n)` time, `O(log n)` space — each call scans its
whole segment (`T(n) = 2T(n/2) + Θ(n)`), while the recursion depth is the
height of the balanced tree being built and the cuts reuse the input
nodes in place.
