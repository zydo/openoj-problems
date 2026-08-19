# Solutions — Shortest Leap Route

## BFS on an implicit graph with value buckets

Nothing has to be built explicitly: the array already describes a graph in which
vertex `i` borders `i - 1`, `i + 1`, and every other index carrying the value
`nums[i]`. All leaps cost one, so a breadth-first sweep out of vertex `0` labels
each index with its true minimum, and the label on the last index is the answer.
One preliminary pass fills a hash map from value to the list of indices holding
it, which is what makes the equal-value neighbours cheap to list.

The sweep keeps a `dist` array seeded with `-1`, which serves as the unvisited
marker as well as the label store; index `0` starts at `0`. Popping `i` yields
the neighbour list `[i - 1, i + 1]` concatenated with the bucket for `nums[i]`,
and every in-bounds neighbour still marked `-1` takes the label `dist[i] + 1`
and joins the queue. The moment the final index is labelled the sweep can stop,
because breadth-first order guarantees no shorter route exists.

Emptying a bucket the first time it is used is what keeps the running time
linear. Expanding `i` hands the same label to every index sharing its value, so
each of those is visited from then on and the bucket has nothing left to offer;
leaving it in place would let an array of `5 * 10^4` equal values re-walk a
length-`n` list from every vertex. With the clear, each index is listed as a
same-value neighbour at most once, so the total work is proportional to the
array length. A one-element array returns `0` without entering the loop, and the
bounds test discards the neighbours `-1` and `n` at the two ends.

**Complexity:** `O(n)` time, `O(n)` space.
