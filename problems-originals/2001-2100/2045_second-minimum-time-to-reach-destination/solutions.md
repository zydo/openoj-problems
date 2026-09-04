# Solutions — Second Minimum Time to Reach Destination

## Two edge-count arrivals per vertex

Because every edge takes the same time and every signal changes on the same
schedule, every walk with the same number of edges reaches each step at the
same time. A breadth-first search can therefore ignore clock time initially:
for every vertex it records the smallest and second distinct smallest edge
counts that reach it. A queue propagates a count only when it improves one of
those two slots, so equal-length routes do not masquerade as a second value and
each vertex contributes at most two states.

Once the second edge count for vertex `n` is known, simulate exactly that many
traversals. Before each edge, an odd value of `elapsed / change` means the
signal is red, so advance to the next multiple of `change`; otherwise leave
immediately. Then add `time`. Using wide arithmetic internally keeps the wait
and traversal additions safe before returning the guaranteed 32-bit result.

**Complexity:** `O(n + m)` time and `O(n + m)` space, where `m` is the number of edges.
