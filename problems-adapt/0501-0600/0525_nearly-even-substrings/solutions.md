# Solutions — Nearly Even Substrings

## Prefix parity bitmasks

A substring is nearly even when no more than one letter occurs an odd
number of times inside it. Parity is the only thing that matters, and
with the alphabet capped at the ten letters 'a' through 'j', the parity
vector of any prefix packs into a 10-bit mask. A substring cut out by the
prefixes with masks `P` (before it) and `Q` (after it) carries parity
vector `P XOR Q`, so it is nearly even exactly when `P == Q` (every
letter even) or `P XOR Q` holds a single set bit (precisely one odd
letter). Counting the substrings thus becomes counting earlier prefix
masks equal to the current one or one bit away from it.

The sweep passes over the string once, keeping the running mask in `mask`
beside a `count` table of 1024 entries indexed by mask, seeded with
`count[0] = 1` for the empty prefix. Each character toggles its bit, adds
`count[mask]` (both boundary masks alike), then adds
`count[mask ^ (1 << b)]` over the ten single-bit variants, and only then
increments `count[mask]` — delaying the increment means every counted
pair is ordered, so each substring is tallied exactly once.

The empty-prefix seed is what admits substrings beginning at index 0, and
the ten-letter bound is what holds the inner loop at a constant ten
iterations instead of another alphabet scan. Long inputs push the total
past 32 bits, which Python's integers absorb natively. Example 3 is the
degenerate check: a run of identical j's leaves the mask either 0 or one
bit, and every one of the six substrings passes.

**Complexity:** `O(10·n)` time, `O(2^10)` space.
