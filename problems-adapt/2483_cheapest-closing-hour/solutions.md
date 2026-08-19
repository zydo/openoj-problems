# Solutions — Cheapest Closing Hour

## One Upward Sweep, Two Running Counts

Closing at hour `j` charges one point for each `'N'` in `customers[:j]` (open,
nobody came) and one for each `'Y'` in `customers[j:]` (shut, somebody came).
Those two windows are what the whole task hangs on: evaluate that sum at every
`j` from `0` to `n` and hand back the smallest `j` attaining the minimum.

Recomputing the two counts per candidate is wasteful, because sliding the
closing hour from `j - 1` to `j` moves exactly one hour across the divide —
hour `j - 1`. Keep the prefix count of `'N'` and the suffix count of `'Y'` as
running totals: when hour `j - 1` is `'N'` it joins the open side and the
prefix count gains one; when it is `'Y'` it leaves the shut side and the
suffix count drops one. The cost of candidate `j` is the sum of the two
totals after that single update, so the sweep costs `O(1)` per hour.

Ties resolve toward the earlier hour, and the sweep honours that for free: the
running best is replaced only on a _strict_ drop. Start the sweep with the
hour-0 cost — zero `'N'` hours open against all the `'Y'` hours shut — before
the loop runs, which also covers the answer `0` outright, as in the mostly
quiet `"NNYNN"` example where no later hour ever beats cost 1. The opposite
extreme is a log that turns busy and stays busy, like `"NYYY"`: every step
lowers the cost, and the sweep walks all the way to `j = n`.

For `"YNYN"` the running costs go 2, 1, 2, 1, 2: hour 1 sets the best at cost
1, and hour 3 merely ties it, so the strict-improvement rule keeps the earlier
hour.

**Complexity:** `O(n)` time, `O(1)` extra space.
