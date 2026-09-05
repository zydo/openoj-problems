# Solutions — Half-Year Fuel Economy Swings

## Average per-run ratios within each half, then subtract

A delivery's fuel economy is `km_driven / fuel_used`, and the statement
asks for the _average of those ratios_ per half-year — not the ratio of
the summed kilometers over the summed fuel. So the query first derives
one fact row per delivery: joining `deliveries` to `couriers` on
`courier_id` keeps only runs that belong to a known courier, and
alongside the courier key it computes the per-run ratio and the month
number from `delivery_date`. The month, not the full date, is the only
calendar information the halves need: `strftime('%m', ...)` extracts
it, and `m <= 6` versus `m >= 7` is the January–June / July–December
split.

The outer block then collapses those fact rows with a single `GROUP BY
courier_id, courier_name`. Each average is a conditional aggregate —
`AVG(CASE WHEN m <= 6 THEN eff END)` averages the first-half ratios
because `CASE` without an `ELSE` yields `NULL` for the other months and
`AVG` ignores NULLs — so one grouped pass produces both halves' means.
The `HAVING SUM(m <= 6) > 0 AND SUM(m >= 7) > 0` clause enforces the
only inclusion rule the statement states: a courier must have at least
one delivery in each half. `economy_gain` is `ROUND` of the difference
of the two _unrounded_ means — Marta Kell in the example shows why: her
displayed means are 12.54 and 11.39, whose difference is 1.15, but the
true means differ by 1.15556…, which rounds to the expected 1.16.
`first_half_mean` and `second_half_mean` are rounded on their own, and
the final `ORDER BY` presents rows by swing descending then name
ascending.

**Complexity:** `O(N + D log D)` time for `N` deliveries and `D`
qualifying couriers (one scan to group plus a sort for the presentation
order), `O(D)` space beyond the input.
