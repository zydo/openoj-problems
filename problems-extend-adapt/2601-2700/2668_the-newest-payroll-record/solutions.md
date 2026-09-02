# Solutions — The Newest Payroll Record

Per worker, the newest entry is the one whose `yearly_pay` carries the
greatest value; everything the query does follows from ranking the entries
inside each worker group.

## Rank each worker's entries by numeric pay, keep the top

A windowed `ROW_NUMBER` partitions rows by `worker_id` and orders each
partition by `CAST(yearly_pay AS INTEGER) DESC`, so every worker's entries
get positions with the newest (greatest) one first. The outer query keeps
only rank 1 — one row per worker, carrying that winning entry's name, pay
text, and unit as stored — and orders the survivors by `worker_id`
ascending to produce the final table. The cast matters: the column is
textual, so without it a comparison such as `'9975'` versus `'10000'`
would order lexicographically and keep an outdated entry.

Workers with a single entry need no special casing; their lone row simply
takes rank 1, which is why groups of any size collapse uniformly through
the same filter.

**Complexity:** `O(n log n)` time in the number of entries `n` (the
per-partition ordering), `O(n)` space.
