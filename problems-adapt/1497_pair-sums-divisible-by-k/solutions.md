# Solutions — Pair Sums Divisible by k

## Remainder Frequency Counting

Whether two values add to a multiple of `k` depends only on their
remainders: class `r` matches class `k - r`, and class `0` matches itself.
Since each value belongs to exactly one pair, the whole question becomes
whether the remainder classes pair off cleanly — and once the classes are
matched, any pairing inside them will do, so no search over actual pairs
is ever needed.

The pass starts by tallying `x mod k` across the array; Python's `%`
already returns a value in `0 … k - 1` for negative `x`, so the classes
come out right without extra normalization — in `[-2, 2, -5, 5]` with
`k = 3`, both `-2` and `-5` land in class `1`, both `2` and `5` in class
`2`, and the two classes balance. The class holding multiples of `k` can
only pair within itself, so its tally must be even. Every other class `r`
is then checked against its complement `k - r` for equal tallies, `r`
running up to half of `k`.

When `k` is even, the loop's last step meets the self-matching middle
class `r = k / 2`, whose comparison degenerates into an identity — nothing
seems enforced. But nothing is lost either: that class's tally is forced
even by the others, since the array length is even, class `0` was already
required even, and each strictly complementary pair of classes holds an
even total between them. An odd middle tally would contradict those
parities — this is exactly what sinks `[2, 4, 6, 8]` with `k = 6`, where
the lone multiple of 6 sits unmatched in class 0. With `k = 1` every value
collapses into class `0`, and the single evenness check decides it.

**Complexity:** `O(n + k)` time, `O(k)` space.
