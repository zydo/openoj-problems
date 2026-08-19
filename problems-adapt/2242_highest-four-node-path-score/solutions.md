# Solutions — Highest Four-Node Path Score

## Enumerate the middle edge with top-3 neighbours

A four-node path `x, a, b, y` stands on three edges, and the one joining the
two inner nodes `(a, b)` is the handle worth grabbing: iterate over every edge
of the graph as the candidate middle, and what is left of the task is choosing
`x` among `a`'s neighbours and `y` among `b`'s neighbours so that
`scores[x] + scores[y]` is as large as it can be with all four nodes distinct.
Trying every neighbour pair would blow up quadratically in the degree, but
only the richest neighbours can ever be part of an optimal answer.

Why **three** neighbours per node are always sufficient: when the code picks
`x` from `a`'s best list, at most two entries of that list are forbidden —
`b`, the other end of the middle edge, and whichever node was chosen as `y` —
so the third entry is always legal. The same counting defends `y`'s list. So
the preprocessing step sorts each adjacency list by descending node value and
keeps the first three; afterwards each edge costs at most `3 × 3 = 9` probes,
each skipping the combinations where `x == b`, `y == a`, or `x == y`, on top of
the fixed `scores[a] + scores[b]`.

A sparse graph may leave `best` untouched at its starting value `-1`, which is
precisely the sentinel the statement asks for — the star plus detached pair of
Example 2 never produces a legal combination. On Example 1, sorting node 2's
neighbours `[0, 1, 3, 4]` by value gives `[3, 0, 1]` (values 9, 7, 3); trying
the middle edge `(1, 2)` then pairs `x = 3` with `y = 3`-forbidden… and the
edge `(0, 1)` with base `7 + 3` eventually combines with `x = 2`, `y = 3` for
`7 + 3 + 11 + 9 = 30`.

Sorting every adjacency list dominates the running time; the enumeration after
that is constant work per edge, and beyond the adjacency storage itself only
the truncated top-3 lists are kept.

**Complexity:** `O(E log E)` time, `O(n + E)` space.
