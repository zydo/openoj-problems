# Solutions — Each Bike's Latest Return

## Group per bike, take the maximum, sort most recent first

The answer is one row per bike number holding that bike's greatest
`returned_at`, emitted with the most recently used bike on top. Grouping
does the first job directly: `GROUP BY bike_no` collapses each bike's
trips into a single output row, and `MAX(returned_at)` selects the latest
of them — the "last time out". A bike with only one trip still forms its
own group, so its lone `returned_at` passes through the maximum
unchanged, exactly as the examples require.

The sort is expressed on the output column: `MAX(returned_at)` is aliased
back to `returned_at`, and `ORDER BY returned_at DESC` refers to that
alias, ranking bikes by their selected most-recent time, descending.
Datetimes are fixed-width `YYYY-MM-DD HH:MM:SS` text, so the engine's
comparison order matches chronological order — no casting is needed
anywhere in the query. An empty table leaves no groups to form, so the
query correctly returns zero rows rather than a `null` placeholder.

The aggregation reads every trip once (`n` rows scanned, one running
maximum kept per bike), and the engine then sorts the `b` grouped rows by
their selected times.

**Complexity:** `O(n + b log b)` time, `O(b)` space.
