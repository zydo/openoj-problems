# Solutions — Spread Seating

## Priority Queue over Gaps, with Lazy Deletion

The row is huge and the crowd is small, so the object should never think
about seats — it should think about the **gaps** between the people already
seated. Write a gap as the pair `(l, r)` of taken seats that bound it, and put
imaginary occupants at `-1` and `n` so the two ends of the row are ordinary
gaps too. That pair determines everything `assign` needs to know:

- an interior gap offers its midpoint `(l + r) / 2`, scoring `(r - l) / 2`;
- the gap at the left end offers seat `0`, scoring `r`;
- the gap at the right end offers seat `n - 1`, scoring `n - 1 - l`.

A gap is worth recording only when a free seat actually lies strictly between
its bounds, that is when `r - l >= 2`.

`assign` therefore reduces to "serve the best gap", where best means the
larger score and, on a tie, the smaller candidate seat. A priority queue
keyed on `(-score, candidate)` answers that in logarithmic time. Seating
someone at `s` inside `(l, r)` retires that gap and registers `(l, s)` and
`(s, r)`. A `vacate(p)` retires the two gaps that touch `p` and registers
their union `(prev, next)`, which is exactly the gap structure the remaining
occupants imply. An empty row keeps no gaps at all; the next `assign` returns
seat `0` directly.

The awkward part is that gaps die in the middle of the queue, which no heap
supports. The fix is to leave the dead entries where they are and remember
which pairs are alive in a hash set. When `assign` pops an entry whose pair is
no longer in the set, it is debris from an earlier shape of the row and is
discarded. Nothing subtler is needed, because a gap's candidate and score are
a pure function of `(l, r)` — a leftover entry for a pair that happens to be
alive again describes precisely the same offer as a freshly pushed one would.

Occupancy itself is kept as a sorted list of taken seats, which is what lets
`vacate` find the neighbours of `p` by binary search. Both reference
implementations, Python and Java, are that structure and nothing more. The
call budget is `10⁴`, and the number of live gaps never exceeds the number of
people seated plus one, so the queue stays small; `n` reaching `10⁹` costs
nothing, since no part of the design is proportional to the width of the row.

**Complexity:** amortised `O(log k)` per call for the queue work, plus `O(k)`
for keeping the occupant list sorted, with `k` the number of people seated;
`O(k)` space.
