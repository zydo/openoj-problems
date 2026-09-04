# Solutions — Stock Trading With Cooldown

## Three-state machine with a cached sale

Each day ends in exactly one of three positions, and the sweep keeps the best
wealth in each: `hold` (owning a share), `sold` (the sale happened today),
`rest` (empty-handed, allowed to buy). Wealth is cash with the share's cost
already spent, so `hold` opens at a huge negative sentinel — owning before
any purchase is impossible — while `sold` and `rest` open at 0.

The rules of the problem sit inside three transitions. Selling is
`sold = hold + price`. Buying is `hold = max(hold, rest - price)`: keep the
share, or pay today's price out of the rest wealth — and because `rest` is
refreshed only after `hold` reads it, the purchase is funded by _yesterday's_
rest. The cooldown is the third line: `rest = max(rest, prev_sold)`, where
`prev_sold` was stashed before any update. Resting may absorb only a sale
made the day before, so a sale on day `i` cannot finance a purchase on day
`i + 1`; the earliest re-entry is day `i + 2`, exactly the forced pause the
statement demands.

Order is everything in the loop body: save `prev_sold` first, then refresh
`hold`, `sold`, `rest`, so every read looks at day-before quantities. The
answer is `max(sold, rest)` — finishing while holding a share wastes the
purchase, since nothing after the last day lets it be sold. On `[1, 3, 2, 4]`
the tempting two-trade plan (1→3, then 2→4) is exactly what the cooldown
forbids — day 2's cheap price falls inside the pause — so the machine settles
on the single trade 1→4 for 3. A one-day list returns 0.

**Complexity:** `O(n)` time, `O(1)` space.
