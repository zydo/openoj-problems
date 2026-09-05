# Solutions — Number Pool Directory

## Used set, fresh counter, released min-heap

The directory keeps three small structures: a used set of the numbers
currently assigned, a `next` counter pointing at the smallest number never
yet handed out, and a min-heap of the numbers that were assigned and later
released. `acquire` pops the heap's minimum when one exists and only otherwise
mints `next`; since every released number is smaller than every fresh one,
that pop is exactly the pinned policy — the smallest available number — and
once both sources run dry, `acquire` answers `-1`. `isAvailable` is a single set
lookup, and the counter needs no bookkeeping of its own because fresh
numbers are minted in ascending order.

The used set also carries the correctness of `returnNumber`. A number is pushed
onto the heap only when `returnNumber` takes it out of the used set, so
releasing a number that is already available — a double returnNumber, or one
that was never assigned — is a no-op, and no number can ever sit in the
heap twice or be handed out twice. The example runs the discipline end to
end: `acquire` answers 0, then 1; `isAvailable(2)` is true until `acquire` takes the 2
and false after; `returnNumber(2)` puts it back, and the final `isAvailable(2)` is
true again.

**Complexity:** `O(log R)` per `acquire` and per `returnNumber`, with `R` the
released numbers waiting in the heap; `O(1)` per `isAvailable`; `O(n)` space for
`n` = `maxNumbers` slots.
