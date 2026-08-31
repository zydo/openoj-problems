# Solutions — Adjacent Open Seats

## Inspect the two ordered neighbors

The windowed subquery sorts `AuditoriumSeats` by `seat_number` and carries
the preceding and following seat number and open flag onto every row. A row
survives only when it is open and either neighboring row is also open with a
seat number exactly one away.

The equality tests rule out gaps in seat numbers: rows next to each other in
the sorted stream are not necessarily physically adjacent. Conversely, every
seat in an open run of two or more sees at least one qualifying neighbor.

One sort supports all four window expressions; the final result is only a
subset of the input rows.

**Complexity:** `O(n log n)` time, `O(n)` space.
