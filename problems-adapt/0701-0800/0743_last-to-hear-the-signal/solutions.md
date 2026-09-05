# Solutions — Last To Hear The Signal

Three standard shortest-path engines, each reading off the same quantity: the
moment the flood finishes is the largest shortest distance from `k`, and a node
with no route from `k` turns the answer into `-1`.

## Floyd-Warshall

Solve every source at once instead of one. The graph becomes an
`(n+1)×(n+1)` matrix — zero on the diagonal, infinity elsewhere, and the
smaller weight if a pair repeats — and a triple loop offers every node `m` as
a waypoint, relaxing `d[i][j]` against `d[i][m] + d[m][j]`. Once the outer
loop has admitted each waypoint in turn, `d[i][j]` is the true distance for
every pair simultaneously.

All-pairs breadth is wasted effort for one source but costs nothing here: with
`n <= 100` the cubic loop is about a million comparisons, and the guards keep
`INF + INF` from overflowing the sentinel where no float infinity exists. Row
`k` then holds the answer: any infinity among `d[k][1..n]` means someone never
heard the signal (`-1`), otherwise the row's maximum is the finishing moment.

**Complexity:** `O(n³)` time, `O(n²)` space.

## Bellman-Ford

This one wants neither a queue nor an adjacency structure — the flat edge list
is enough. Distances start infinite except `dist[k] = 0`; each round scans
every edge `(u, v, w)` and tightens `dist[v]` where `dist[u] + w` is smaller.
Relaxations inside one round build on each other, so a round extends the known
distances by at least one edge, and after `n - 1` rounds every shortest route
of at most `n - 1` edges has been assembled — plain in-place relaxation, with
no frozen copy of the previous round.

Two small conveniences fall out. A round that tightens nothing certifies the
table is finished, so the loop can stop early; and testing `dist[u]` for
finiteness before adding `w` keeps the infinity sentinel out of the
arithmetic, which matters in the languages whose integers wrap. The reading
afterwards is the familiar one: an infinite entry names an unreached node
(`-1`), else the answer is the table's maximum.

At `n <= 100` the `O(V·E)` cost is a few tens of thousands of operations — and
unlike Dijkstra, the scan would survive weights going negative.

**Complexity:** `O(V·E)` time, `O(V)` space.

## Dijkstra with a Min-Heap

A message crossing a link of weight `w` is a directed edge of length `w`, so
the arrival moment at each node is its single-source shortest distance from
`k`, and the finishing moment is the maximum of those distances over all `n`
nodes. The heap-driven form of Dijkstra computes them all at once: the heap
holds `(distance, node)` candidates, pops the nearest unsettled node first,
and a node is finalized on its first pop.

Stale entries are simply skipped — a pop that finds its node already settled
does nothing, and settled neighbors are never pushed again. Non-negative
weights are what make the first pop provably final, which licenses settling a
node immediately and never looking back.

If fewer than `n` nodes were settled, the flood missed one and the answer is
`-1`; otherwise it is the largest settled distance. With `V` nodes and `E`
edges, the adjacency list costs a linear pass and every edge triggers at most
one heap push, so heap work dominates.

**Complexity:** `O(E log E)` time, `O(V + E)` space.
