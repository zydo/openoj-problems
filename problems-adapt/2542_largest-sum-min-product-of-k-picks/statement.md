# Largest Sum-Min Product of K Picks

## Description

You are given two integer arrays `nums1` and `nums2`, both of length `n`, and
a positive integer `k`.

Pick exactly `k` distinct positions from `0` to `n - 1`. Your score is the
sum of the `nums1` entries at those positions, multiplied by the smallest of
the `nums2` entries at those positions:

```text
score = (nums1[i0] + nums1[i1] + ... + nums1[ik-1]) * min(nums2[i0], nums2[i1], ..., nums2[ik-1])
```

Return the highest score any choice of `k` positions achieves.

### Example 1

```text
Input: nums1 = [2,4,4,3], nums2 = [3,1,4,5], k = 3
Output: 27
Explanation: The four ways to pick three positions score:
- 0, 1, 2: (2+4+4) * min(3,1,4) = 10
- 0, 1, 3: (2+4+3) * min(3,1,5) = 9
- 0, 2, 3: (2+4+3) * min(3,4,5) = 27
- 1, 2, 3: (4+4+3) * min(1,4,5) = 11
The best is 27.
```

### Example 2

```text
Input: nums1 = [3,1,4,2,5], nums2 = [6,9,7,8,5], k = 1
Output: 28
Explanation: With one pick the score is a single product; the largest is
4 * 7 = 28, beating even the 9 in nums2 (whose nums1 partner is only 1).
```

### Example 3

```text
Input: nums1 = [5,1,6,2], nums2 = [2,9,3,8], k = 2
Output: 24
Explanation: Position 2 carries the best nums1 value (6), but keeping the
minimum at 3 caps the product at (6+2) * 3 = 24. Pairing position 1 (nums1
only 1, nums2 high) with position 3 also reaches 24, and no pair does better.
```

### Constraints

- `n == nums1.length == nums2.length`
- `1 <= n <= 10^5`
- `0 <= nums1[i], nums2[j] <= 10^5`
- `1 <= k <= n`

## Hints

### Hint 1

The second factor is a minimum, and minima are awkward to maximize directly.
Enumerate instead: which position *supplies* the minimum?

### Hint 2

Order the positions by their `nums2` value, largest first, and sweep. While
standing on a position with value `b`, every position already passed has
`nums2 >= b` — so if this position supplies the minimum, its companions must
come from what has been passed.

### Hint 3

Given that the minimum is fixed at `b`, the companions should simply be the
largest available `nums1` values among the passed positions. Keep the top `k`
of them in a min-heap alongside a running sum.

### Hint 4

Each time the heap holds a full `k` values, multiply its sum by the current
`b` and take the best over the whole sweep.
