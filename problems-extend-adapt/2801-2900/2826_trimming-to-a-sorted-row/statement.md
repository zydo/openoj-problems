# Trimming To A Sorted Row

## Description

You are given an integer array `nums` whose every element is `1`, `2`, or
`3`. In one move you may delete any single element from `nums`. Return the
fewest moves after which the remaining row reads non-decreasing from left
to right.

### Example 1

```text
Input: nums = [3,1,2,2,3,1]
Output: 2
Explanation: Delete the leading 3 and the trailing 1. What stays is
[1,2,2,3], already non-decreasing, and no single deletion tidies the row.
```

### Example 2

```text
Input: nums = [1,3,1,3,1]
Output: 2
Explanation: Keeping, say, the first 1 followed by the two 3s gives
[1,3,3]; either way at least two deletions are needed.
```

### Example 3

```text
Input: nums = [2,2,3,3]
Output: 0
Explanation: The row already reads non-decreasing, so nothing has to go.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 3`

### Follow up

Can you make it a single pass that uses constant extra space?

## Hints

### Hint 1

Deleting as few elements as possible is the flip side of keeping as many
as possible.

### Hint 2

Whatever survives has a three-zone shape: some kept 1s first, then some
kept 2s, then some kept 3s — any zone may be empty.

### Hint 3

Sweep once, carrying the best kept length that ends in each value. A fresh
element can extend the best zone-ending value no larger than itself.

### Hint 4

The answer is the array's length minus the longest row that survives the
sweep.
