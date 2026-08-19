# Solutions — Steps to Drain a Rotating Queue

## Fenwick Tree over Positions

Values exit strictly in increasing order, and from one exit to the next the
front of the queue only advances forward around a cycle. Releasing the
next-smallest value therefore costs one step for every survivor standing on
the cyclic arc from the current front to that value, plus the removal step
itself. The counting problem is that survivors vanish as you go — a Fenwick
tree over the original positions handles it: slot `i` reads 1 while the value
at index `i - 1` is still present, so prefix sums give the survivor count of
any range.

Visit the positions in value order. For a target at slot `pos` with the
front at `cur`, add the survivors from `cur` to `pos` — as `[cur, n]` plus
`[1, pos]` when the arc wraps — then zero the target's slot. After the
removal, the new front is the first survivor after `pos`: `prefix(pos)`
survivors sit at or before it, so its successor's rank among the `remaining`
survivors is `(prefix(pos) mod remaining) + 1`, and a binary descent through
the tree lifts that rank to a slot without touching the array.

No rotation is ever materialized; every step is counted, not performed, so
each removal costs `O(log n)` tree work on top of the initial sort. The
`remaining > 0` guard skips the successor lookup once the last value is gone.

**Complexity:** `O(n log n)` time, `O(n)` space.
