# Solutions — Value History Store

## Hash-Map of Histories with Binary Search

Two independent questions hide inside a read: _which_ key, and _when_. Handling
them with two separate structures keeps each one cheap.

The "which" half is a plain hash map from key to that key's own record of
writes — parallel `values` and `stamps` lists. A read for `"ip"` never looks at
anything written under `"r2"`, so the size of the store as a whole drops out of
the cost entirely.

The "when" half needs the list to be ordered by moment, and here the problem
hands us the ordering for nothing: `set` is promised strictly growing moments,
so a plain append leaves every history sorted the instant it is written. No
insertion point to find, no re-sorting, no balanced structure.

With a sorted history in hand, the read is a boundary search. Locate the first
entry whose moment exceeds `timestamp` — `bisect_left(stamps, timestamp + 1)`
in Python, an explicit halving loop narrowing `[low, high)` in Java — and step
back one place. That neighbour is by construction the newest write that is not
too new.

The two "nothing to report" situations turn out to be one situation. A key that
was never written has an empty history; a read that predates every write for
its key lands at position zero. Both leave no entry to step back into, and both
answer `""`.

The Python and Java references are the same structure in two dialects. With the
call budget at `2 * 10⁵`, an amortized constant-time append per write and a
logarithmic search per read leave the limits untroubled.

**Complexity:** `O(1)` amortized per `set`, `O(log n)` per `get` where `n`
counts the writes to that one key, `O(n)` space over all writes.
