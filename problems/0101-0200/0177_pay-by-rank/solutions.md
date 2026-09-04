# Solutions — Pay By Rank

## Dense rank against the testcase's pick

The request is positional over the _distinct_ amounts: order them from highest to lowest and take the one in position `pick`, with `null` when fewer than `pick` distinct values exist. `DENSE_RANK() OVER (ORDER BY paid DESC)` computes exactly that position on every row — duplicate amounts share a rank and, the ranks being dense, no position is ever skipped, so rank `pick` is the pick-th distinct amount no matter how many duplicate rows precede it. The testcase's rank is not a constant in the query; it arrives as data in the one-row `Settings` table, so the filter compares the rank against the scalar subquery `(SELECT pick FROM Settings)`.

Filtering `rnk = pick` leaves either every row holding that amount or nothing at all. Wrapping the filter in `MAX(paid)` collapses whichever remains into exactly one output row: the amount when it exists, and `null` — an aggregate over an empty set — for the "fewer than `pick` distinct amounts" contract. The outer query is a plain aggregate, so its row count is fixed at one and no `LIMIT`/`OFFSET` arithmetic is needed.

Ranking sorts the amounts once; with `E` rows in `Earnings` the window pass is one sort plus a linear scan, and the rank filter and aggregate are linear over the ranked rows. Only the ranked rows are materialized.

**Complexity:** `O(E log E)` time, `O(E)` space.
