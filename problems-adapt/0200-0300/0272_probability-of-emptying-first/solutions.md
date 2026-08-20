# Solutions — Probability of Emptying First

## Bottom-up probability DP

Rescale first. Every amount in the statement is divisible by `25`, so measure
the piles in units of `25` and let `m = ceil(n / 25)` be the starting count for
each. Rounding up is right because a partial unit behaves exactly like a whole
one: any move touching it takes it away entirely. In the rescaled world the
four moves subtract `(4, 0)`, `(3, 1)`, `(2, 2)` and `(1, 3)`.

Let `P(a, b)` be the answer starting from counts `a` and `b`. One step averages
over four equally likely successors, so
`P(a, b) = (P(a-4, b) + P(a-3, b-1) + P(a-2, b-2) + P(a-1, b-3)) / 4`, and the
terminal readings are what make the recursion bottom out: a coordinate at or
below zero means that pile is gone. Both gone at once reads `0.5`, `A` gone
alone reads `1`, `B` gone alone reads `0`. Routing every lookup through a small
helper that applies those three readings first is also what implements the
"take whatever is left" rule — a negative index is simply an over-take, and it
resolves to the same terminal.

Filling the table with `a` and `b` both increasing means each cell's four
sources are either already written or terminal, so a single pass of two nested
loops suffices; the answer is the reading at `(m, m)`.

That leaves the size of `n`. Averaged over the four moves, `A` loses `2.5`
units per step against `B`'s `1.5`, so deep piles make an `A`-first finish
overwhelmingly likely and the answer creeps toward `1` from below. Past
`m = 179` the remaining gap is under the `10^-5` tolerance, so the code returns
`1.0` outright and never allocates. The table is therefore at most `178 x 178`
however large `n` is, which is what defuses the `10^9` bound.

**Complexity:** `O(m^2)` time and `O(m^2)` space with `m = min(ceil(n / 25), 179)`
— a constant ceiling, so both are `O(1)` in terms of `n`.
