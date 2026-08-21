# Solutions — Minimum Walk Covering Every Vertex

## BFS over (node, visited mask)

The current vertex alone does not describe progress because the walk may
revisit it after covering different portions of the network. Pair the current
vertex with a bitmask of all vertices seen so far. With at most 12 vertices,
there are only `n · 2^n` such states.

Moving across an edge replaces `(vertex, mask)` with
`(neighbor, mask | (1 << neighbor))`. Every transition costs one edge, so a
breadth-first search reaches each state with its minimum walk length. A table
indexed by vertex and mask both records the distance and prevents duplicate
queue entries.

Any vertex may be the starting point. Seed the queue with all states
`(i, 1 << i)` at distance zero, making the search multi-source. As soon as a
state with every bit set is removed from the queue, its distance is globally
minimal: all shorter-distance states have already been processed.

The connectedness guarantee ensures a full mask is reachable. Repeated
vertices and edges require no special treatment; they are naturally
represented by transitions whose mask does not change.

**Complexity:** `O(2^n · n²)` time and `O(2^n · n)` space.
