# Closest Twin Points

## Description

Read two integer arrays `nums1` and `nums2` of equal length as coordinates:
index `i` marks the point `(nums1[i], nums2[i])`. Two indices `i` and `j`
with `i < j` form a closest pair when

`|nums1[i] - nums1[j]| + |nums2[i] - nums2[j]|`

is as small as that distance gets over every eligible index pair.

Return the winning pair as `[i, j]`. When several pairs share the minimum
distance, return the one that is lexicographically smallest.

Two reminders:

- `|x|` is the absolute value of `x`.
- `(i1, j1)` precedes `(i2, j2)` lexicographically when `i1 < i2`, or when
  `i1 == i2` and `j1 < j2`.

### Example 1

```text
Input: nums1 = [2,4,2], nums2 = [1,3,1]
Output: [0,2]
Explanation: Indices 0 and 2 hold the very same point (2,1), whose
distance is 0 — nothing can beat that, so the answer is [0,2].
```

### Example 2

```text
Input: nums1 = [5,0,2,3], nums2 = [0,4,2,1]
Output: [2,3]
Explanation: The points are (5,0), (0,4), (2,2) and (3,1). The shortest
distance is 2, achieved by indices 2 and 3, so that pair wins.
```

### Example 3

```text
Input: nums1 = [1,2,3], nums2 = [1,2,3]
Output: [0,1]
Explanation: The three points line up on the diagonal, and every pair is
exactly 2 apart. The tie goes to the lexicographically smallest pair
[0,1].
```

### Constraints

- `2 <= nums1.length, nums2.length <= 10⁵`
- `nums1.length == nums2.length`
- `0 <= nums1[i] <= nums1.length`
- `0 <= nums2[i] <= nums2.length`

## Hints

### Hint 1

Try reducing the search before any heavy machinery: two equal points are
an instant answer. Otherwise the task is the classic closest pair of
points under Manhattan distance, and range-query structures can prune the
candidate pairs that any scan must consider.
