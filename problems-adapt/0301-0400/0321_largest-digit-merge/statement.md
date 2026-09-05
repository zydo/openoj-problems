# Largest Digit Merge

## Description

You are given two integer arrays, `nums1` of length `m` and `nums2` of
length `n`, each holding the digits of a number in order (most significant
digit first). You are also given an integer `k`.

Build the largest possible `k`-digit number by pulling digits from `nums1`
and `nums2` and interleaving them, subject to one rule: the digits taken
from the same source array must keep the relative order they had in that
array. Digits from the two arrays may be interleaved in any way.

Return the resulting `k` digits as an array.

### Example 1

```text
Input: nums1 = [5,2,8,1], nums2 = [7,3,9,4,1], k = 4
Output: [9,8,4,1]
```

### Example 2

```text
Input: nums1 = [5,9], nums2 = [5,2,6], k = 5
Output: [5,9,5,2,6]
```

### Example 3

```text
Input: nums1 = [4,8], nums2 = [3,1,9], k = 4
Output: [8,3,1,9]
```

### Constraints

- `m == nums1.length`
- `n == nums2.length`
- `1 <= m, n <= 500`
- `0 <= nums1[i], nums2[i] <= 9`
- `1 <= k <= m + n`
- `nums1 and nums2 do not have leading zeros.`
