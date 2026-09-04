# Solutions — Stock Trading, Two Sales

Both solutions turn on the same fact: two sales that never overlap cut the
days into a left half and a right half, so the search is really for the best
place to cut. The split arrays make that literal — tabulate the best single
sale inside every prefix and every suffix, and each cut costs one lookup.
The four-state wealth machine folds the same search into one forward walk
that tracks wealth, not trades, through four states and carries no tables
at all.

## Forward/backward split arrays

Any legal plan slices the days at some boundary: the first sale closes by
it, the second opens at or after it. So tabulate, for every day `i`, the
profit of the best single sale inside `prices[0..i]` — call it
`best_prefix[i]` — and likewise `best_suffix[i]` for `prices[i..n-1]`. The
answer is the maximum of `best_prefix[i] + best_suffix[i]` over all splits.
Each table is one half-line scan: forward, a running minimum buys and each
day's price sells; backward, each day's price buys and a running maximum
sells. Both scans are the one-trade algorithm run from opposite ends.

The boundary's accounting needs care. A first sale ending on day `i` may
share the day with the second purchase — selling and rebuying at one price
is financially the same as holding, so such a plan never beats a strictly
separated one and nothing is overcounted. And because both tables floor at
`0` (a same-day buy-and-sell earns nothing), an unused side of a split is
exactly Hint 3's zero-profit placeholder: plans that trade once — split at
`n-1`, where `best_suffix` is `0` — or not at all fall out without any
transaction count.

On `[1, 4, 2, 6, 3, 8]` the split at day 3 pairs `best_prefix[3] = 5`
(buy 1, sell 6) with `best_suffix[3] = 5` (buy 3, sell 8) for `10`; on the
sagging `[9, 7, 7, 2]` every entry of both tables is `0`. The price of the
decomposition is storage: two full arrays, one per direction.

**Complexity:** `O(n)` time, `O(n)` space.

## Four-state wealth machine

Track wealth, not trades: after each day you sit in one of four states —
`buy1` after paying for the first share, `sell1` after closing the first
trade, `buy2` after paying for the second, `sell2` after closing both. One
sweep over the days refreshes all four, and each refresh is a max between
holding yesterday's value and moving into the state today, with a purchase
subtracting the day's price and a sale adding it.

The updates read, in order, `buy1 = max(buy1, -price)` (the cheapest first
entry so far), `sell1 = max(sell1, buy1 + price)`, `buy2 = max(buy2, sell1 -
price)`, `sell2 = max(sell2, buy2 + price)`. Each line consumes the lines
above it already refreshed for today, which quietly allows buying and
selling on the same day — and that is load-bearing, not a bug: a same-day
round trip costs nothing, so it can impersonate an unused trade. No
transaction-count bookkeeping is needed, and `sell2 >= sell1 >= 0` holds
throughout, which is why returning `sell2` is right even when the optimal
plan trades once or not at all.

The purchase states open at `-10^9`, a sentinel standing for "cannot be here
yet" — no sequence of prices bounded by `10^5` can dig a real balance that
deep. The sale states open at `0`, standing for never having traded. On a
sagging list like `[9, 7, 7, 2]` no sale ever beats 0 and the answer falls
out as 0. For `[1, 4, 2, 6, 3, 8]` the machine ends with `sell2 = 10`, the
plan 1→6 then 3→8.

**Complexity:** `O(n)` time, `O(1)` space.
