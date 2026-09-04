# Solutions — Intersection of Two Linked Lists

## Two pointers, equalized walks

The intersection is a fact about node identity, not values: both heads lead
into chains that eventually become the very same nodes, so the first node the
two walks share by reference is the answer. Because the prefixes before that
node can differ in length, two pointers started at the heads reach the
intersection unevenly — after the shorter prefix's pointer has already moved
onto the shared tail, the longer one is still in its own prefix.

The canonical fix is to equalize the distances left to walk. One form measures
both lengths first and advances the longer list's pointer by the difference, so
the two remaining walks have equal length; stepping both pointers together then
makes them collide exactly at the first shared node (or reach `null` together
when there is no intersection). The switchback form gets the same effect
without counting: when a pointer falls off its list it restarts at the other
list's head, so after at most one switch each pointer has covered
`own prefix + other prefix`, the same total distance, and they meet at the
intersection — or at `null` after both have traversed everything.

Both variants are pure pointer work: no allocation, no bookkeeping, and the
input structure is only read. Values are ignored entirely, which is what makes
the identity contract honest — equal values in the two prefixes must not fool
the walk. The judge serializes the shared tail from the returned node and
verifies the node is genuinely part of the aliased chain, so returning a node
from list B's own prefix fails loudly.

**Complexity:** `O(m + n)` time — each pointer traverses at most both lists —
and `O(1)` extra space.
