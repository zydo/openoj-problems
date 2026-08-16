# Solutions — Minimum Number of Coins to be Added

## Greedy Reach Extension

Maintain the invariant that every value in `[1, reach]` is obtainable as a subsequence sum, starting from `reach = 0`. Process the coins in ascending order. A coin of value `c` can be absorbed without breaking the invariant only if `c <= reach + 1`: then pairing `c` with each already-obtainable sum covers `[1, reach] U [c, reach + c]`, which is contiguous exactly when `c <= reach + 1`, and `reach` grows to `reach + c`. If the next coin exceeds `reach + 1` (or no coins remain), the value `reach + 1` is stranded — no subset of the remaining, even larger coins can produce it — so a new coin worth exactly `reach + 1` must be added, which is also the best single addition since it plugs the smallest hole and doubles coverage to `2 * reach + 1`.

Each step of the loop therefore either consumes one input coin or performs one addition, and every addition at least doubles `reach`, so at most a logarithmic number of coins is ever added regardless of how large `target` is. The loop terminates once `reach >= target` — every value in `[1, target]` is then covered — and the count of additions is returned.

Note that duplicates are fine (`[1, 1, 1]` extends coverage one value at a time) and that adding a coin larger than the gap, or smaller than needed, can never outperform filling the gap itself, which is the exchange argument behind the greedy choice.

**Complexity:** `O(m log m)` time, `O(m)` space, where `m` is the number of coins.
