# Solutions — Department Headcounts

## Left join the students and count the join column

Every department must be reported, staffed or not, which makes the join a
left outer join driven by `Faculty`: `Faculty LEFT JOIN Pupil ON
Faculty.faculty_id = Pupil.faculty_id` keeps every row of `Faculty`, and
a department with no students comes back once with null in the `Pupil`
columns instead of disappearing — an inner join would drop exactly the
empty departments the contract exists for. `GROUP BY faculty_name` then
collapses each department's joined rows into a single group, giving the
one-row-per-department shape the contract asks for.

The counting expression is the whole exercise. `COUNT(student_id)` counts
the non-null student ids in each group, so a staffed department reports
its student total while an empty one — whose single row carries a null
`student_id` — reports 0. `COUNT(*)` would count that null-padded row
itself and report 1 for a department with no students at all, which is
precisely the trap; counting any never-null expression instead of the
join column fails the same way. `ORDER BY student_number DESC, faculty_name`
presents the counts from the highest to the lowest and breaks ties
alphabetically, as the contract asks; the judge compares rows as an
unordered multiset, so that ordering is fidelity to the statement rather
than a correctness requirement. Counting is order-independent, so
insertion order never matters.

One pass over the `S + D` joined rows feeds the `D` groups, and ranking
those groups costs a sort — nothing beyond the group table is
materialized.

**Complexity:** `O(S + D log D)` time, `O(D)` space.
