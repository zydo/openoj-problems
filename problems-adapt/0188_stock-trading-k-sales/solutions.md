# Solutions — Stock Trading, K Sales

## Per-trade DP with a no-cap shortcut

First decide whether the cap can ever matter. A trade that pays needs two
different days, so `n` days support at most `n / 2` profitable trades; once
`k >= n // 2` the cap is decoration and the optimum is the greedy sum of all
positive day-to-day rises — every disjoint climb collected in one scan.
Degenerate inputs (`n < 2`, `k == 0`) answer 0 before any of this begins.

When the cap does bind, run a sweep that keeps, for every trade count `j`
from 1 to `k`, the pair `buy[j]` (best balance while holding the share of
the `j`-th purchase) and `sell[j]` (best profit after closing `j` trades).
A day at price `p` refreshes `buy[j] = max(buy[j], sell[j-1] - p)` — keep
holding, or pay for the share out of `j - 1` closed trades — then
`sell[j] = max(sell[j], buy[j] + p)` — stay closed, or close at `p`.
Refreshing `buy[j]` first lets a same-day open-and-close slip through, which
is a zero-profit trade and therefore harmless: it is what lets unused trade
slots vanish from the arithmetic.

`buy` opens at negative infinity, marking holdings that cannot exist yet, and
`sell` opens at zero, so the maxes never fabricate impossible wealth. After
the last day `sell[k]` is the answer — plans that use fewer trades are
already dominated at that level. With `k = 2` and `[2, 6, 1, 3, 5, 0, 4]`
the sweep ends at 8: the trades 2→6 and 1→5; the tempting 0→4 would be a
third trade and stays out of reach.

**Complexity:** `O(n·k)` time, `O(k)` space.
