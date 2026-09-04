# Shift Amount Between Arrays I

## Description

You are given two integer arrays, `nums1` and `nums2`, of equal length.

Every element of `nums1` was shifted by the same integer `x` — the
value was added to it, and a negative `x` shifts downward. After the
shift, `nums1` matches `nums2`: the two arrays hold the same values
with the same frequencies, order being irrelevant.

Return the shift amount `x`. The input guarantees that some `x` with
this effect exists.

### Example 1

```text
Input: nums1 = [4,8,12], nums2 = [7,11,15]
Output: 3
Explanation: Adding 3 to every element of nums1 produces exactly the
values of nums2.
```

### Example 2

```text
Input: nums1 = [9], nums2 = [3]
Output: -6
Explanation: A lone element shifts by x = -6.
```

### Example 3

```text
Input: nums1 = [5,5,5], nums2 = [2,2,2]
Output: -3
Explanation: Identical values shift together, here down by 3.
```

### Constraints

- `1 <= nums1.length == nums2.length <= 100`
- `0 <= nums1[i], nums2[i] <= 1000`
- Some integer `x` turns `nums1` into `nums2` when added to each of
  its elements.

## Hints

### Hint 1

Sorting both arrays lines them up element for element: the i-th
smallest of `nums1` plus `x` must equal the i-th smallest of `nums2`.

### Hint 2

A single pair already pins `x` down, so the two minima suffice:
`x = min(nums2) - min(nums1)`.
