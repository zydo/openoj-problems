# Solutions — Yesterday's Post Reports

## Filter to yesterday's reports, then count distinct posts per reason

Two predicates decide which rows matter at all: the action must be
`report`, and the day must be yesterday, `2019-07-04` (today is fixed
at `2019-07-05`). Both are plain equalities in the `WHERE` clause, so
the table shrinks to one day's report rows before any grouping
happens.

What is counted is the number of **posts**, not of reports — several
users may report the same post, and duplicate rows are allowed, so
raw row counts would inflate the answer. `COUNT(DISTINCT post_id)` is
the exact tool: inside each `detail` group it collapses repeated post
ids to one. Grouping by `detail` then produces one row per reason, and
a reason that never appeared yesterday never forms a group, which is
exactly why zero-count reasons are absent from the output.

**Complexity:** `O(N)` time over the `N` Interactions rows with a set
of post ids per reason, `O(R × P)` space in the worst case for `R`
reasons and their distinct posts.
