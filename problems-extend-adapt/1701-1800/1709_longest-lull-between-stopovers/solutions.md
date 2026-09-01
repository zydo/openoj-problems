# Solutions — Longest Lull Between Stopovers

One alignment answers the question: line each stopover up with the next
stopover of the same traveler — `LEAD` supplies the successor, and a
fixed `'2021-01-01'` stands in for today on the last stopover — so each
traveler's `longest_lull` is the widest of those gaps, in days.

## Pair each stopover with its successor, keep the widest gap

`LEAD(stopover_date) OVER (PARTITION BY traveler_id ORDER BY
stopover_date)` walks each traveler's stopovers in date order and
attaches the next stopover's date to every row; the last stopover of a
traveler has no successor, so its `LEAD` is NULL. Day counts come from
`julianday`, which maps an ISO date to its Julian day number: the
difference of two dates is exactly the number of days between them. Both
values carry the same half-day offset (midnight lands on `.5`), so it
cancels in the subtraction, and `CAST(... AS INTEGER)` pins the
whole-day result to an integer — the example reports `80`, `133`, and
`85`, not `80.0`.

The NULL successor is where today enters: `COALESCE(next_date,
'2021-01-01')` replaces it with the statement's fixed date. Today must
be a constant written into the query — the judge has no clock — never
`date('now')`. `GROUP BY traveler_id` with `MAX(...)` then keeps each
traveler's widest gap as `longest_lull`. The table has no primary key,
so a traveler may hold duplicate rows on one date; such a row leads to
its twin and scores a 0-day gap, which `MAX` ignores unless every gap is
0 — a traveler whose only stopovers land on today itself answers 0.
`ORDER BY traveler_id` finishes the query with the required ordering —
the judge compares result multisets, so that ordering is a statement
requirement rather than a comparison one.

**Complexity:** `O(n log n)` time (sort + scan), `O(n)` space.
