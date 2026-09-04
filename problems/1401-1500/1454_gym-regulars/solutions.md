# Solutions — Gym Regulars

## Streak grouping by date minus row number

Same-day repeat check-ins must count once, so the innermost subquery
takes `DISTINCT (id, visit_date)`. From there the classic streak trick
applies: number each member's dates in ascending order and compute
`DATE(visit_date, '-N days')` where `N` is that row number minus one.
Inside a run of consecutive days the offset exactly cancels the day
advance, so every member of the run shares one "streak anchor" date; a
gap breaks the equality and starts a new anchor.

Grouping by `(id, anchor)` and keeping groups with `COUNT(*) >= 5`
yields the members holding a five-day streak — any longer streak
survives too, and several disjoint streaks simply produce several
groups. A final `DISTINCT` over the surviving ids (a member may appear
once per qualifying streak) feeds a join to `Climbers` for the names,
ordered by `id`.

The query generalizes to an `n`-day definition of regular by changing
the single `5` in the `HAVING` clause.

**Complexity:** `O(V log V)` time for the sort behind the row
numbering, over `V` deduplicated visit rows; `O(V)` space.
