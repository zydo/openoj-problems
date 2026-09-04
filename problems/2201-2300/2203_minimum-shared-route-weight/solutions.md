# Solutions — Minimum Shared Route Weight

## Three Dijkstra sweeps, one on the reversed graph

Whatever set of edges wins, delete edges until both routes are simple
paths: they leave `src1` and `src2`, and near `dest` they fuse into one
shared tail. The fusion point is forced by exchange — where the two routes
cross without merging, re-splicing them at the crossing keeps both routes
intact and drops the weight of everything skipped. So a cheapest set is
described by a single meeting node `v`: the answer is
`min over v of dist(src1, v) + dist(src2, v) + dist(v, dest)`. Adding the
three independently-computed distances charges the shared tail once,
because each edge after `v` appears in exactly one of the three terms.

The third distance hides the practical problem: `dist(v, dest)` for every
`v` at once. Reversing every edge `u -> v` into `v -> u` turns that
all-pairs question into a single Dijkstra rooted at `dest`. So the code
builds a forward and a reverse adjacency list in one pass, runs Dijkstra
from `src1` and `src2` on the forward graph and from `dest` on the reverse
graph, and takes the minimum of the three-way sum. Weights are strictly
positive, which is what makes the lazy-deletion heap correct: a popped
entry whose distance is stale is simply skipped.

On the six-node example the meeting node is `1`: from `src1 = 0` it costs
`3 + 2` via `0 -> 2 -> 1`, from `src2 = 1` it costs `0`, and the shared
tail `1 -> 4 -> 5` costs `3 + 4` — twelve in total, one better than
letting `src2` ride `1 -> 0 -> 5` (4 + 9) while `src1` takes `0 -> 5`.

`-1` falls out of the same sweep. Nodes the reverse search never reaches
(`dd[v] == inf`) cannot appear in any valid set and are excluded; a node
that reaches `dest`'s side but is unreachable from a source contributes an
infinite term, caught by an explicit infinity check, and an empty candidate
list — an edge-free graph — triggers the same `-1` through `min`'s default.
Each Dijkstra costs `O((n + E) log n)`; the final sweep is `O(n)`.

**Complexity:** `O((n + E) log n)` time, `O(n + E)` space.
