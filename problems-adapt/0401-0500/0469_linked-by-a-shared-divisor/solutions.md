# Solutions — Linked by a Shared Divisor

## Union-find over a divisor sieve

Writing the edges out is a dead end — as many as quadratically many pairs can
qualify. But two labels `x` and `y` are adjacent exactly when some divisor
`z > threshold` divides them both, so for every candidate `z` running from
`threshold + 1` up to `n`, all of `z`'s multiples belong to a single connected
piece by way of `z`. Merging `z` with each of `2z, 3z, …` in a disjoint-set
union therefore captures the connectivity without ever materializing a single
edge; afterwards a query is just a root comparison.

The merging phase is a sieve in disguise: the number of `union` calls totals
`n/(threshold+1) + n/(threshold+2) + …`, which stays within `O(n log n)`.
Path halving inside `find` keeps each of these operations effectively
constant, and one extra prune keeps the sieve from repeating work — when `z`
has already been absorbed into some smaller representative, that smaller
divisor's pass merged `z`'s multiples too, so `z`'s inner loop is skipped.

The borders behave as they should. With `threshold = 0`, the `z = 1` pass
merges 1 with every label, so every query comes back `true` (the skip guard
exempts `z = 1`, so that pass always runs). For any positive `threshold`,
label 1 has no qualifying divisor and stays alone — in Example 1
(`n = 8, threshold = 3`) the only surviving link is `4--8`, since 4 is the one
divisor above 3 that divides two different labels.

**Complexity:** `O(n log n + q)` time, `O(n)` space.
