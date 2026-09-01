# Solutions — Circuit Champions

The wins live in four separate columns of `Finals`, one row per year,
and the answer needs each coder's total across all of them plus the
coder's handle — so the shape is an unpivot into one row per win,
followed by a grouped count joined back to `Coders`.

## Unpivot then count

Each `Finals` row holds four winner ids, so a `UNION ALL` over
four single-column `SELECT`s rebuilds the implicit one-row-per-win
table. `UNION ALL` rather than `UNION` is load-bearing: duplicates must
survive, because a coder who sweeps all four finals of one year
has won four titles, not one. Joining that stream to `Coders` on
`coder_id` — an inner join — carries the handle onto every win row and
drops the coders who never appear as a winner, which is exactly the
required exclusion; each lookup probes the table's primary key.
`GROUP BY coder_id, handle` collapses each coder's win rows
into one group (the handle rides along so the selection stays valid under
strict grouping), and `COUNT(*)` — one per surviving win row — is the
count. The result order is free under the multiset comparison.

With `t` win entries (four per `Finals` row) and `p` coders,
the unpivot emits `t` rows, each resolved through the primary-key index,
and the grouping sorts them once.

**Complexity:** `O(t log p)` time, `O(p)` space.
