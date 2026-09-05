# Solutions — Enrollees With Missing Faculties

## Approach: Left join, keep the unmatched

An enrollee is dangling exactly when their `faculty_id` matches no row of
`Faculties`. A `LEFT JOIN` on that column keeps every enrollee — matched
or not — and the unmatched ones are precisely those whose joined faculty
columns stay `NULL`; since `Faculties.id` is a primary key (it can never
itself be null), `WHERE d.id IS NULL` selects exactly the dangling
references with no false positives.

Projecting `Enrollees.id` and `Enrollees.name` gives the required two
columns; any output order is accepted, so no `ORDER BY` is needed.

**Complexity:** `O(E + F)` rows touched with `E` enrollees and `F`
faculties (hash join), `O(E)` output in the worst case.
