# Solutions — Minimum Weighted Subgraph With the Required Paths II

## Binary Lifting LCA with Weighted Distances

The minimal subtree connecting three nodes a, b, c is the union of the three pairwise paths between them, and a useful counting identity holds: every edge of that union lies on exactly two of the three paths (edges on the Steiner-like core lie on all pairwise routes, counted twice by symmetry of the formula). Hence its total weight is (d(a, b) + d(b, c) + d(c, a)) / 2, and the whole problem reduces to answering pairwise tree distances quickly.

Distances come from the standard root-distance trick: root the tree at node 0, compute each node's depth and weighted distance f(x) from the root in one DFS, and then d(x, y) = f(x) + f(y) − 2·f(lca(x, y)). The LCA is answered in O(log n) with a binary lifting table up[k][v] = the 2^k-th ancestor of v, built once by repeated doubling of the parent array; a query first lifts the deeper node to a common depth using the binary representation of the depth difference, then jumps both nodes upward together while their lifted ancestors differ.

The DFS is iterative so a 10^5-node path cannot overflow the call stack, and the root's parent pointers point to the root itself so lifts never run off the table. Since the sum of the three distances is always even, integer division by 2 is exact; the three query nodes are pairwise distinct per the constraints, and up to 10^5 queries amortize the O(n log n) preprocessing comfortably.

**Complexity:** `O((n + q) log n)` time, `O(n log n)` space.
