# Solutions — Stock Trading, Two Sales

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
