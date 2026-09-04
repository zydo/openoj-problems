# Solutions — Pull From The Recently Used Line

## Square-Root Decomposition

The queue is cut into consecutive blocks of about `sqrt(n)` slots. A
fetch has two jobs — find the `kth` element, then move it to the very
end — and both stay local under the cut. Locating the target walks
whole blocks, subtracting each block's size from `k`, so the scan
touches one length per block instead of one slot per element; lifting
the value out shifts only the remainder of its own block.

The move to the end reuses that locality. The fetched value is appended
to the tail block while it still has room, and rolls into a fresh
single-slot block once the tail is full, so no element ever shifts
across blocks to make room. A block that runs empty is dropped on the
spot — every surviving block holds at least one element, and within the
statement's call budget at most one new block appears per full tail, so
the block count stays a small multiple of the initial `n / sqrt(n)` and
the next walk costs `O(sqrt(n))` again.

Construction fills the blocks with `1..n` in one pass, and the queue
never grows or shrinks — each fetch moves an existing element — so the
blocks carry exactly `n` values in linear space.

**Complexity:** `O(√n)` time per fetch, `O(n)` space.
