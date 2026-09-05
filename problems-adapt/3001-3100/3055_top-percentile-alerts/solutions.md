# Solutions — Top Percentile Alerts

## PERCENT_RANK window with a strict 5% cut

The percentile of an alert only means something next to its own region's
alerts, so the window partitions by `region`; within each partition,
ordering by `risk_score DESC` puts the riskiest alert of the region at
percentile 0. `PERCENT_RANK()` evaluates to `(rank - 1) / (partition rows

- 1)`, so for a region of `k`rows the leading row scores 0, the next`1 / (k - 1)`, and so on — a region keeps its top row or rows according to
  how many land strictly below 0.05. Alert IDs are unique, but scores are
  not: a tie at the top shares one rank, so a tied group crosses the cut
  together instead of being sliced apart.

A window function's value cannot feed the `WHERE` of the same `SELECT`
that computes it, so the ranking happens in a subquery and the filter
`pr < 0.05` runs outside it. `risk_score` is a real-valued column and the
rank is a float, so the comparison is float arithmetic either way — the
strict `<` is the cut the grader applies, used exactly as computed.

The last leg is presentation. The final `ORDER BY region ASC, risk_score
DESC, alert_id ASC` delivers regions alphabetically, the riskiest alert
of a region first, and ascending `alert_id` as the tiebreak when two kept
rows share a score.

**Complexity:** `O(n log n)` time, `O(n)` space.
