# Solutions — Minimum XOR Matching

## Bitmask DP

Because `n <= 14`, the subsets of `nums2` are enumerable — at most `2^14`
of them. Take `dp[mask]` to be the least cost of a partial matching that
pairs the first `popcount(mask)` elements of `nums1` with exactly the
positions of `nums2` that `mask` marks. The popcount is what makes the
state well defined: knowing which slots of `nums2` are consumed already
tells you how long the consumed prefix of `nums1` is, because consuming
`nums1` left to right loses nothing — any perfect matching can be replayed
as a prefix-by-prefix assignment.

Masks are visited in increasing numeric order, which resolves every
dependency in time: clearing any set bit yields a strictly smaller index.
For a mask whose popcount is `i + 1`, the element awaiting a partner is
`nums1[i]`; the code walks the set bits `j` of the mask via the lowbit
trick and keeps the best of `dp[mask without j] + (nums1[i] ^ nums2[j])`.
`dp[0] = 0` seeds the recurrence and the full mask holds the answer.

This is the assignment problem done by exponential dynamic programming —
roughly `2^14 · 14` transitions at the top end, instant in practice.
Repeated values in either array are harmless, since states are indexed by
positions rather than by values. In Example 3 every value can meet its
equal, which is why the optimum there is 0.

**Complexity:** `O(2^n · n)` time, `O(2^n)` space.
