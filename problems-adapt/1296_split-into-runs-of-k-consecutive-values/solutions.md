# Solutions — Split Into Runs of k Consecutive Values

## Greedy Consumption from the Smallest Value

Take the smallest value `v` that still has copies left. Every size-`k` group
holding a copy of `v` is forced to be `{v, v+1, …, v+k−1}`: nothing smaller
remains, so a group containing `v` can only reach upward. And because each
of the `counts[v]` copies of `v` lives in a different group, exactly
`counts[v]` groups must start at `v`. Should any of `v+1, …, v+k−1` have
fewer than `counts[v]` copies remaining, no split exists. Each such forced
commitment is safe to make — no alternative arrangement could ever do better
— so the greedy is exhaustive despite making choices.

The code keeps a `Counter`, sweeps the distinct values upward, skips values
whose counts earlier runs have already drained, and for each value still
present either charges `need` copies across the next `k` values or reports
failure. Smallest-first order guarantees a charged value is always the
current minimum, which is exactly the precondition the argument needs.

Two cheap checks close the corners: a length not divisible by `k` fails
before any counting, and the same `< need` comparison that spots gaps also
catches counts driven below zero.

Every inner iteration either fails or retires at least one element for good,
so after the one sort the sweep is linear in `n`.

**Complexity:** `O(n log n)` time, `O(n)` space.
