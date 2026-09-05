# Solutions — Adjacent Open Seats II

## Islands by seat number minus row number, keep every maximal island

Consecutive open seats form islands, and the classic gaps-and-islands
key finds them in one scan: within the open rows ordered by
`seat_number`, subtract each row's `ROW_NUMBER()` from its seat number.
Seats 2, 3 number off as 2-1=1, 3-2=1 — a constant inside an island
that always steps up by one whenever a taken seat (or the table edge)
interrupts the stretch. Grouping by that constant collapses each block
to its inclusive endpoints via `MIN`/`MAX` and its length via `COUNT`.

Selecting the winners is then a self-referential filter: keep exactly
those groups whose length equals `MAX(run_length)` over all groups,
which — per the statement's tie rule — emits _every_ block sharing the
longest length rather than one. Rows already aggregate sorted by their
group key; an explicit `ORDER BY first_seat_number` makes the required
ascending endpoint order total regardless of island numbering quirks.

**Complexity:** `O(S log S)` time, `O(S)` space — `S` seats scanned
once for numbering, grouped, and filtered over the far smaller set of
blocks.
