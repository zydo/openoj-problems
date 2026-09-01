# Solutions — Site Crews I

One join plus a grouped average reports every site's mean tenure
directly: `Site` joined to `Worker` on `worker_id` attaches each row's
`tenure_years`, and `AVG` under `GROUP BY site_id` folds those years
down to one average per site.

## Join Site to Worker, average per site

`worker_id` is a foreign key from `Site` into `Worker`, so an inner
join between the two never drops a `Site` row or invents one: every
`(site_id, worker_id)` pair picks up exactly the matching worker's
`tenure_years`. Grouping the joined rows by `site_id` then reduces
each site's crew to a single row, and `AVG(tenure_years)` computed
over that group is the site's mean.

`ROUND(..., 2)` fixes the result to two decimal places. Measured on
the judge's sqlite, `ROUND` operates on the exact binary value of its
argument and rounds a tie away from zero, so an average of exactly
`2.5` reports `2.5` and an average of exactly `2.125` reports `2.13`.
The rounded value travels as a float: an average of exactly `4` years
is `4.0` on the wire, not the string `"4.00"`. Row order needs no
pinning — the judge compares result multisets, which is precisely the
statement's "in any order".

**Complexity:** `O(n log n)` time (grouping), `O(n)` space, for `n`
`Site` rows.
