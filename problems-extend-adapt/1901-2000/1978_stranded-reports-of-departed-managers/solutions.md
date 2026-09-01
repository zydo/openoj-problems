# Solutions — Stranded Reports of Departed Managers

## `NOT IN` against the staff id set, with explicit null handling

Three facts must line up for an employee to be reported: the wage sits
strictly under `30000`, a manager is named at all (`boss_id` is not
null), and that named manager no longer has a row — the deletion that
happened when they left. Each fact becomes one term of the `WHERE`
clause, so the query stays a direct transcription of the question.

The "manager left" test is a `NOT IN` subquery collecting every
`staff_id` currently in the table. An employee whose manager is still on
staff finds that id in the collection and is dropped; an employee whose
manager departed points at an id the collection does not contain. The
explicit `boss_id IS NOT NULL` guard carries real weight: `NOT IN` never
matches a null, so without it, boss-less employees would vanish from the
answer silently — even though the question is about a manager who left,
not about having no manager.

A closing `ORDER BY staff_id` emits the rows in the ascending order the
statement demands, so the returned rows line up with the expected table
exactly.

**Complexity:** `O(n log n)` time (the subquery scan plus the sort),
`O(n)` space.
