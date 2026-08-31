# Balanced Split Index

## Description

Split the integer array `nums` at an index so it becomes two non-empty,
contiguous parts: a left prefix and a right suffix. A split is valid when
every value in the left part is less than or equal to every value in the
right part.

Return the length of the smallest valid left prefix. At least one valid split
is guaranteed to exist.

### Example 1

```text
Input: nums = [2,1,3,4]
Output: 2
Explanation: Splitting after [2,1] leaves [3,4], and both left values are at
most both right values.
```

### Example 2

```text
Input: nums = [1,3,2,4]
Output: 1
Explanation: [1] and [3,2,4] already satisfy the required ordering, so no
larger left prefix is needed.
```

### Example 3

```text
Input: nums = [4,4,5,6]
Output: 1
```

### Constraints

- `2 <= nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁶`
- The input always has at least one valid split.

## Hints

### Hint 1

A cut is valid exactly when the maximum value before it is no larger than the
minimum value after it.

### Hint 2

Precompute the minimum of every suffix, then sweep from left to right while
tracking the largest value seen in the prefix. The first valid comparison is
the shortest prefix.
