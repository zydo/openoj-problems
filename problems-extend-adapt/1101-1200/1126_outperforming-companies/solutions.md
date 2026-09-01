# Solutions — Outperforming Companies

## Compare each row to its metric's baseline, then count per company

The query is three simple aggregations in a row. First, a window
average — `AVG(tally) OVER (PARTITION BY metric)` — decorates every
row with the mean of its own metric. No separate averages table to
join: the baseline rides along in the same scan.

Second, the `WHERE` clause keeps only rows strictly above their
baseline. The comparison is strict, which is exactly where the
"strictly greater" wording of the problem lives — a company sitting
precisely on the mean contributes nothing.

Third, the survivors group by `company_id` and pass through
`HAVING COUNT(*) > 1`. Distinct metrics above baseline is what "more
than one metric" means, and because `(company_id, metric)` is the
primary key a company can contribute at most one row per metric, so
counting rows equals counting metrics.

**Complexity:** `O(N log N)` time for the grouped window aggregation
over `N` Metrics rows, `O(N)` space for the decorated intermediate.
