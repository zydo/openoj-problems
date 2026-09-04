# Solutions — Attendance Tally per Pupil and Topic

## Cross join the full grid, then left-join the sitting counts

The result must contain every pupil-topic pair, including pairs that never
sat a session — a plain join over `Sittings` can only produce rows that
exist there, so it silently drops Zoe's all-zero block. The fix is to
manufacture the complete grid first: `Pupils CROSS JOIN Topics` emits one
row per pupil per topic, and a `LEFT JOIN` onto `Sittings` matched on both
columns attaches each pair's sitting rows (or NULL when there are none).
`COUNT(e.pupil_id)` — counting a sitting column, never `*` — then yields
zero for the NULL pairs and the true multiplicity for the rest, duplicates
included, because grouping happens after the left join has fanned out.

The final `ORDER BY pupil_id, topic_name` satisfies the statement's
ordering requirement and makes the output deterministic. The same shape
can be written with a subquery of pairs joined to an aggregated sittings
table; at these table sizes the two are interchangeable, and the
single-pass version keeps one grouping instead of two.

**Complexity:** `O(s · u + e)` time for `s` pupils, `u` topics, and `e`
sitting rows (the grid is `s·u`, each sitting row lands on exactly one
cell); `O(s · u)` space for the output.
