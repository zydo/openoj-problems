# Solutions — Friday Spending III

## Generate the four Fridays, cross with the two tiers, left join spend

The result is a dense grid: every one of November 2023's Fridays paired
with every tracked tier, zero-filled where nothing qualifies. A
recursive CTE walks `2023-11-01` to `2023-11-30` day by day
(`DATE(d, '+1 day')`), keeps only rows whose `%w` weekday code is `5`
(Friday in SQLite's encoding), and derives each Friday's occurrence
number as `(day - 1) / 7 + 1`, which maps Nov 3/10/17/24 onto weeks 1–4
exactly as the statement numbers them. A tiny two-row tier CTE supplies
the column values.

The spending side reduces to one pre-aggregated row per
(`spend_date`, `tier`): `SpendLog` joined to `Members` on `shopper_id`
keeps only Premium/VIP shoppers — Standard activity (and any non-Friday
date, later dropped by the join) vanishes before grouping. Finally the
full grid of Fridays × tiers left joins those aggregates; an unmatched
combination survives with `SUM = NULL`, which `COALESCE(..., 0)`
renders as the demanded 0. Ordering by week then tier ascending
produces the required layout — `'Premium' < 'VIP'` lexicographically,
so a plain text sort suffices.

**Complexity:** `O(S + M + G)` time, `O(G)` space — `S` log rows joined
once to their members, `M` members filtered, and the constant 8-row
grid `G` emitted from a 30-day walk.
