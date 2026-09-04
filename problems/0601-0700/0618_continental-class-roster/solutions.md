# Solutions — Continental Class Roster

## Rank within each region, then pivot on the rank

The report's rows are positions, not enrollees, so the query first gives
every enrollee a position inside their own region and then regroups by
that position. `ROW_NUMBER() OVER (PARTITION BY region ORDER BY name)`
does the ranking: each region's names are sorted alphabetically and
numbered from 1, independently of the other regions, so America, Asia,
and Europe each get their own 1, 2, 3, ... sequence.

The pivot is a `GROUP BY` on that rank. Grouping by `rn` gathers together
the one row from each region that shares a given position — at most one
per region, since the numbering is unique within each partition — and
three `MAX(CASE WHEN region = '<Region>' THEN name END)` expressions,
one per region, each read off whichever row in the group belongs to that
region. The `CASE` is non-`NULL` for exactly one region per group and
`NULL` for the other two, so `MAX` — which ignores `NULL`s — simply
surfaces the one real name, or `NULL` itself when the group has no row
for that region at all (a region that ran out).

America's row count sets the report's row count because the problem
guarantees America is never shorter than Asia or Europe, so grouping by
`rn` never drops an America row for lack of a partner — every rank that
exists in America's partition also exists as a group, even if Asia's or
Europe's partition has already run out at that rank and contributes
`NULL` instead of a name.

The engine ranks the `n` rows of `Enrollee` in one pass (a sort per
region), then groups the ranked rows in a second pass — each group holds
at most one row per region, and nothing beyond the ranked rows and the
pivoted groups is materialized.

**Complexity:** `O(n log n)` time, `O(n)` space.
