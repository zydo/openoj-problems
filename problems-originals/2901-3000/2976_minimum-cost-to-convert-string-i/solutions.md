# Solutions — Minimum Cost to Convert String I

## Floyd–Warshall on the 26-letter conversion graph

Model every conversion rule as a directed weighted edge between two of the 26 lowercase letters, and note that a chain of conversions is exactly a path in this graph. The cheapest way to turn a letter `a` into a letter `b` is therefore the shortest path from `a` to `b`, where duplicate rules for the same pair simply contribute their minimum cost as the edge weight.

Since there are only 26 nodes, Floyd–Warshall precomputes all 676 pairwise distances in essentially constant time: start with a 0 diagonal and infinity everywhere else, apply each rule as `dist[a][b] = min(dist[a][b], w)`, then relax through every intermediate letter. The infinity sentinel is Python's `float("inf")`; it is the only floating-point value in the matrix, so unreachability can be detected with an exact equality comparison — real costs are integers and can never collide with it.

Finally, walk `source` and `target` together. Positions where the characters already match cost nothing; every other position adds `dist[source[i]][target[i]]` to the total, and a single infinite distance makes the whole answer -1. With up to 10^5 positions but only 26 possible character pairs, answering each position is a table lookup after the precomputation.

**Complexity:** `O(26^3 + n)` time, `O(26^2)` space.
