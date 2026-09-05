# Solutions — Distinct Occurrence Counts

## Frequency table plus a distinct-count check

First build a hash map from each value to how often it appears — one pass
over `arr` with an increment per element. The question then becomes whether
any two of those counts are equal, which a second hash set answers directly:
inserting every count into a set and checking the set's size against the
number of distinct values tells us whether a collision happened. If the two
sizes are equal, no two values share an occurrence count.

That size comparison is exactly the test the statement asks for. For example,
`[4, 4, 7, 7, 7, 11]` yields counts `{4: 2, 7: 3, 11: 1}` — three distinct
values and three distinct counts, so `true`; while `[5, 5, 8, 8]` yields
counts `{5: 2, 8: 2}` — two distinct values but only one distinct count, so
`false`.

**Complexity:** `O(n)` time and `O(n)` space.
