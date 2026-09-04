# Solutions — Tidy Display Names

One string recomposition per row tidies every display name: keep
`profile_id` as it is, and rebuild `display_name` from an uppercased
first character followed by a lowercased remainder.

## Uppercase the first character, lowercase the rest

The fix never inspects a name's shape — it always writes the same
normal form. `SUBSTR(display_name, 1, 1)` extracts the first
character and `SUBSTR(display_name, 2)` everything after it, so
`UPPER(...) || LOWER(...)` concatenates the two pieces into exactly
the required shape: first character uppercase, rest lowercase.
Already-correct names pass through unchanged (each piece is
re-applied, never checked), and a single-character name reduces to
`UPPER` of that character with an empty remainder.

`profile_id` is carried along untouched, and `ORDER BY profile_id`
finishes the query with the required ordering. The judge compares
result multisets, so that ordering is a statement requirement rather
than a comparison one — row order cannot fail a case.

**Complexity:** `O(n log n)` time (ordering), `O(n)` space.
