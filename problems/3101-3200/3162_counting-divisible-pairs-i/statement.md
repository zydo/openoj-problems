# Counting Divisible Pairs I

## Description

Two integer arrays `nums1` (length `n`) and `nums2` (length `m`) are
given, along with a positive integer `k`.

Call a pair of indices `(i, j)` fitting when `nums1[i]` is divisible by
`nums2[j] * k`, with `0 <= i <= n - 1` and `0 <= j <= m - 1`.

Return how many fitting pairs the two arrays contain.

### Example 1

```text
Input: nums1 = [2,6,9,12], nums2 = [1,3], k = 2
Output: 5
Explanation:
The candidate divisors are 2 and 6. Three values of nums1 (2, 6, 12)
are divisible by 2, and two of them (6, 12) are also divisible by 6,
giving 5 pairs in total.
```

### Example 2

```text
Input: nums1 = [5], nums2 = [2], k = 4
Output: 0
Explanation:
The only candidate divisor is 8, which does not divide 5.
```

### Example 3

```text
Input: nums1 = [7,14], nums2 = [1], k = 7
Output: 2
Explanation:
The single candidate divisor is 7, and both 7 and 14 are multiples of
it.
```

### Constraints

- `1 <= n, m <= 50`
- `1 <= nums1[i], nums2[j] <= 50`
- `1 <= k <= 50`

## Hints

### Hint 1

The limits are small enough that testing every combination of one
value from each array is perfectly affordable.
