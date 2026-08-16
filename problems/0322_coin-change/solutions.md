# Solutions — Coin Change

## Bottom-Up Unbounded-Knapsack DP

The minimum coin count for an amount decomposes cleanly: if the last coin used is `c`, the rest of the amount `a - c` must itself be optimally made, so `dp[a] = min(dp[a - c] + 1)` over every coin `c ≤ a`. Because each coin may be used any number of times, `dp` is simply filled for every amount from 1 up to the target, each entry trying every coin — the classic unbounded knapsack laid out iteratively.

`dp[0]` is 0 (zero coins make zero) and every other slot starts at infinity, which doubles as the "unreachable" marker. If no coin fits an amount, the entry stays infinite; the sentinel propagates naturally through later amounts that would have built on it, because `inf + 1` is still `inf` and never wins a minimum. At the end `dp[amount]` is returned, or `-1` if it is still infinite — the no-solution case like `coins = [2]`, `amount = 3`.

The loop order makes the algorithm correct by construction: amounts are processed smallest first, so when amount `a` consults `dp[a - c]`, that entry is already final. Greedy largest-coin-first would be wrong for arbitrary denominations (a coin set like `[1, 3, 4]` with amount 6 tempts `4 + 1 + 1` = three coins over the optimal `3 + 3` = two), and DP sidesteps that trap entirely.

Edge cases: `amount = 0` returns 0 immediately from the initialization; coins larger than the current amount are skipped by the `c <= a` guard. With at most 12 coins and amount at most 10⁴, the double loop performs at most ~1.2 · 10⁵ relaxations.

**Complexity:** `O(amount · |coins|)` time, `O(amount)` space.
