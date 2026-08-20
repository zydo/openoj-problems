# Solutions — Minimum-Cost Cyclic Ordering

## Bitmask dynamic programming

Rotation leaves the cyclic sum alone, so every optimal ordering has a
rotation beginning with 0 — and that rotation is the lexicographically
smallest among its own. Pinning `perm[0] = 0` costs nothing. What survives is
a Traveling-Salesman-shaped search: emit the ordering left to right, paying
`|last - nums[nxt]|` whenever `nxt` is appended, and `|last - nums[0]|` when
the cycle closes back onto the pinned first entry.

The DP table `f[mask][last]` stores the least additional cost to emit every
value missing from `mask`, given `mask` placed and `last` emitted, closing
edge included. At `mask = full` the table holds `|last - nums[0]|` — the
closing edge alone; earlier masks choose the cheapest unplaced `nxt`, adding
`|last - nums[nxt]|` to `f` of the grown mask. Sweeping masks from full
downward means each `f[mask | bit]` is final before it is read, and the answer
sits in `f[1 << 0][0]`.

Reconstruction of the lexicographically smallest optimum is a greedy walk
over the finished table: from `mask = {0}`, repeatedly take the smallest
`nxt` whose edge cost plus `f` of the next state reproduces `f` of the
current one. Every `nxt` passing that test preserves optimality of the
remainder, so preferring the smallest at each step is both optimal and
lexicographically minimal. With n <= 14, the 2^n × n table and its n²
transitions are tiny.

**Complexity:** `O(2ⁿ · n²)` time, `O(2ⁿ · n)` space.
