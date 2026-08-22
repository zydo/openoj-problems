# Solutions — Unreachable Node Pairs

Both methods pin the answer to the same fact: mutual reachability in an
undirected graph is an equivalence whose classes are the connected
components, so of the `C(n, 2)` pairs of distinct nodes exactly the
within-component ones `Σ C(s_i, 2)` can reach each other, and the
difference counts the stranded pairs. The BFS flood walks that
equivalence out directly — materialise the adjacency, flood one component
per unvisited seed, read its size off the frontier array. The union-find
run never builds the graph at all: it grows the components edge by edge
through an incremental merge structure and pays an almost-constant
`α(n)` per edge, keeping its working memory at `O(n)`.

## Iterative BFS component enumeration

The components are sitting in the graph waiting to be walked out, and a
breadth-first flood collects each one whole: start at any
still-unvisited node, everything the frontier reaches is that node's
component, and nothing outside it ever will be. The code first
materialises the adjacency — each edge is recorded at both endpoints,
since it is walkable in both directions — then scans the nodes `0` to
`n - 1`; every unvisited node met there seeds one flood, so each
component is discovered exactly once, at its first-scanned member.

The frontier lives in a flat array with a read cursor: appending is the
push, advancing the cursor the pop, and the entries beyond the cursor are
the frontier still owed a look at their neighbours. A node is marked
visited when it is enqueued — not when it is dequeued — which is what
keeps every node in the array exactly once even though many of its
neighbours may offer it. The walk is iterative end to end on purpose: a
path-shaped component at `n = 10^5` would nest 10^5 recursive frames,
and the fixed-stack languages refuse (Python raises `RecursionError`,
Java throws `StackOverflowError`); the cursor replaces the stack.

By the time the cursor catches the tail, the array holds precisely the
seed's component, so its length is the size `s` — the flood counts while
it walks, no second pass needed. `C(s, 2)` of the pairs among those
nodes are mutually reachable; summing over all floods and subtracting
from `C(n, 2)` leaves every unreachable pair counted exactly once. An
edge-free input floods `n` components of size 1 and returns `C(n, 2)`,
while the all-ones cycle of Example 1 floods once and returns 0. The
counts approach `5 * 10^9` at `n = 10^5`, so the fixed-width languages
accumulate in 64-bit arithmetic (Python's integers are unbounded).

**Complexity:** `O(n + E)` time, `O(n + E)` space.

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
