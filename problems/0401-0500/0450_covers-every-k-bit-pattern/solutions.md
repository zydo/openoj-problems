# Solutions — Covers Every K-Bit Pattern

## Distinct-window set with early exit

Exactly `2^k` bit strings of length `k` exist, and `s` shows all of them
precisely when its distinct `k`-character stretches number `2^k`. The string
offers only `len(s) - k + 1` windows, so the whole task is collecting distinct
windows and watching the count.

The code slides across every starting index, drops each `k`-character slice
into a hash set, and returns true the instant the set reaches `2^k` entries —
with small `k`, the patterns run out well before the string does, and the
early exit saves the rest of the scan. A scan that ends below the target
returns false, and a string shorter than `k` is rejected outright: it cannot
host even one pattern of that width.

Slices are stored as-is rather than folded into `k`-bit integers, keeping the
logic minimal at the price of `k` characters per entry. The set is capped by
the smaller of the window count and `2^k`, so memory stays modest even at the
largest inputs, and a true verdict never allocates more than `2^k` strings
thanks to the early exit. For `"100110"` with `k = 2`, the windows 10, 00, 01
and 11 complete the set by the fourth insertion.

**Complexity:** `O(n · k)` time, `O(min(n, 2^k) · k)` space.
