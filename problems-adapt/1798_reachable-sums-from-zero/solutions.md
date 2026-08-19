# Solutions — Reachable Sums From Zero

## Greedy Interval Growth on Sorted Coins

One invariant carries the whole solution: maintain the largest `reachable`
such that every integer in `[0, reachable]` is a subset sum. The empty
collection pins the interval at `[0, 0]` to start. When the smallest
unprocessed coin `v` obeys `v <= reachable + 1`, the interval stretches to
`reachable + v`: targets up to `reachable` were already covered, and any target
in `(reachable, reachable + v]` is `v` plus a remainder from `[0, reachable]`.
The stretched interval is again gap-free, so the invariant survives each step.

Sorting first guarantees every step tests the cheapest coin remaining. The
scan walks the sorted array, widening while the condition holds; at the first
coin worth more than `reachable + 1` it halts. Everything left is at least as
valuable, so any non-empty subset of the leftovers sums to at least
`reachable + 2`, while the coins already handled only span `[0, reachable]` —
the hole at `reachable + 1` is permanent.

The returned count is `reachable + 1`, the size of the run `0..reachable`.
Duplicates need no special casing (each copy is just another widening step),
a smallest coin of 1 immediately lifts the count to 2, and an input whose
cheapest coin is 2 or more leaves the answer at 1, the lone reachable zero.

**Complexity:** `O(n log n)` time, `O(n)` space.
