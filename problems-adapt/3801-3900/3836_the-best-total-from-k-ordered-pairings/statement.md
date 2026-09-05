# The Best Total From K Ordered Pairings

## Description

You are given two integer arrays, `nums1` of length `n` and `nums2` of
length `m`, together with an integer `k`.

Choose exactly `k` index pairs `(i1, j1), (i2, j2), ..., (ik, jk)` so
that both coordinates advance strictly:

- `0 <= i1 < i2 < ... < ik < n`
- `0 <= j1 < j2 < ... < jk < m`

A pair `(i, j)` earns `nums1[i] * nums2[j]`, and your total is the sum
of the k products. Return the largest total any legal selection can
reach.

### Example 1

```text
Input: nums1 = [2,4,1], nums2 = [3,1,5], k = 2
Output: 26
Explanation: Take (i1, j1) = (0, 0), earning 2 * 3 = 6, and
(i2, j2) = (1, 2), earning 4 * 5 = 20. The total is 6 + 20 = 26, and no
other legal selection does better.
```

### Example 2

```text
Input: nums1 = [-1,3], nums2 = [2,-2,-4], k = 1
Output: 6
Explanation: With a single pair to spend, 3 * 2 = 6 beats every other
product the two arrays can form.
```

### Example 3

```text
Input: nums1 = [5,-5], nums2 = [3,-3], k = 2
Output: 30
Explanation: The only legal selection pairs (0, 0) and (1, 1), scoring
5 * 3 = 15 and (-5) * (-3) = 15 — two negatives multiply into a
positive — for a total of 30.
```

### Constraints

- `1 <= n == nums1.length <= 100`
- `1 <= m == nums2.length <= 100`
- `-10⁶ <= nums1[i], nums2[i] <= 10⁶`
- `1 <= k <= min(n, m)`

## Hints

### Hint 1

Think in prefixes: what is the best total using exactly `t` pairs drawn
from the first `a` entries of `nums1` and the first `b` entries of
`nums2`?

### Hint 2

A state either drops `nums1`'s newest entry, drops `nums2`'s newest
entry, or spends both at once as one pair worth their product — and the
answer is the best of those three.

### Hint 3

Layer the table by the pair count; layer `t` only occupies cells with
`a >= t` and `b >= t`, and two layers at a time are all that survive
between rounds.
