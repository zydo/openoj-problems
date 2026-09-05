# Solutions — Three In A Row

## Three-alias self-join over consecutive feedIds

A value qualifies exactly when some three rows at consecutive feedIds all carry it. Three aliases of the one table line such a triple up: `FROM Feed l1, Feed l2, Feed l3 WHERE l1.feedId = l2.feedId - 1 AND l2.feedId = l3.feedId - 1` pins l1, l2, l3 onto feedIds k, k + 1, k + 2 — `feedId` is unique, so each l1 row matches at most one l2 row and that pair at most one l3 row — and `AND l1.val = l2.val AND l2.val = l3.val` demands the same val across the whole window, the two adjacent equalities chaining transitively to fix all three values.

DISTINCT carries the "every value once" contract. A run of length four or more contains several overlapping triples (a run of k rows contributes k - 2 of them), and a value that qualifies in several separate runs matches once per triple; without DISTINCT the same val would be reported once per window, while with it each qualifying value comes back as a single row of the single `ThreeInARow` column.

The aliases evaluate as nested loops: every row of l1 probes l2 for the feedId successor, and every surviving pair probes l3 — O(n^2) row comparisons over n rows with no index on `feedId`, the feedId arithmetic admitting at most one match per probe — while DISTINCT holds at most one output row per distinct qualifying val.

**Complexity:** `O(n^2)` time, `O(n)` space.
