# Counting Divisible Pairs II

## Description

Two integer arrays `nums1` (length `n`) and `nums2` (length `m`) are
given, along with a positive integer `k`.

Call a pair of indices `(i, j)` fitting when `nums1[i]` is divisible by
`nums2[j] * k`, with `0 <= i <= n - 1` and `0 <= j <= m - 1`.

Return how many fitting pairs the two arrays contain. Both arrays can
be far too long to compare element against element, so the counting
has to be organized by value rather than by position.

### Example 1

```text
Input: nums1 = [4,8,12,7], nums2 = [2,4,3], k = 2
Output: 5
Explanation:
The candidate divisors are 4, 8, and 6. Three values of nums1 (4, 8,
12) are divisible by 4, while only 8 divides by 8 and only 12 divides
by 6 — 3 + 1 + 1 = 5 pairs.
```

### Example 2

```text
Input: nums1 = [5,10,25], nums2 = [1,5], k = 1
Output: 6
Explanation:
Every element of nums1 is divisible by 1 (3 pairs), and all three are
also divisible by 5 (3 more), for 6 in total.
```

### Example 3

```text
Input: nums1 = [6,6,18], nums2 = [3,3], k = 2
Output: 6
Explanation:
The single distinct divisor is 6, matched by all three values of
nums1; each of the two copies of 3 in nums2 collects those 3 pairs,
doubling the count.
```

### Constraints

- `1 <= n, m <= 10⁵`
- `1 <= nums1[i], nums2[j] <= 10⁶`
- `1 <= k <= 10³`

## Hints

### Hint 1

Tally how often each value occurs in both arrays; identical values
behave identically, so positions stop mattering.

### Hint 2

For each distinct base `b` in nums2, every multiple of `b * k` present
in nums1 pairs with all copies of `b` — walking the multiples of
`b * k` through a frequency table answers a whole base at once.

### Hint 3

The walks cost `V/1 + V/2 + ...` over all bases, a harmonic total of
about `V log V` steps for `V = max(nums1)` — no per-value
factorization needed.
