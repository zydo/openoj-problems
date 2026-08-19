# Solutions — Design a Packet Buffer

## FIFO Queue With Per-Destination Timestamp Logs

Keep three views over the same set of stored packets: the arrival queue, a
membership set of stored triples for refusing duplicates, and an append-only
timestamp log per destination for range counting. `receive` checks membership,
makes room when the queue is at capacity, then writes into all three; a
departure — whether a capacity eviction or a `dispatch` — removes the oldest
packet from the queue and reflects that loss in the other two views.

No sorting is ever needed. Because arrivals carry non-decreasing timestamps,
each destination's log is sorted by construction, so `countInWindow` reduces
to `upperBound(endTime) - lowerBound(startTime)` over it.

The trap is deletion. Splicing an entry out of the middle of a list costs a
shift, but the only packet that ever leaves is the globally oldest — which,
inside its own destination's log, is the first live entry. Live entries
therefore always form a contiguous suffix, and each destination can carry a
`head` index that advances by one whenever its oldest stored packet departs,
leaving the list itself untouched. Logs then grow only with the number of
receives, and each operation is a few constant-time touches plus at most one
binary search.

The Python and Java canonical solutions follow exactly this layout. The
Python one keys the membership set on `(source, destination, timestamp)`
tuples and passes `lo=head` to the bounds functions; the Java one nests a
timestamp set under the packed `(source, destination)` pair (a long key) and
hand-rolls both bounds over `[head, size)`.

**Complexity:** `O(1)` amortized per `receive`/`dispatch`, `O(log n)` per
`countInWindow`, `O(a)` space for `a` received packets.
