# Solutions — Click-Through Rates

## Conditional aggregation per placement

Every ad's CTR depends only on two counts of its own rows — how many
reactions were `Clicked` and how many were `Viewed` — so one pass with
conditional aggregation answers everything:
`SUM(CASE WHEN reaction = 'Clicked' THEN 1 ELSE 0 END)` and the
`Viewed` twin, computed inside a single `GROUP BY placement_id`.
`Ignored` rows fall out of both sums, which is exactly the statement's
"ignored reactions never enter the rate".

The rate is `clicked * 100.0 / (clicked + viewed)` — multiplying by
the real `100.0` keeps the division fractional — and `ROUND(..., 2)`
gives the two-decimal answer. A placement whose rows are all `Ignored`
divides zero by zero, which is `NULL` in SQL, so `COALESCE(..., 0)`
supplies the required `0.0`. The outer
`ORDER BY ctr DESC, placement_id ASC` matches the statement's ordering
rule, ties included.

**Complexity:** `O(R)` time over `R` rows (plus the sort of the grouped
output), `O(P)` space for `P` distinct placements.
