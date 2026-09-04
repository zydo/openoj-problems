# Solutions — All Ancestors of a Node in a Directed Acyclic Graph

## BFS on the reversed graph

Flipping every edge turns "who can reach v" into "who is reachable from
v": a breath-first search from each node over the reversed adjacency
marks exactly its ancestors. Emitting the marked indices in ascending
order satisfies the sorted requirement for free, and the DAG guarantee
keeps every search finite without bookkeeping.

**Complexity:** `O(n * (n + E))` time for `n` nodes and `E` edges,
`O(n + E)` space.
