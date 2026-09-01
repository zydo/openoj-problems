# Solutions — The Hub of the Star Network

## Intersect the first two edges

The hub is the one node that lies on every edge of the star, so it appears
in the first two edges — and two distinct edges of a star can share only the
hub, because every other node has degree 1 and occurs in exactly one edge.
Whatever endpoint of `edges[0]` also shows up in `edges[1]` is therefore the
hub, and nothing else needs to be read.

The check is two comparisons: if `edges[0][0]` matches either endpoint of
`edges[1]` it is the hub, otherwise the shared node must be `edges[0][1]`.
The constraints guarantee `n >= 3`, hence at least two edges, so reading the
first pair is always safe.

**Complexity:** `O(1)` time, `O(1)` space.
