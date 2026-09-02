# Twice-Listed Values

## Description

You are given three lists of integers, `nums1`, `nums2`, and `nums3`.
Collect every value that is listed in at least two of the three lists. A
value that repeats inside a single list gains nothing from those extra
repetitions — only the number of distinct lists holding it matters. Return
each qualifying value once, sorted in ascending order.

### Example 1

```text
Input: nums1 = [4,7,4,9], nums2 = [9,3], nums3 = [7,3,3]
Output: [3,7,9]
Explanation: The qualifying values are:
- 3, held by nums2 and nums3.
- 7, held by nums1 and nums3.
- 9, held by nums1 and nums2.
```

### Example 2

```text
Input: nums1 = [5], nums2 = [6], nums3 = [5,6]
Output: [5,6]
Explanation: 5 appears in nums1 and nums3; 6 appears in nums2 and nums3.
```

### Example 3

```text
Input: nums1 = [8,8,15], nums2 = [2,2,2], nums3 = [15]
Output: [15]
Explanation: Only 15 is held by more than one list (nums1 and nums3). The
duplicates of 8 in nums1 and of 2 in nums2 do not help them qualify.
```

### Constraints

- `1 <= nums1.length, nums2.length, nums3.length <= 100`
- `1 <= nums1[i], nums2[j], nums3[k] <= 100`

## Hints

### Hint 1

The values are bounded and small. Can you record, for each value, which of
the three lists contain it?

### Hint 2

A value qualifies as soon as the number of distinct lists holding it reaches
two — a small bitmask per value answers that in constant time.
