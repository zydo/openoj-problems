# Solutions — House Robber

## Rolling Two-Variable DP

At every house the robber faces exactly two choices — rob it or skip it — and the constraint only couples adjacent houses. So the best loot achievable through house `i` depends solely on the best through house `i-1` (skip, keep that value) and the best through house `i-2` plus this house's money (rob). This is the recurrence `best(i) = max(best(i-1), best(i-2) + nums[i])`.

The implementation compresses the DP table to two rolling variables: `cur` holds `best(i-1)` and `prev` holds `best(i-2)` when the loop arrives at house `i`. The simultaneous tuple assignment `prev, cur = cur, max(cur, prev + x)` advances both values in one step without a temporary array, which is what makes the space constant.

Because the recurrence only looks two steps back, a single left-to-right pass computes the global optimum — no recursion or memoization table is needed. Both variables start at 0, which correctly represents "no houses robbed yet," so a one-house array returns its own value and any prefix of the street is handled uniformly.

**Complexity:** `O(n)` time, `O(1)` space.
