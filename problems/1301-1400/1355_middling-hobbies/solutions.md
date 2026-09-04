# Solutions — Middling Hobbies

## Approach: Count per hobby, window out the extremes

Every hobby has at least one participant (the statement guarantees each
`Hobbies` row is performed by someone in `Roster`), so counting `Roster`
grouped by hobby gives every hobby's participation. A window over that
grouped table attaches the global maximum and minimum counts to every
row — `MAX(participants) OVER ()` and `MIN(participants) OVER ()` — and
the outer filter keeps exactly the rows strictly between the two.

The join to `Hobbies` is not even needed for counting (a member's hobby
names the row), but selecting from the grouped Roster rows keeps the
output to hobby names that exist in the `Hobbies` table; any output order
is allowed, so the query has no `ORDER BY`.

**Complexity:** `O(M log M)` for the group-by and window sort with `M`
roster members, `O(H)` output for `H` hobbies.
