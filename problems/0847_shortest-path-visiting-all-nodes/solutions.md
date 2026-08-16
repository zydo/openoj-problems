# Solutions — Shortest Path Visiting All Nodes

## BFS over (node, visited mask)

The path may revisit nodes and reuse edges, so plain node states are not enough; the state must remember which nodes have been seen. With `n <= 12`, the visited set fits in a bitmask, and the search space becomes `(current node, mask)` — at most `n * 2^n` states. Every graph step moves to a neighbor and ORs its bit into the mask, so BFS over these states finds the minimum number of edges after which some state's mask is full.

Because the walk may start anywhere, the queue is seeded with all `n` initial states `(i, 1 << i)` at distance 0 simultaneously — a multi-source BFS that lets the search discover the best starting node by itself. A `dist` table of `-1` sentinels doubles as the visited marker: a state is enqueued only the first time it is reached, and since BFS explores in nondecreasing distance, that first reach carries the optimal step count.

When a popped state's mask equals `(1 << n) - 1`, its distance is returned immediately — this is the first moment any full mask is dequeued, hence the shortest walk visiting every node. The final `return 0` is unreachable for the connected graphs the constraints promise, serving only as a fallback.

**Complexity:** `O(2^n · n^2)` time, `O(2^n · n)` space.
