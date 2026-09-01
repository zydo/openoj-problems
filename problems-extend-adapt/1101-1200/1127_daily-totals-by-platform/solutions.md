# Solutions — Daily Totals by Platform

## Classify per shopper and day, aggregate per day, pad 'both' with zeros

The unit of classification is one shopper on one date: someone who
bought on both platforms that day belongs to `'both'`, and their two
amounts must merge into that single row. The innermost subquery groups
by `(shopper_id, spend_date)`, sums `amount`, and derives the group
with `CASE WHEN COUNT(DISTINCT platform) = 2 THEN 'both' ELSE
MAX(platform) END` — a single-platform shopper's `MAX` is just that
platform, and the two-platform case is caught first. This fold is also
why platform-only totals never include a both-platform shopper's
spend: that money moved into the `'both'` row.

The middle query aggregates those classified rows into `SUM(amount)`
and `COUNT(*)` per `(spend_date, platform)`. The primary key allows at
most one row per shopper, date, and platform, so counting rows equals
counting shoppers — and a platform with no platform-only shopper that
day forms no group at all, which is why its row can disappear.

A date where nobody bought on both platforms would otherwise be
missing its `'both'` row, but the expected output always carries one,
padded with zeros. A `UNION ALL` against
`SELECT DISTINCT spend_date, 'both', 0, 0 FROM Charges` supplies a
zero row for every date in the table; the outer
`GROUP BY (spend_date, platform)` then folds it into a real `'both'`
row (adding zero) or lets it stand alone when nothing else did.

**Complexity:** `O(N log N)` time over `N` Charges rows for the two
grouped aggregations and the distinct-date scan, `O(N)` space for the
intermediates.
