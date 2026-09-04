# Solutions — Best Time to Buy and Sell Stock

## One-Pass Minimum Tracking

The key observation is that the best profit achievable by selling on a given day is that day's price minus the cheapest price seen on any day at or before it. So instead of testing every buy/sell pair, a single left-to-right sweep can carry the running minimum price and, on each day, consider exactly one candidate: sell today against the cheapest buy so far.

The code maintains `min_price`, seeded with the first price, and `best`, seeded with 0 — the profit of never trading. For each price it first checks whether the price is a new minimum and updates `min_price`; otherwise it compares `price - min_price` against `best` and keeps the larger. The `elif` structure is safe because when a price is a new minimum, `price - min_price` is non-positive and can never beat `best`, which only ever holds non-negative values.

Edge cases fall out naturally: a strictly decreasing price list never triggers a profit update, so the answer stays 0; a single-element array returns 0 since no later selling day exists; and the buy-before-sell ordering is enforced automatically because the minimum is only ever drawn from the current or earlier days.

**Complexity:** `O(n)` time, `O(1)` space.
