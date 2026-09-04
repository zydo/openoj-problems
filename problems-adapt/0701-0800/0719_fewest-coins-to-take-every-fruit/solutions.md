# Solutions — Fewest Coins to Take Every Fruit

## Sliding-window DP with a monotonic deque

Let `dp[i]` be the cheapest way to own exactly the first `i` fruits, and
reason about the last purchase. If that purchase is fruit `l`, its offer
grants `l + 1` through `2l` free, so it can round out prefix `i` exactly
when `l <= i <= 2l` — that is, `ceil(i/2) <= l <= i`. The recurrence is
`dp[i] = min(dp[l - 1] + prices[l])` over that window: pay for `l` on top
of the cheapest solution that stops just before it. Keeping `l = i` in the
window is what makes "buy a fruit you could take free" available —
Example 2 leans on it, paying 1 for fruit 2 although fruit 1's offer
already grants it, because the fresh offer reaches fruit 4 for far less
than fruit 3's price of 9.

Scanning the window naively is quadratic, but the window
`[ceil(i/2), i]` only slides forward as `i` grows, which is exactly the
shape a monotonic deque serves. Sweep `i` upward: push `i` as a fresh
candidate with value `dp[i - 1] + prices[i]`, first popping from the back
every stored candidate whose value is at least as large (it is older _and_
no cheaper, so it can never win a future minimum); then pop from the front
any candidate whose index has slipped below `ceil(i/2)`; the front now
holds the window minimum, and `dp[i]` takes it directly.

Every index enters and leaves the deque at most once, so the sweep is
linear overall. `dp[0] = 0` seeds the base — with a single fruit you just
buy it — and `dp[n]` answers for the whole row, as in Example 3, where
purchases at 1, 2 and 4 chain three offers to sweep up all eight fruits
for 3 coins.

**Complexity:** `O(n)` time, `O(n)` space.
