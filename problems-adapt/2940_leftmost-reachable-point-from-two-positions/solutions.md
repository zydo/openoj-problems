# Solutions — Leftmost Reachable Point From Two Positions

## Segment-tree first-above-threshold descent

Steps run strictly rightward and strictly upward, so with the query's
endpoints ordered `a <= b` two cases settle instantly. If `a == b` the
walkers already share an index, and if `heights[a] < heights[b]` the walker
at `a` climbs straight to `b` — answer `b` both times (Example 1's `[4,0]`
query, ordered to `[0,4]`, resolves this way at `4`). Otherwise `b` itself
is the later index, so nothing at or left of `b` can serve both, and each
walker needs the first index `t > b` with `heights[t] > max(heights[a],
heights[b])` — the taller of the two buildings sets the bar both must clear.
If no such `t` exists the walkers never meet and the answer is `-1`.

Answering "first index in `(b, n)` above a threshold" once per query is the
data-structure core. Build a max segment tree over `heights`, padded to a
power of two, and give it a descend query: prune any node whose interval
misses the query range or whose subtree maximum sits at or below the
threshold — no answer can live there — and otherwise recurse into the left
child first, falling through to the right child only when the left fails.
Trying the left child first makes the first leaf reached the leftmost
qualifying index automatically, so the descent order *is* the answer's
position rule.

Each query walks the two boundary paths of its range; every failed detour is
pruned in constant time by a node maximum, and the one successful tail of
the search drops straight down a single root-to-leaf path. Construction is
linear and queries are logarithmic, so fifty thousand of them over fifty
thousand buildings is routine.

**Complexity:** `O(n + q log n)` time, `O(n)` space.
