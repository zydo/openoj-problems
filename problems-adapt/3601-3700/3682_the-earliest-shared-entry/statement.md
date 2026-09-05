# The Earliest Shared Entry

## Description

Two integer arrays `nums1` and `nums2`, both of length `n`, are given.

Call a pair of positions `(i, j)` a match when `nums1[i] == nums2[j]`.
Over every match, return the least possible value of `i + j`; if the two
arrays share no element at all, return `-1`.

### Example 1

```text
Input: nums1 = [2,4,7,4], nums2 = [7,2,4]
Output: 1
Explanation: The shared values are 7, 2 and 4. Value 2 pairs position
i = 0 in nums1 with position j = 1 in nums2 for a sum of 1; 7 manages
2 + 0 = 2 and 4 manages 1 + 2 = 3 (its second copy in nums1 can only do
worse). The least sum is 1.
```

### Example 2

```text
Input: nums1 = [9,9], nums2 = [9,9]
Output: 0
Explanation: Both 9s sit at position 0 of their array, and the earliest
copies already give the smallest possible sum, 0 + 0.
```

### Example 3

```text
Input: nums1 = [1,2], nums2 = [3,4]
Output: -1
Explanation: Nothing appears in both arrays, so the answer is -1.
```

### Constraints

- `1 <= nums1.length == nums2.length <= 10⁵`
- `-10⁵ <= nums1[i], nums2[i] <= 10⁵`

## Hints

### Hint 1

Record, for every value in `nums1`, the earliest position where it occurs
— later copies can never beat the first one.

### Hint 2

Sweep `nums2` once; whenever its current value was recorded, the pair's
sum is that stored position plus the current index `j`.

### Hint 3

Keep the smallest such sum seen across the sweep.

### Hint 4

If the sweep produces no sum at all, the arrays share nothing and the
answer is `-1`.
