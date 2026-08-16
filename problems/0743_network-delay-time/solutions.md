# Solutions — Network Delay Time

## Dijkstra's Algorithm with a Min-Heap

The signal spreads through a directed weighted graph with non-negative weights, so the arrival time at each node is the classic single-source shortest distance from `k`, and the time until every node has heard the signal is the maximum of those distances. A heap-based Dijkstra computes all of them: the heap holds `(distance, node)` candidates, always popping the nearest unsettled node first, and a node is finalized the first time it is popped.

Stale heap entries are handled lazily: a pop that finds its node already in the settled dictionary is simply skipped, and neighbors that are already settled are not pushed again. Because all weights are non-negative, a node's first pop is provably its true shortest distance, which is what licenses settling it immediately and never revisiting it.

If the settled set ends up smaller than `n`, some node is unreachable from `k` and the answer is `-1`; otherwise it is the largest settled distance — the moment the last node receives the signal. With `V` nodes and `E` edges, building the adjacency list is linear and each edge causes at most one heap push, so the heap operations dominate.

**Complexity:** `O(E log E)` time, `O(V + E)` space.
