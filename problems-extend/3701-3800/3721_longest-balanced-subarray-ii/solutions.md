# Solutions — Longest Balanced Subarray II

## Sweep the left end over a segment tree of right ends

Fix a left endpoint `l` and slide the right endpoint `r` outward. The value
`balance(l, r)` — the number of distinct odd values minus the number of
distinct even values in `[l, r]` — changes by `-1`, `0`, or `+1` at every
step, because extending by one element alters exactly one parity's distinct
set by at most one. The window `[l, r]` is balanced exactly when
`balance(l, r) = 0`, so for a fixed `l` the goal is the largest `r` whose
balance is zero.

Hold all right ends in one lazy segment tree whose leaf `r` stores
`balance(l, r)` for the current `l`. Moving `l` to `l+1` removes `nums[l]`;
a value `v` with sign `+1` (odd) or `-1` (even) stops contributing to every
window that has not yet reached its next occurrence, so the tree
subtracts `sign(v)` on the range `[l, next[l] - 1]`. After each move the
tree answers "rightmost `r` with value 0": because adjacent leaves differ
by at most 1, a node whose minimum and maximum straddle 0 must contain an
exact 0, which makes the descent sound. Seeding the tree from each value's
first occurrence fixes `balance(0, r)` for every `r` in one pass.

The sweep touches each position once, and each update and query costs
`O(log n)`, so the whole array is processed in `O(n log n)`.

**Complexity:** `O(n log n)` time, `O(n)` space.
