# Solutions — The Honor Roll II

## Three correlated probes per cadet, AND-ed together

Eligibility is a conjunction of four independent facts about one cadet,
so the query walks `Cadets` once and asks each cadet its own battery
of correlated subqueries. The required-completion test compares two
counts: the number of `'yes'` modules in the cadet's track versus the
number of those same modules for which the cadet owns a registration
row graded `'A'` — they match exactly when every required module was
taken and every row taken earns the top letter (a stale non-A row from
a retake keeps the second count's rows honest because a sibling
`NOT EXISTS` guard rejects any bad-grade row outright). The elective
test counts distinct own-track elective module ids and demands at least
two, and the GPA test takes `AVG(GPA)` over all of the cadet's
registration rows regardless of track and requires at least 2.5.

The grade-floor audit is another anti-join: no own-track registration row
may exist whose letter is not `'A'` on a required module or outside
`('A', 'B')` on an elective. Registrations in other tracks touch none of
these three probes — they only surface inside the average, which is why
an out-of-track failure can drag a cadet below 2.5 yet never violates
the letter grades. Because the enum arrives lowercase in the datasets,
every comparison on it goes through `LOWER(required)`. The final
`ORDER BY cadet_id` orders the survivors ascending; cadets with no
registrations fail the elective count naturally, so no special empty-row
handling is needed.

**Complexity:** `O(S · (E + C))` time with `S` cadets, `E`
registrations, and `C` modules — each probe scans its table per cadet —
and `O(E + C)` space for the joins.
