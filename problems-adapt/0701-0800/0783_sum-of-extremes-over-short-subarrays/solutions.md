# Solutions — Sum of Extremes Over Short Subarrays

## Contribution counting with monotonic stacks

Skip the enumeration and account per element instead: charge `nums[i]` once
for every qualifying subarray in which it is the largest, and once for every
one in which it is the smallest. Four monotonic-stack passes produce the four
spans `L_max`, `R_max`, `L_min`, `R_min` — the number of consecutive elements
usable to each side of `i` before an element takes over the role. Deliberately
asymmetric comparisons (`<=` scanning left, `<` scanning right, for maxima,
and the mirror image for minima) hand each subarray's extreme to exactly one
index even when values repeat.

The length cap is where the arithmetic hides. A subarray whose extreme sits
at `i` picks `a` elements left and `b` right with `0 <= a <= L`, `0 <= b <= R`,
and it qualifies exactly when `a + b <= K`, where `K = k - 1` because the
extreme itself occupies one slot. `_count_pairs(A, B, K)` returns that count
in closed form: when the whole rectangle fits (`A + B <= K`) it is
`(A + 1)(B + 1)`; otherwise a full strip of width `t = K - B` plus an
arithmetic series for the clipped corner. One call per role per element keeps
the sweep linear.

The answer is then `Σ nums[i] · (_count_pairs(L_max[i], R_max[i], K) +
_count_pairs(L_min[i], R_min[i], K))`. Because values can be negative, both
roles must flow through the same machinery — the total itself may come out
negative, and the arithmetic runs in 64-bit range regardless: counts reach
about `k ≤ 8·10⁴` and values `10⁶`, so each term stays far inside `i64`.

On `[2, 4, 3]` with `k = 2` (`K = 1`): the `4` is the maximum of `[2,4]`,
`[4]`, and `[4,3]` and also the minimum of `[4]` — four roles, `4 · 4 = 16`;
the `2` is the minimum of `[2]` and `[2,4]` plus the maximum of `[2]`, three
roles worth `6`; and the `3` plays three roles (`[4,3]`'s minimum, `[3]`'s
both) for `9`. Sixteen, six, and nine add to `31`.

Edge behaviour: `k >= n` switches the cap off and every rectangle fits;
duplicates are divided among indices by the strict/non-strict conditions; and
one-sided spans (`L = 0` or `R = 0`) drop out of the closed form unchanged.

**Complexity:** `O(n)` time, `O(n)` space.
