# Solutions — Rapid Repeat Sessions

## Self-join same-kind visits, keep members with a pair inside twelve hours

A member qualifies through a pair, so the query lets `Visits` meet
itself: aliases `a` and `b` join on `member_id` and `visit_kind`, and
`a.visit_id <> b.visit_id` bars a sitting from pairing with itself.
Ordering the join with `b.visit_start >= a.visit_start` gives each
unordered pair one canonical orientation, and under that orientation
the gap is precisely the idle stretch separating the two sittings:
`b.visit_start - a.visit_end` — negative when the later sitting begins
before the earlier one ends, i.e. they overlap. Twelve hours is the
stated maximum, so the filter keeps pairs whose later sitting starts
no later than `datetime(a.visit_end, '+12 hours')`. SQLite renders
that shifted bound back into the same ISO-8601 shape the column
stores, so an ordinary string comparison decides it, and a pair
sitting exactly on the bound survives. `DISTINCT` collapses a
member's possibly many close pairs into one row, and
`ORDER BY a.member_id ASC` dresses the output in the demanded order.

Ordering the pairs also carries the correctness argument on its own:
if some pair `(a, c)` fits, then `a` paired with whichever same-kind
sitting starts immediately after `a` fits too, because that immediate
successor starts no later than `c` does. Scanning start-ordered pairs
therefore finds every qualifying member — no window functions or
lead/lag machinery needed.

The self-join materializes every same-member same-kind pair, quadratic
in a table of n sittings; beyond the result rows only constant working
memory is kept.

**Complexity:** `O(n^2)` time, `O(n)` space.
