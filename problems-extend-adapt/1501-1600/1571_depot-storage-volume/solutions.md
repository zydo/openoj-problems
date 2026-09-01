# Solutions — Depot Storage Volume

## Join, multiply per line, and sum per depot

Join `Depot` to `Crates` on `crate_id` so each stock line carries both
its unit count and the crate's three dimensions. Multiplying
`quantity` by `width * length * height` on that joined row gives the
cubic feet a single line occupies; grouping by depot name and summing
that product folds every line a depot holds into one total.

Because the join is on the shared `crate_id` key and every crate
referenced by `Depot` exists in `Crates`, no outer join or
null-handling is needed — each stock line matches exactly one crate
row before the aggregation runs.

**Complexity:** `O(n)` time and `O(n)` space, where `n` is the number
of rows in `Depot` — every row is visited once by the join and once
by the aggregation.
