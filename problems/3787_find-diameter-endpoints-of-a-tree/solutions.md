# Solutions — Find Diameter Endpoints of a Tree

## Double BFS

The solution rests on a classic tree property: run a BFS from any starting node, and every node that ties as farthest from it is an endpoint of some diameter path. So the first BFS, started from node 0, collects the entire set of farthest nodes rather than a single one — each of them is a legitimate diameter endpoint lying on the "far side" of the tree relative to the start. Ties must be kept, because a tree with several equal-length arms has several diameter endpoints on that side.

A second BFS is then run from any node `u` in that first set. Since `u` is itself a diameter endpoint, the maximum distance recorded in this sweep equals the diameter `D`, and every node at distance exactly `D` from `u` is the opposite endpoint of a diameter path. The union of the two endpoint sets — the farthest nodes from the arbitrary start and the farthest nodes from `u` — is exactly the set of special nodes, which is rendered as the required binary string.

Concretely, the code builds an adjacency list, then uses a list as a FIFO queue for each BFS, recording distances in a `dist` array and tracking the largest distance seen. The helper returns the set of all indices whose distance equals that maximum, which naturally handles every tie. Each node is enqueued exactly once per sweep.

The edge cases fall out of the same mechanism: for `n = 2` both nodes are farthest in both sweeps and both come out special, and star-like or multi-armed trees produce multi-node sets on either sweep, all of which are unioned before producing the answer.

**Complexity:** `O(n)` time, `O(n)` space.
