# Solutions — Count Equal-XOR Splits

## Prefix xor with hash maps

The halves match exactly when xoring them together gives zero, i.e. when the
whole stretch xors to zero. So the split count is really a fact about zero-xor
stretches: a stretch of length `L` that xors to zero admits exactly `L - 1`
cuts, since cutting anywhere inside leaves two halves whose xors agree.

Let `P` be the running prefix xor, with `P(-1) = 0` for the empty prefix. The
stretch from `i` to `k` xors to zero exactly when `P(k) == P(i - 1)`, so every
pair of equal prefix values at earlier position `p` and later position `q`
closes `q - p - 1` splits. Summing those over all pairs is the answer.

Rather than comparing all pairs of positions, one pass keeps two dictionaries
keyed by prefix value: how many times the value has appeared, and the total of
`index + 1` over its appearances. When the prefix after position `j` has been
seen before, adding `j * count - index_sum` is algebraically the same as
summing `j - p - 1` over every earlier `p` with that value. Both dictionaries
are then updated for the current position, and they are seeded with the empty
prefix (value 0, count 1, index sum 0) so stretches starting at index 0 are
counted too.

Each split is counted exactly once, because a split is pinned down by its outer
pair `p = i - 1`, `q = k` and its cut `j`, and the formula enumerates exactly
those. Values reach `10^8`, but only `n + 1` prefix values ever exist, so the
maps stay small. For `arr = [2,6,4,2,6]`, the prefix 2 repeats at positions 0
and 3 and the prefix 4 repeats at 1 and 4, alongside the zero from the empty
prefix repeating at position 2 — three stretches of length 3, six splits.

**Complexity:** `O(n)` time, `O(n)` space.
