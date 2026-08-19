# Solutions — Lowest Free Chair Number

## Two-Heap Simulation in Arrival Order

Run the party as a chronology. Guests are handled sorted by arrival instant
(distinct, per the constraints), and each arrival poses two questions that
must be answered fast: whose chairs have been vacated by now, and which free
label is smallest? Two min-heaps split the work — `occupied` stores
`(leaving_time, chair)` pairs so the earliest departures rise first, `free`
stores chair numbers so the smallest label rises first — and a `next_chair`
counter mints fresh numbers only when nothing is free, which is precisely
the unlimited-chairs rule.

Before seating each arrival the code drains every `occupied` entry whose
departure time has arrived (`<=`), moving those chairs into `free`. The `<=`
is load-bearing: a guest who walks in at the same instant another leaves
inherits the chair, as Example 1 shows with the double release at instant 5
and Example 3 with the handoff at instant 3. The arriving guest then pops
`free`'s minimum when available, otherwise takes the next never-used number,
and re-enters `occupied` keyed by this guest's own departure.

The loop returns the moment the target guest is seated — arrivals after
theirs cannot matter (the trailing `return -1` just keeps the function
total). Chairs are minted only on demand, so labels stay below `n` and both
heaps hold at most `n` entries; each chair cycles through each heap at most
once per seating, giving a bounded amortized number of heap operations per
guest.

**Complexity:** `O(n log n)` time, `O(n)` space.
