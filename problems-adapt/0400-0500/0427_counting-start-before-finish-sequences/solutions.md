# Solutions — Counting Start-Before-Finish Sequences

## Building the timeline one task at a time

Listing `2n`-event orderings head-on is hopeless; instead splice the two
events of task `i` into a valid timeline built from the first `i − 1` tasks.
Every valid timeline of `i` tasks decomposes uniquely this way — delete
task `i`'s start and finish and what remains is still valid — so the counts
multiply. Say `2(i − 1)` events are standing, which opens `2i − 1` slots:
before the first event, between neighbours, and after the last.

Drop `S_i` into any slot; if it lands in the `p`-th slot from the left, the
finish `F_i` has the `2i − 1 − p` slots to its right available. Summing
over the start's positions gives `1 + 2 + ... + (2i − 1) = i · (2i − 1)`
placements of the pair, so the count obeys
`f(i) = f(i − 1) · i · (2i − 1)`.

The code is that recurrence unrolled from `f(1) = 1`: multiply the
accumulator by `(2i − 1) · i` for each `i` up to `n`, taking the modulus
`10⁹ + 7` at every step so intermediates stay small. Spot values agree:
`f(2) = 1 · 2 · 3 = 6` and `f(3) = 6 · 3 · 5 = 90`.

An accumulator and a loop index suffice — no tables, no memoization — and
`n = 1` skips the loop and returns 1. The modulus is prime, but nothing
here divides, so no inverses are ever needed.

**Complexity:** `O(n)` time, `O(1)` space.
