# Smallest Number Present in Both

## Description

You are given two integer arrays, `nums1` and `nums2`, each already
sorted in non-decreasing order. Find the smallest number that shows up
in both of them, or return `-1` when the two arrays share nothing.

A number counts as shared as soon as each array contains at least one
copy of it.

### Example 1

```text
Input: nums1 = [3,7,12], nums2 = [5,7,20]
Output: 7
Explanation: The value 7 appears in both arrays and nothing smaller
does, so the answer is 7.
```

### Example 2

```text
Input: nums1 = [10,20,30,40], nums2 = [15,30,45]
Output: 30
Explanation: The arrays share exactly one value, 30, so that is the
smallest — and only — candidate.
```

### Example 3

```text
Input: nums1 = [1,4,9], nums2 = [2,3,8]
Output: -1
Explanation: No value occurs in both arrays, so the answer is -1.
```

### Constraints

- `1 <= nums1.length, nums2.length <= 10⁵`
- `1 <= nums1[i], nums2[j] <= 10⁹`
- `nums1` and `nums2` are each arranged in non-decreasing order.

## Hints

### Hint 1

Pour one array's values into a set; a single membership test then
settles each element of the other array.

### Hint 2

Because both arrays are sorted, two front pointers suffice: whichever
front value is smaller can never be matched further ahead, so it can be
discarded until the fronts tie or a side runs dry.
