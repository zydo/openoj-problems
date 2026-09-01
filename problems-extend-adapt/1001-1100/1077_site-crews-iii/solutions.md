# Solutions — Site Crews III

## Join to Attach Tenure, Filter Against the Per-Site Maximum

Join `Site` to `Worker` on `worker_id` so every assignment row
carries its worker's `tenure_years`. A correlated-by-value subquery
computes each site's maximum tenure with its own `Site`/`Worker` join
grouped by `site_id`, producing one `(site_id, MAX(tenure_years))`
pair per site. Filtering the outer join's rows with `WHERE (site_id,
tenure_years) IN (...)` against that pair set keeps exactly the rows
whose tenure matches its own site's maximum — never a different
site's — so a site with a lower ceiling than another can't
accidentally lose its senior worker to a global comparison. Because
the filter is on the pair, not on tenure alone, every worker tied for
the maximum within a site survives, which is what makes ties come out
correctly: collapsing to a single row per site (an `ORDER BY ...
LIMIT 1`, say) would drop every tied worker but one.

Each `Site` row is read once in each of the two joins and folds into
a per-site accumulator, so with hash grouping the subquery runs in
one linear sweep over the table (sort-based plans add a log factor);
the outer join then re-scans the same rows once more to apply the
per-site filter.

**Complexity:** `O(N)` time and `O(P)` space, for `N` Site rows and
`P` distinct sites.
