# Solutions — The Interuniversity Exam Duel

## Compare the two excellent-entrant counts

Each scalar subquery counts the entrants whose `points` reach the
inclusive `90` bar. A `CASE` expression compares those two one-value
results: the larger count selects its university, while equality selects
`No Winner`. Keeping both counts inside one `SELECT` guarantees exactly
one output row, including when neither university fields an excellent
entrant.

Both tables are scanned only to count qualifying rows, and the query
retains only the two aggregate values. If each university fields `n`
entrants, the work is linear in the total number of rows.

**Complexity:** `O(n)` time, `O(1)` extra space.
