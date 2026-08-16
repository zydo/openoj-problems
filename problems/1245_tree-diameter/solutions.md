# Solutions — Tree Diameter

## Double BFS

The key insight is a classic tree property: starting a traversal from any node and finding the farthest node `B` guarantees that `B` is one endpoint of a longest path. A second traversal from `B` therefore measures the full diameter directly. Intuitively, wherever the true diameter's endpoints hide relative to the start node, the longest path from the start must reach at least one of them — otherwise the diameter path could be extended or improved through the branching structure.

Each traversal is a plain breadth-first search over the `n` nodes that records the distance of every node from the source; because a tree has exactly one path between any two nodes, BFS distances are true path lengths, and the node that was assigned the largest distance is the farthest one. The search tracks that node on the fly (`far`) rather than scanning the distance array afterwards. The first BFS from node 0 yields endpoint `B`, and the second BFS from `B` returns the eccentricity of `B`, which equals the diameter.

Both passes are iterative, using a queue, so deep or path-shaped trees cannot overflow the recursion stack. Distances initialized to `-1` double as the visited marker. The single-node tree (empty edge list) is handled up front: with no edges the diameter is 0.

**Complexity:** `O(n)` time, `O(n)` space.
