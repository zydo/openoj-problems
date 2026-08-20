# Solutions — Cheapest Split of Work into Rounds

## Partition DP with a Running Round Maximum

A schedule is pinned down entirely by where its `d − 1` cuts fall, so the
task is to cut the weight list into `d` consecutive non-empty runs while
paying as little as possible for the sum of run maxima. Order is fixed, so a
prefix DP covers it: `dp[i][j]` holds the cheapest total for the first `j`
items across `i` rounds, anchored at `dp[0][0] = 0` with infinity standing
for unreachable states.

The transition closes the final round over items `k .. j` for every legal
`k`, adding that stretch's maximum to the already-optimal `dp[i−1][k−1]`.
Computing each stretch maximum naively costs a scan per candidate, but
walking `k` downward from `j` carries a single running maximum: pushing the
round's start one item left folds exactly one more weight into it, so every
cut candidate is priced in constant time. States that cannot exist — too
few items for the rounds used — stay at infinity and never leak into the
answer.

The edges behave: with fewer items than rounds there is no way to keep every
round non-empty, so `-1` comes back immediately; starting the inner sweep at
one item per round enforces non-emptiness throughout; and `d = 1` collapses
to the maximum of the whole list. Weights are never negative, though the
running maximum would not care about their signs in any case — only the
direction of the `k` sweep matters.

On the first example, `weights = [7,4,3,2,2,5]` with `d = 2`, the 7 pins the
first round and the 5 pins the second no matter where the single cut falls,
so every split costs `7 + 5 = 12` and the DP returns 12.

**Complexity:** `O(d · n²)` time, `O(d · n)` space.
