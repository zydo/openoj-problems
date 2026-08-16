# Solutions — Possible Bipartition

## BFS Two-Coloring

The desired split exists exactly when the dislike graph is bipartite, that is, 2-colorable: assign each person one of two colors so that every dislike edge joins opposite colors. This turns the problem into a graph traversal — build an adjacency list (dislike is symmetric), then BFS outward from each person, giving every uncolored neighbor the opposite of the current node's color.

The BFS detects failure the moment it happens: if a neighbor is already colored and matches the current node's color, an odd cycle exists and no two-group assignment can work, so the function returns false immediately. Freshly discovered nodes get the negated color and join the queue; a traversal that finishes without conflict proves its entire connected component is 2-colorable, with the two colors literally being the two groups.

Because the dislike graph may be disconnected, the outer loop restarts the BFS from every still-uncolored person in `1..n`, coloring each component independently across all `n` people and `e` dislike pairs. Self-dislike pairs cannot occur (the constraints give `a < b`), so a person is never forced to avoid themselves.

**Complexity:** `O(n + e)` time, `O(n + e)` space.
