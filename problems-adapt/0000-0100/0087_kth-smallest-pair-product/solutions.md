# Solutions — Kth Smallest Pair Product

## Binary search on the value with sign-aware counting

Count, for any candidate `v`, how many pairs `(i, j)` have
`nums1[i] * nums2[j] <= v`. That count never decreases as `v` rises, and
the k-th smallest product is the least `v` whose count reaches `k` —
attained by an actual pair, so the search lands on a real product without
ever listing one. Products fit inside roughly `±10^10`, which brackets the
search interval.

The count itself sweeps `nums1` once. Fix `x = nums1[i]`; because `nums2`
is sorted, the values `y` with `x * y <= v` form a contiguous run whose
edge one binary search finds. The sign of `x` picks the direction. When
`x > 0`, the inequality rearranges to `y <= floor(v / x)` — a prefix, its
length given by an upper-bound search. When `x < 0`, dividing by `x`
flips the comparison to `y >= ceil(v / x)` — a suffix, and the ceiling
division needs a helper that stays correct for negative operands under
Python's floored division. When `x = 0` every product is `0`, so the whole
row of `len(nums2)` pairs counts precisely when `v >= 0`.

Take `nums1 = [-4,1,2]`, `nums2 = [-3,0,2]`, `k = 2`, and probe `v = -6`:
for `x = -4`, qualifying `y` satisfy `y >= ceil(-6 / -4) = 2`, a suffix of
length 1; for `x = 1`, `y <= -6` gives none; for `x = 2`, `y <= -3` gives
one. The count is 2, so the answer is at most -6 — and probing `-7`
counts only the single pair `(-4)·2 = -8`, proving -6 is exactly second
smallest.

Each probe costs one sweep of `nums1` with a logarithmic search inside
`nums2`, and the interval closes in about `log2(2 · 10^10) ≈ 35` probes.
Zeros, duplicates, and mixed signs all fall out of the same three-way
branch.

**Complexity:** `O(m log n log V)` time, `O(1)` space.
