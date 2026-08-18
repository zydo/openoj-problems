# Solutions — Optimal Stone Smashing

## Subset-Sum Partition (0/1 Knapsack)

The sequence of collisions turns out not to matter, and seeing why converts the
whole puzzle into arithmetic. Whatever survives is built by adding some weights
and subtracting others: give each stone a `+` or a `-`, and the survivor weighs
the absolute value of that signed total. The correspondence runs both ways —
any signing can be realised by smashing the `-` stones into the `+` stones one
after another — so the smallest reachable survivor is exactly the smallest
absolute signed total.

Read the `+` stones as one team and the `-` stones as the other. Their totals
add up to `total`, a fixed number, so a team worth `t` leaves the other worth
`total - t` and the survivor weighs `total - 2 * t`. Minimising that means
maximising `t` under the ceiling `total / 2`, which is the classic 0/1
subset-sum question: of all sums that some subset of the weights can produce,
which is the largest one not above half the pile?

A boolean array indexed by sum answers it. Position 0 starts out attainable and
everything else unattainable; each weight is then folded in by looking at every
index from the ceiling downward and marking an index attainable when the index
minus that weight already was. The downward sweep is the part to get right —
sweeping upward would let a weight be reused within one sum, which would answer
a different question entirely. With every weight folded in, scan down from the
ceiling for the first attainable sum, call it `best`, and report
`total - 2 * best`.

The extremes need no special cases: a lone stone can only put itself on one
team, and the scan finds `best = 0`, returning the stone's own weight; a pile
that splits evenly finds `best` exactly at half and returns `0`. With at most
30 weights of at most 100 each, the array never exceeds 1500 entries.

**Complexity:** `O(n * S)` time, `O(S)` space, with `S` half the combined
weight.
