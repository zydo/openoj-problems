# Solutions — The Shrinking Subscribers

## Aggregate Per Member, Join Back the Newest Row, Judge Four Bars

Every shrinking-subscriber rule is a property of one member's whole
change timeline, so the query first collapses that timeline into one summary
row per member. A grouped subquery scans `plan_history` once and,
per `member_id`, collects everything the four bars need: `MAX` over the
dates gives the newest row's date and `MIN` the earliest (ISO dates compare
chronologically as plain text, so text `MIN`/`MAX` are date
`MIN`/`MAX`), `MAX(monthly_price)` is the all-time high-water mark,
and `SUM(change_kind = 'downgrade')` turns the boolean test into a 0/1
step-down tally.

The outer query joins each summary row back to the one row whose
date equals that member's newest date — distinct dates per member make
this exactly one row — and judges all four bars on it. The newest row's
kind must not be `'cancel'`; the step-down tally must be at least 1;
the revenue bar compares the newest row's `monthly_price` against the
all-time maximum cross-multiplied as `2 * current < max`, keeping
the strictly-less-than-half decision in exact arithmetic with no
division; and the tenure bar takes the plain day span
`julianday(last) - julianday(first) >= 60`. Qualifying rows then emit
the reported columns straight from the data — tier, current price,
peak price, and the day span cast to an integer — and the mandated
order falls out of `ORDER BY days_enrolled DESC,
member_id ASC`.

Each row feeds a constant number of aggregate terms, so with hash
grouping the whole query is one linear sweep over the table (a
sort-based plan adds only a log factor); working storage holds one
summary row per distinct member.

**Complexity:** `O(T)` time and `O(U)` space for `T` rows and `U`
members.
