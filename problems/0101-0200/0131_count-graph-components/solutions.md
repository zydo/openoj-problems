# Solutions — Count Graph Components

## dfs

Count components the literal way: first materialize the undirected adjacency
list — each edge appended at both ends, so traversal can cross it in either
direction — then walk the node range `0..n-1`. Whenever the sweep meets a
node nobody has claimed, that node opens a fresh component: add one to the
count and flood everything reachable from it. Each flood swallows exactly
one component whole, and every node belongs to exactly one flood, so the
number of floods is the component count.

The flood runs as an explicit-stack DFS, immune to recursion-depth limits.
Popping a node walks its adjacency list, and any neighbor not yet marked is
marked and pushed at once. Marking on push rather than on pop is what keeps
a node from ever sitting twice on the stack, so each node is popped once and
each adjacency entry is read once over the entire run — linear work in the
edge-list representation, where one node's list holds only its actual edges
instead of a full matrix row.

**Complexity:** `O(n + E)` time, `O(n + E)` space for the adjacency list,
visited array, and a stack that peaks at all `n` nodes.

## union_find

Start from `n` singleton components, `count` at `n`, and process the edge
list. An edge whose endpoints resolve to different roots merges two
components into one, so the count drops by one; an edge whose endpoints
already share a root — a redundant link inside a component — leaves
everything untouched. After the last edge, `count` is the answer and the
graph never had to be built as a structure at all.

The parent array is the disjoint set union. `find` follows parent pointers
to a root while path-halving (`parent[x] = parent[parent[x]]`) splices each
second node on the walk directly beneath its grandparent, so the trees
flatten as a side effect of being searched and later finds get cheaper.
After the two roots are confirmed distinct, `parent[ra] = rb` hangs one tree
under the other.

That bookkeeping style is what makes union-find the tighter fit here: no
adjacency list, no traversal stack, and awkward inputs are absorbed silently
— self-loops and repeated edges simply find both endpoints under one root.
Boundary cases need no code: with no edge joining them, isolated nodes stay
their own components (nodes 5 and 6 in the first example), and a lone edge
like `[2,3]` among `n = 4` nodes leaves the answer at three.

**Complexity:** `O(E · α(n))` time — effectively linear under compression —
with `O(n)` space.
