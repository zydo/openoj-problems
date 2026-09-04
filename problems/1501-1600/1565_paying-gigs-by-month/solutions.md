# Solutions — Paying Gigs by Month

## Filter first, then group by the formatted month

Dropping the rows with `fee` at or below 20 before any grouping means
a month with no qualifying gig never reaches the `GROUP BY` at all —
it produces no group, which is how a quiet month should vanish from
the result rather than appear as a row of zeros.
`strftime('%Y-%m', gig_date)` collapses each surviving gig's date to
its calendar month, and grouping by that expression gathers every
qualifying gig of a month into one row.

Within each group, `COUNT(gig_id)` counts all the qualifying gigs —
several bookings from the same client in the same month all count —
while `COUNT(DISTINCT client_id)` credits each client once no matter
how many of that month's gigs they booked. The two aggregates agree
exactly until one client supplies more than one of a month's
qualifying gigs, which is the whole point of reporting both columns.

**Complexity:** `O(n)` time and `O(n)` space, where `n` is the number
of gigs — one filtered pass builds the per-month groups, and the
output holds at most one row per distinct month.
