# Solutions — Correctable Price Log

## Moment map plus twin lazy heaps

The log is asked two unrelated questions. "Which record is newest?" needs
only a running maximum of moments; "which price does each moment currently
carry?" needs a map from moment to price — a correction is just an
overwrite. `latest` composes the two: the map entry at the running-maximum
moment.

The extrema under correction are the hard part: rewriting an old moment
changes the multiset of live prices, and a heap cannot remove an arbitrary
entry. The `PriceLog` class sidesteps deletion entirely. Every `record`
pushes the pair `(price, moment)` onto a max-heap _and_ a min-heap, and
nothing is ever taken out on correction. An entry is garbage exactly when
the map's price for its moment no longer agrees with the entry — so when
an extremum is requested, the top is peeked and, while it disagrees with
the map, popped and dropped.

Equality is all validity requires, not identity: a price corrected away
and later written back revives nothing wrongly, because a duplicate of a
live pair simply reports the same extremum. Each pushed entry is popped at
most once over the run, so the lazy cleanup amortizes into the pushes, and
both heaps sit comfortably inside the `10⁵`-call budget.

Both the Python and Java canonical solutions implement exactly this scheme
(the Java version stores each record as an `int[] {price, moment}` ordered
by price through the heap comparators).

**Complexity:** `O(1)` for `latest`, `O(log n)` amortized per `record` or
`highest`/`lowest` call, `O(n)` space for `n` records.
