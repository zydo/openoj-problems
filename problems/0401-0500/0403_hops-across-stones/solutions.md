# Solutions — Hops Across Stones

## DP over stone and hop-length pairs

Knowing where the marker stands says nothing useful on its own, because the
three lengths it may choose next are derived from the length that brought it
there. The state therefore has two components, and the table records the second
one per stone: `jumps[i]` holds every hop length capable of finishing on stone
`i`. Seeding `jumps[0] = {0}` encodes the opening rule neatly — the only
successor of a zero-length arrival is a hop of one. The sweep then runs over the
stones in order, expanding each `(stone, length)` pair into its three
candidates and consulting a position-to-index map to learn whether a candidate
position holds a stone at all.

![Eight stones drawn on a line at positions 0, 1, 3, 5, 8, 11, 13, and 15, with six arcs above them for hops of 1, 2, 2, 3, 3, and 4; consecutive arc lengths differ by no more than one, and the arc out of position 11 passes over the hollow stone at 13 to reach the last one.](figures/solution-hop-arcs.svg)

Ordering works out for free. Positions increase strictly and every hop is at
least one unit, so a landing always falls on a later index than the one being
expanded; by the time the sweep reaches index `i`, nothing can add to
`jumps[i]` any more. Crossing succeeds precisely when the last stone's set ends
up non-empty.

The table stays affordable for a structural reason rather than a lucky one: a
length grows by at most one per landing, so after `i` landings it is bounded by
`i`. Each stone thus carries at most `n` distinct lengths, every
`(stone, length)` pair is inserted once, and 2000 stones keep the whole thing
well inside the limits.

The awkward inputs handle themselves. When nothing sits at position 1 the
opening hop has nowhere to go, every set past the first stays empty, and the
answer comes out false. Candidate lengths of zero or less are skipped before
the lookup, candidate positions that fall in the gaps between stones simply
miss the map, and re-inserting a length already present costs nothing.

**Complexity:** `O(n²)` time, `O(n²)` space in the worst case, for the
per-stone length sets.
