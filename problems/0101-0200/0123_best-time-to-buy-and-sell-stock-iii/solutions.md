# Solutions — Best Time to Buy and Sell Stock III

## State-Machine Dynamic Programming

Describe your wealth after each day with four states: after the first buy (`buy1`), after the first sell (`sell1`), after the second buy (`buy2`), and after the second sell (`sell2`). One forward sweep over the prices updates all four: each state either keeps yesterday's value or transitions today, where buying adds `-price` and selling adds `+price` on top of the preceding state.

The per-day updates read in order: `buy1 = max(buy1, -price)` (the cheapest first buy so far), `sell1 = max(sell1, buy1 + price)`, `buy2 = max(buy2, sell1 - price)`, and `sell2 = max(sell2, buy2 + price)`. Because each state reads the already-updated earlier states, a same-day buy-and-sell is permitted — and that is exactly what lets the machine avoid a separate "transaction count" dimension: a degenerate transaction that buys and sells on the same day contributes zero profit, so it can stand in for "do nothing" without ever inflating the answer. In particular `sell2 >= sell1 >= 0` always holds, so returning `sell2` is correct even for plans that use fewer than two transactions.

The buy states start at -10^9, a sentinel meaning "not yet reachable" (its magnitude exceeds any achievable debt since prices are at most 10^5), while the sell states start at 0, representing never having traded. On a strictly decreasing price list no sell ever improves on 0, so the answer is 0 rather than a forced losing trade.

**Complexity:** `O(n)` time, `O(1)` space.
