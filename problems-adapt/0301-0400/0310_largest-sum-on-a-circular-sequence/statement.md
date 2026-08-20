# Largest Sum on a Circular Sequence

## Description

Given a non-empty integer array `nums`, treat its first and last positions as
adjacent. Return the greatest sum obtainable from a consecutive selection of
positions on this circle.

The selection must contain at least one value, and no array position may be
used more than once.

### Example 1

```text
Input: nums = [-4,6,-1,3,-5]
Output: 8
Explanation: The ordinary segment [6,-1,3] has sum 8.
```

### Example 2

```text
Input: nums = [6,-4,-2,5,-1]
Output: 10
Explanation: Crossing the boundary selects [5,-1] followed by [6].
```

### Example 3

```text
Input: nums = [-8,-3,-5]
Output: -3
Explanation: A non-empty selection is required, so the best choice is [-3].
```

### Constraints

- `n == nums.length`
- `1 <= n <= 3 * 10^4`
- Every `nums[i]` lies in `[-3 * 10^4, 3 * 10^4]`.

## Hints

### Hint 1

There are two shapes to consider: a segment entirely inside the displayed
array, or one that crosses the boundary.

### Hint 2

A boundary-crossing selection contains everything except one ordinary
contiguous segment. Minimize the sum of that omitted segment.

### Hint 3

If every value is negative, omitting the whole array would incorrectly create
an empty selection. In that case, use the best single ordinary segment.
