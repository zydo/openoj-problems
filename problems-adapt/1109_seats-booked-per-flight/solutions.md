# Solutions — Seats Booked per Flight

## Difference Array and Prefix Sum

A booking adds one constant across a run of consecutive flights, which is
the arrangement the difference array exists for: rather than walking the
range, stamp `+seats` at slot `first - 1` and `-seats` at slot `last` — the
zero-based position immediately past the range's end. Once every booking
has stamped its pair, a single accumulating sweep left to right emits each
flight's occupancy, since a `+/-` pair contributes its seats to exactly the
slots between the stamps and nowhere else.

The code allocates `n + 1` slots so the stamp at index `last` is in bounds
even when `last == n`; the sweep reads only the first `n`, so the extra
slot is write-only. The one-past-the-end offset is what encodes the
inclusive semantics: flight `first` meets its `+seats` on the very step
that stamp is absorbed, and flight `last` still sees the seats because the
cancelling stamp sits one slot later.

Each booking therefore costs two writes instead of a walk proportional to
its length, turning the whole computation into stamp-then-sweep. Overlaps
need no special care — addition commutes — and the totals stay far inside
32-bit range (at most `2 * 10^4` bookings of `10^4` seats each).

**Complexity:** `O(B + n)` time, `O(n)` space, for `B` bookings over `n`
flights.
