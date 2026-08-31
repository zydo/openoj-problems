# Common Values II

## Description

Given two integer arrays `nums1` and `nums2`, produce their shared values as
a multiset. A value appears in the answer as many times as the smaller of its
two input frequencies.

Return the answer in ascending order so that its representation is unique for
this judge.

### Example 1

```text
Input: nums1 = [6,2,6,1], nums2 = [6,6,6,2]
Output: [2,6,6]
Explanation: The value `6` can be used twice, while `2` can be used once.
```

### Example 2

```text
Input: nums1 = [4,4,5], nums2 = [4,5,5]
Output: [4,5]
```

### Example 3

```text
Input: nums1 = [1,1], nums2 = [2,2]
Output: []
```

### Constraints

- Both arrays have between `1` and `1000` entries.
- Every entry in `nums1` and `nums2` is an integer from `0` through `1000`.

### Follow-up

- How could sorted inputs be handled without a hash map?
- If one array is much shorter, which array should supply the stored counts?
- How can the approach work when the second array is read in chunks from disk?
