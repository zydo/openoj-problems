# Solutions — Stages Never Cleared

## Enumerate every stage, subtract the cleared

The answer is a set difference, but only one side of it exists as a
table: `Cleared` lists what ran, while the full grid of stages each
pipeline was divided into is implied by `Pipelines.stage_count`. A
recursive CTE materializes that grid — it seeds one row per pipeline at
`stage_id` `1`, then keeps incrementing `stage_id` per pipeline for as
long as it stays below that pipeline's own `stage_count`, so each
pipeline expands into exactly its labeled stages.

The grid is then anti-joined against `Cleared`: a `LEFT JOIN` on the
pair `(pipeline_id, stage_id)`, keeping the rows where the join found
nothing. Every surviving row is a stage that exists but never cleared,
which is precisely the requested report. The `ORDER BY` is cosmetic —
the result is a row set compared order-insensitively, and the sort only
makes eyeballing the output pleasant.

With `T` pipelines the grid holds `G` rows, the sum of all
`stage_count` values (at most `20` per pipeline). The anti-join looks
each grid row up in `Cleared`'s composite primary-key index, and the
final sort adds a logarithmic factor, dominated by the join for
realistic inputs.

**Complexity:** `O(G log G)` time, `O(G)` space.
