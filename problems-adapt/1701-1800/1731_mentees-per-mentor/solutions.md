# Solutions — Mentees per Mentor

One join answers the question: pair each member with the rows that name
them as mentor, and every surviving group's own size is its
`mentees_count` while the rounded mean of its ages is its `average_age`.

## Self-join on mentored_by and group per mentor

`JOIN Mentors t ON t.mentored_by = m.member_id` walks the table through
itself: one alias (`m`) plays the mentor side, the other (`t`) the
mentee side, and the join condition keeps exactly the pairs whose
`mentored_by` names the mentor's `member_id` — the statement's direct
mentees. The inner join is also the mentor definition: a member whom
nobody names produces no joined row and drops out of the result without
any `HAVING` filter, so every group that survives has at least one
mentee. `GROUP BY m.member_id, m.name` collapses each mentor's pairs,
`COUNT(*)` counts them, and `AVG(t.age)` averages the mentees' ages.

Ages are integers, so a group's average lands on a fraction only when
the count does not divide the age sum, and `ROUND` resolves those
fractions half away from zero: an average of exactly `.5` — which arises
whenever an even-sized group's ages sum to an odd number — rounds up, so
example 1's `(29 + 40) / 2 = 34.5` becomes `35`, and example 2's `29.5`
or `27.5` round to `30` and `28` the same way. `CAST(... AS INTEGER)`
pins each rounded average to an integer so the row carries `35`, not
`35.0` — a real would not compare equal to the integer the answer
promises. `ORDER BY member_id` finishes with the ordering the statement
requires; the judge compares multisets, so the ordering is a statement
requirement rather than a comparison one.

**Complexity:** `O(n log n)` time, `O(n)` space.
