# Common Values

## Description

Given integer arrays `nums1` and `nums2`, return the distinct values that
occur in both arrays. Each shared value belongs in the result once, regardless
of how many times it occurs in either input.

Return the result in ascending order. This makes the otherwise unordered set
answer deterministic for this judge.

### Example 1

```text
Input: nums1 = [6,1,6,3], nums2 = [3,3,6,9]
Output: [3,6]
```

### Example 2

```text
Input: nums1 = [8,2], nums2 = [7,5]
Output: []
Explanation: The arrays have no value in common.
```

### Example 3

```text
Input: nums1 = [0,4,4], nums2 = [4,0,6]
Output: [0,4]
```

### Constraints

- Both `nums1` and `nums2` contain from `1` to `1000` elements.
- Each element of either array is between `0` and `1000`, inclusive.
