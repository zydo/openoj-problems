# Solutions — Site Crews II

## Group by site, keep the largest crews

Group `Site` by `site_id` and count each site's crew with
`COUNT(worker_id)`. The maximum crew size across all sites is computed
once with a scalar subquery — the same grouped counts, wrapped and
reduced with `MAX` — so it is evaluated as a constant rather than
recomputed per group. `HAVING` then keeps every site whose crew size
equals that maximum, which is what makes ties come out correctly: an
`ORDER BY ... LIMIT 1` would only ever surface one site even when
several share the largest crew, silently dropping the rest.

Each `Site` row is read once and folds into a per-site accumulator, so
with hash grouping the outer query runs in one linear sweep over the
table (sort-based plans add a log factor); the inner subquery re-scans
the same grouped counts once more to find the maximum.

**Complexity:** `O(N)` time and `O(P)` space, for `N` Site rows and
`P` distinct sites.
