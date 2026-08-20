# Solutions — Distinct OR Results of Contiguous Segments

## Rolling Set of Suffix ORs

Let `current` contain every distinct OR produced by a segment ending at the
previous index. For a new element `x`, any segment ending here is either the
single element or an earlier ending segment extended by `x`. Therefore update

`current = {x} ∪ {value | x : value in current}`.

Add every refreshed result to one global set. Its final size is the requested
count.

Although there are quadratically many segments, each rolling set stays small.
Extending a segment with bitwise OR never clears a bit, and each distinct
change introduces at least one new set bit. Values up to `10^9` use at most 30
bits, so only about 31 distinct suffix results can coexist.

**Complexity:** `O(n · b)` time and `O(n · b)` space, where `b` is the number
of value bits.
