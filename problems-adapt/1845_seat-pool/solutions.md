# Solutions — Seat Pool

## Next-Seat Counter plus Min-Heap of Returns

`reserve` must always answer with the smallest free seat number. The direct
model is a min-heap holding every free seat, but that spends `O(n)` memory —
and `O(n)` setup — on seats the caller may never ask for. The `SeatPool`
class exploits the order seats leave in instead: while nothing has been
given back, the pool hands out 1, 2, 3, … one after another, so a single
counter `next_seat` (the largest number ever handed out) already stands in
for the whole untouched tail.

The counter's monotone march is broken by exactly one operation:
`release`. And it is broken by exactly one seat at a time, so that is all
the heap needs to hold. Released seats go into a min-heap `returned`;
`reserve` takes the heap's top when the pile is non-empty, and draws a
fresh seat from the counter otherwise. The guard `returned[0] < next_seat`
is the invariant spelled out in code — everything in the heap was handed
out before the counter reached its current value, so the two sources of
free seats can never offer the same seat twice.

Example 2 traces both sources: with `n = 6`, three reserves hand out
1, 2, 3; releasing 3 and then 1 leaves both in the heap; the next reserve
finds the heap non-empty and takes 1, and the one after takes 3.

Both the Python and Java canonical solutions implement exactly this scheme.
Each operation is one heap push or pop, or a single counter bump, so `10⁵`
mixed calls sit far inside the limits while the structure only ever stores
the seats currently sitting in the pool — the follow-up's request.

**Complexity:** `O(log n)` time per `reserve`/`release` (`O(1)` on the
counter path), `O(r)` space for `r` seats currently released and awaiting
re-reserve.
