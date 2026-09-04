# Solutions — Median of Compressed Values

## Running counts, no expansion

The decompressed list is each `value` repeated `count` times in `value`
order, and a median is purely positional — two ranks in that order — so
the list never has to be built. `SUM(count) OVER (ORDER BY value)`
names each row's running count, the number of decompressed entries at
or below its `value`, and `SUM(count) OVER ()` names the grand total
`N`. The two middle ranks collapse into one integer-division pair: the
lower middle is rank `(N+1)/2` and the upper is rank `(N+2)/2`, and when
`N` is odd both divisions land on the same middle rank, so the same
`value` fills both slots and the average is that `value` itself. The
`value` occupying rank `k` is the smallest `value` whose running count
reaches `k` — its predecessor's count is still below `k` — which one
aggregation pass picks twice:
`MIN(CASE WHEN upto >= k THEN value END)`.

The final expression mirrors the definition: sum the two picked values,
divide by `2.0` — SQLite's integer `(0 + 1) / 2` truncates to `0` —
and `ROUND(x, 1)` reports one decimal, a real value on the wire with
ties going away from zero. Because nothing expands, the cost tracks
the table, not the data it encodes: a single row with count
`1000000000` answers as fast as count `1`. The direct alternative
does materialize the list — a recursive `tally(i)` CTE bounded by
`SELECT MAX(count) FROM ValueTally`, cross-joined against `ValueTally`
under `i <= count`, then `ROW_NUMBER() OVER (ORDER BY value)` picks
the same two ranks `(n+1)/2` and `(n+2)/2` — and pays `O(F)` rows for
it, where `F` is the decompressed total.

One pass computes the two window sums over the `N` rows of
`ValueTally` — the `ORDER BY value` behind the running sum sorts at
`O(N log N)` — and the aggregation over those rows emits a single
value.

**Complexity:** `O(N log N)` time, `O(N)` space.
