# Solutions — The Stock Trading, One Sale

## One pass, cheapest price so far

Any sale is fixed by two days: the day it sells and the cheapest day before it. That collapses the search — while scanning left to right, only two numbers ever need to be remembered, the minimum price seen so far and the best profit banked so far. Each day either lowers that minimum or offers `price - cheapest` as a candidate; every buy/sell pair the brute force would compare is dominated by one of these updates, because a seller only ever wants the cheapest prefix behind the sale.

The code walks `prices` once, folding `cheapest` down with `min` and `best` up with `max`. On the day a new minimum appears, `price - cheapest` is 0, so the same day can never fake a profit by selling to itself — and since `best` starts at 0 rather than negative infinity, prices that only fall leave it untouched and the method returns the statement's no-profit `0`.

**Complexity:** `O(n)` time, `O(1)` space.
