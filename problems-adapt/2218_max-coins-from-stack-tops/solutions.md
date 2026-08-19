# Solutions — Max Coins From Stack Tops

## Grouped knapsack with prefix sums

A stack surrenders only a prefix: taking `t` moves from a stack means its
top `t` coins, worth that stack's `t`-th prefix sum, because a coin can be
taken only after everything above it. The whole choice is therefore a
split of the budget `k` among stacks — a grouped knapsack where `dp[j]`
holds the best total collectible with exactly `j` moves from the stacks
seen so far. Meeting a new stack relaxes every entry:
`ndp[j] = max over t of dp[j - t] + prefix[t]`, with `t` from 0 (leave the
stack alone) to `min(stack length, j)` — the cap keeps `t` inside both
what the stack holds and what the budget allows.

The inner maximum is computed directly rather than through a sliding
window, which the constraints forgive: per stack the double loop costs
`k · min(len_i, k)`, and since `Σ min(len_i, k)` is at most the total coin
count `s <= 2000`, the whole sweep stays within `k · s` inner steps. A
fresh `ndp` row per stack keeps transitions reading the previous stack's
state — the standard grouped-item discipline. Coin values are positive, so
`dp[j]` for `j < k` still propagates useful optima, and the answer is read
at `dp[k]`.

On `[[8,3],[6,1,5],[2]]` with `k = 4`: the middle stack's prefix sums are
6, 7, 12, and the best split spends three moves there (12) plus one on the
first stack's top (8) — the 20 the sweep reports.

**Complexity:** `O(k · s)` time, `O(k)` space, where `s` is the total
number of coins.
