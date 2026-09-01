# Solutions — Friend-Shelf Picks

## Collect the buddy circle, join their shelves, subtract your own

Buddies is undirected on disk: reader 1 may sit in either column. The set
of reader 1's circle is therefore the `buddy_b` values of rows keyed by
`buddy_a = 1` unioned with the `buddy_a` values of rows keyed by
`buddy_b = 1` — the `UNION` also deduplicates any buddy reached through
both directions.

Joining that circle to `Shelved` gathers every book some buddy has shelved;
`SELECT DISTINCT` collapses repeats such as book 44 shelved by two different
buddies. The exclusion of books reader 1 already has is phrased as an
anti-join — `WHERE NOT EXISTS (SELECT 1 FROM Shelved mine WHERE ...)` —
which keeps a book only when no row ties it to reader 1's own shelf.

**Complexity:** `O(b + s)` time to scan the buddy and shelf tables (with
index lookups for the filters and probes) and `O(b + s)` space.
