# Solutions — Friday Spending I

One aggregation over the Friday rows of a single-month spending log.

## Filter Fridays, then one group per day

The query first discards every non-Friday row in the `WHERE` clause:
`strftime('%w', spend_date)` is the weekday with Sunday counted as 0, so
comparing it to `'5'` keeps exactly the Friday rows. What survives is
grouped by `spend_date` and aggregated with `SUM(spend_amount)`, which
collapses each purchasing Friday into one row holding the day's total spend. The
"leave weeks without Friday spending out of the report" rule needs no
special handling — a Friday with no purchases contributes no row
to the filter, forms no group, and therefore never reaches the output.

The `week_of_month` column is derived, not stored:
`CAST(strftime('%d', spend_date) AS INTEGER)` reads the day of the
month, and `(day + 6) / 7` is the integer-arithmetic ceiling of `day / 7` —
week 1 spans days 1–7, week 2 days 8–14, and so on. November 2023's
Fridays fall on the 3rd, 10th, 17th, and 24th, which map to weeks 1, 2, 3,
and 4, so the closing `ORDER BY week_of_month` emits the spending
Fridays earliest-first with no possibility of a tie. The three output
columns are selected in the order the statement fixes.

One pass over the table filters by a constant weekday test per row, and
the grouping maintains at most four running sums (November has only four
Fridays). With `n` rows in `SpendLog` that is a single linear scan plus
constant-size aggregate state.

**Complexity:** `O(n)` time, `O(1)` auxiliary space.
