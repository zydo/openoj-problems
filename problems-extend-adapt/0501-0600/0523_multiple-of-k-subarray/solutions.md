# Solutions — Multiple-of-K Subarray

## Prefix remainders, first occurrence kept

A subarray sum is a difference of two prefix sums, and a difference is a
multiple of `k` exactly when its two endpoints leave the same remainder mod
`k`. So the scan keeps only the running remainder — never the prefix array —
plus a map from each remainder to the first index it was seen at. When the
current remainder already sits in the map at index `j` while the scan is at
`index`, the elements between them sum to a multiple of `k`, and the answer
turns on the one remaining rule: the span `index - j` must reach two. Keeping
the _first_ occurrence is what makes that test honest — every later repeat
spans less, so overwriting could only turn a qualifying span into a
non-qualifying one, never the reverse. With more prefixes than remainders
(`n + 1 > k`) some remainder must repeat by pigeonhole, but a repeat alone is
not enough: adjacent equal remainders still fail the length rule.

The map is seeded with remainder `0` at index `-1`, standing for the empty
prefix before any element. That single seed carries two rules of the
statement. Spans starting at index `0` become ordinary map hits — example
2's `[5, 3]` is certified this way, against the seed rather than against a
later index. And because `0` is a multiple of every `k`, a zero-sum pair
like `[0, 0]` is certified directly against the seed too, no special case
needed. `k = 1` also needs no branch: every remainder is `0`, so the second
element already spans two from the seed, and every array of length at least
two qualifies.

Values reach `10⁹` and `k` reaches `2³¹ - 1`, so the fixed-width ports take
each mod in a 64-bit register before the remainder lands back in range; the
statement guarantees `k >= 1`, so the modulo itself is always safe. An array
of length one never offers a pair of prefixes two apart and falls through to
`false`.

**Complexity:** `O(n)` time, `O(min(n, k))` space.
