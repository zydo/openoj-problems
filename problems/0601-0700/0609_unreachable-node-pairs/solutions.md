# Solutions — Unreachable Node Pairs

## Union-Find and component-size complement counting

In an undirected graph, mutual reachability is an equivalence relation
whose classes are the connected components — so a pair is stranded
exactly when its two nodes sit in different components. Counting per
node (a node in a component of size `s` misses out on `n - s` partners)
charges every pair twice, which invites the complement form instead:
from all `C(n, 2)` pairs subtract the within-component pairs
`Σ C(s_i, 2)`, and what remains counts each unreachable pair once.

Components come from a union-find run over the edge list. Union by size
keeps the trees shallow — the smaller component hangs beneath the
larger's root — and `find` is iterative with path compression: one walk
up locates the root, a second rewires every node on the path directly to
it, so later finds cost almost nothing and no recursion stack exists.
Each union merges the two endpoints' roots and folds one `size` entry
into the other, leaving `size[root]` equal to the component's node
count.

After the merges, a component is counted exactly once, at its root
(`find(v) == v`); adding `size[v] * (size[v] - 1) / 2` over those roots
yields the reachable pairs, subtracted from `n * (n - 1) / 2`. The
boundary behaviour is worth naming: an edge-free input leaves every node
its own root and the answer is `C(n, 2)`, while one component covering
everything leaves the answer 0 — the cycle of Example 1. The pair count
approaches `5 * 10^9` at `n = 10^5`, so fixed-width languages need
64-bit arithmetic (Python's integers are unbounded).

**Complexity:** `O(E α(n))` time, `O(n)` space.
