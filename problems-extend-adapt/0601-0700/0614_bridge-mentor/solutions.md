# Solutions — Bridge Mentor

## Count the mentored, keep the ones with a mentor of their own

A bridge mentor sits on both sides of the mentorship relationship at
once, and the two conditions read the table's two columns independently:
a person mentors somebody when their name appears in some row's
`mentor`, and somebody mentors them when their name appears in some
row's `mentee`. The reported `mentee_count` is the size of the first
group only — how many people they personally mentor — so
`GROUP BY mentor` with `COUNT(*)` is the counting half of the query: one
row of the answer per distinct `mentor`, holding that person's mentee
count.

The qualifying half is a semi-join spelled as membership:
`WHERE mentor IN (SELECT mentee FROM Mentorship)` reads the same single
table in its other role, as the set of names that appear as a `mentee`,
and keeps exactly the counted mentors who are also mentees — a mentor
whose name never appears as a `mentee` (Nina, mentoring but unmentored)
is counted and then dropped, while a name that only ever appears as a
`mentee` (Priya, Rashi) never forms a group in the first place, because
it never appears as a `mentor`. `DISTINCT` inside the `IN` subquery would
change nothing — membership testing ignores duplicates — and the same
predicate could be spelled as an `EXISTS` lookup or an inner join onto
`SELECT DISTINCT mentee`; the subquery form keeps the two roles of the
one table visibly separate. `ORDER BY mentor ASC` honors the statement's
alphabetical demand; the judge compares result rows as an unordered
multiset, so the sort dresses the answer rather than deciding it.

The engine can evaluate the uncorrelated subquery once, building the set
of mentee names in one scan, then group the `n` rows in a second pass —
each group's count is a tally of its rows, and nothing beyond the name
set and the groups is materialized.

**Complexity:** `O(n)` time, `O(n)` space.
