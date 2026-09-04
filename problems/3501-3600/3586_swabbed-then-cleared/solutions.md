# Solutions — Swabbed Then Cleared

## First positive swab, then the first later clear, joined back to the roster

A resident qualifies exactly when two dated events exist in order: a
first Positive swab, and a Negative swab strictly after it. The `pos`
subquery groups `swab_tests` by resident and takes `MIN(swab_date)` over
the Positive findings — the anchor date. The `neg` subquery then keeps
only Negative findings whose date is greater than that resident's anchor
(a correlated `MIN` over the resident's Positive rows) and groups those
to get the first clearing swab; the strict `>` is what makes a same-day
negative worthless and a negative taken before the positive never count.
Inconclusive findings are never selected by either half, so they cannot
interfere, and a resident with no qualifying negative simply produces no
row in `neg` — the inner join drops them, which also removes
positive-only and negative-only residents.

The two grouped results join back to `residents` to carry `resident_name` and
`age`, and the days-to-clear is the day difference
`JULIANDAY(first_negative) - JULIANDAY(first_positive)` cast to an integer.
The outer `ORDER BY days_to_clear, resident_name` presents rows the way the
statement asks; the judge compares rows as an unordered multiset, so that
ordering is fidelity to the statement rather than a correctness requirement.

**Complexity:** `O(T log T)` time for `T` swab rows (the grouping sorts),
`O(P)` space for the per-resident grouped rows.
