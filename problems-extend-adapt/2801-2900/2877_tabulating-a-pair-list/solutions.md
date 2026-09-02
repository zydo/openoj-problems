# Solutions — Tabulating A Pair List

## Project the two columns ordered by their list position

The `ListPairs` table already holds one row per pair of the list, so
laying the list out is a straight projection: name the two output columns
in the SELECT list, `pair_id` then `pair_age`, and read them from the
table. Naming the columns — rather than `SELECT *` — is what keeps the
result at exactly those two columns in that exact order.

The rows must come out in the same order as the original list, and a
table guarantees no order of its own, so the query sorts by `pair_index`
with `ORDER BY pair_index ASC`. The position column is precisely what
lets the query recover the list's original sequence no matter what order
the dataset's INSERT statements used: identity inserts, reversed inserts,
and shuffled inserts all collapse to the same output.

**Complexity:** `O(n log n)` time, `O(n)` space — the `n` rows are
scanned and sorted by `pair_index`, and the result table itself holds all
`n` pairs.
