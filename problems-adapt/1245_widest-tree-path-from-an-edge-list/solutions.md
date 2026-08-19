# Solutions — Widest Tree Path From an Edge List

## Two breadth-first sweeps

The workhorse is an old tree theorem: from any starting node, the farthest
node `B` is always an endpoint of some longest path. Whatever the layout,
the trip out of the start must descend at least as far as the widest path's
own extent — otherwise that path could be rerouted through the start and
made longer, contradicting its maximality. Measuring from `B` therefore
reads the width of the whole tree directly: the farthest node `C` from `B`
lies at exactly that distance.

Both measurements are breadth-first searches. A tree connects any two nodes
by a unique route, so BFS layer counts are honest path lengths, and the
queue order means the first time a node is reached is via a shortest route.
Each search notes its farthest node while running rather than scanning the
distance table afterwards. The first pass starts anywhere — node 0 is as
good as any — and hands its winner to the second pass, whose returned
distance is the answer.

![BFS from node 0 finds endpoint 3; BFS from 3 measures the width along 3-1-0-5-2.](figures/solution-two-sweeps.svg)

Iterating with an explicit queue rather than recursion is deliberate:
path-shaped trees ten thousand nodes deep would otherwise exhaust the call
stack. Unseen nodes carry distance `-1`, which doubles as the visited mark.
The degenerate input — one node, no edges — is settled before any search
runs: there is no edge to cross, so the answer is 0. Example 2 also shows
why side branches never distract the search: node 4 hangs one step off the
corridor, and both sweeps step past it without extending the record.

**Complexity:** `O(n)` time, `O(n)` space.
