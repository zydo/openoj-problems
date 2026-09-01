# Solutions — Counting Watchers per Repo

One grouping answers the question: fold `Watchers` on `repo_id`, and
each group's `watchers_count` is simply its number of rows — the table's
own primary key has already done the deduplication.

## Group per repository and count the rows

`GROUP BY repo_id` collects every row that names a repository into one
group, and `COUNT(*)` reports that group's size. No `DISTINCT` is
needed: the (`repo_id`, `watcher_id`) primary key lets a user watch a
repository at most once, so within any group the `watcher_id` values are
already distinct and counting rows counts watchers exactly. In the
example, repository 2's group holds three rows and answers 3, while the
same watcher 12 also appears in the groups for 5 and 9 — a watcher may
watch many repositories, but never twice in one group. A
`COUNT(DISTINCT watcher_id)` would return the same figure, but it
re-derives a guarantee the table's key already states — and it is the
habit to reach for only on tables, unlike this one, that admit duplicate
rows.

`ORDER BY repo_id` finishes the query with the ascending order the
statement requires. The judge compares result multisets, so the ordering
is a statement requirement rather than a comparison one — carrying it
keeps the output in the promised shape under either contract.

**Complexity:** `O(n log n)` time (ordering), `O(u)` space.
