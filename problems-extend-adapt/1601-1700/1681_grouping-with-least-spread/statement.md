# Grouping Numbers with the Least Spread

## Description

You are given an integer array `nums` and an integer `k`. Partition the
array into `k` groups of equal size so that a group never contains the
same value twice.

A group's spread is the gap between its largest and its smallest
element. Return the smallest total spread achievable over the `k`
groups, or `-1` when no valid partition exists.

### Example 1

```text
Input: nums = [1,2,2,3], k = 2
Output: 2
Explanation: The groups [1,2] and [2,3] spread (2-1) + (3-2) = 2. The
two 2s may not share a group, so any pairing that puts them together is
off the table no matter how small its spread would be.
```

### Example 2

```text
Input: nums = [4,4,4,4], k = 2
Output: -1
Explanation: Each group would need two elements with distinct values,
but only the value 4 exists.
```

### Example 3

```text
Input: nums = [1,2,3,4,1,2,3,4], k = 4
Output: 4
Explanation: The pairs [1,2], [1,2], [3,4], [3,4] each spread 1, and no
grouping beats four pairs of neighbors.
```

### Constraints

- `1 <= k <= nums.length <= 16`
- `nums.length` is divisible by `k`
- `1 <= nums[i] <= nums.length`

## Hints

### Hint 1

`n` is at most 16, so exhaustive search is in reach — but the search
must avoid wandering through the same partial partitions again and
again.

### Hint 2

Grouping the unplaced elements by a bitmask and always completing the
lowest still-unset position removes the redundant orderings of the same
partition.
