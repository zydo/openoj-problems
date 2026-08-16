# Solutions — Number of Provinces

## Iterative DFS Component Counting

Provinces are exactly the connected components of the city graph, and counting components has a canonical shape: sweep the cities, and every time an unvisited city is found, a new component starts there — increment the count and traverse everything reachable from it. Each launch of the traversal discovers precisely one province, and every city is absorbed into exactly one launch, so the number of launches is the answer.

The traversal is an explicit-stack DFS, which avoids recursion-depth concerns entirely. Popping a city scans its full adjacency row `isConnected[city]`; every unvisited neighbor marked `1` is marked visited and pushed. Marking at push time rather than at pop time keeps any city from being stacked twice, so each city is popped once and each row is scanned once over the whole run — the quadratic total comes from the adjacency-matrix representation itself, where reading one city's neighbors is a linear scan.

Because `isConnected[i][i] == 1` and the matrix is symmetric, self-loops are harmless (the city is already visited) and every edge is seen from both endpoints without double counting — components are identified by visitation, not by edge tallies. Memory is the visited array plus the stack, which holds at most all cities, with no extra graph structure built.

**Complexity:** `O(n^2)` time, `O(n)` space.
