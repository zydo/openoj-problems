# Where the Target Lands

## Description

You are handed a 0-indexed integer array `nums` together with a value
`target`.

Call an index `i` a target index when `nums[i] == target`.

Report every target index of `nums` as they would appear once `nums` is
arranged in non-decreasing order. When no index qualifies, hand back an
empty list, and when any do, the list itself must climb in increasing
order.

### Example 1

```text
Input: nums = [8,3,6,3,9,3], target = 3
Output: [0,1,2]
Explanation: Placed in non-decreasing order the array reads
[3,3,3,6,8,9], and the value 3 occupies indices 0, 1 and 2.
```

### Example 2

```text
Input: nums = [8,3,6,3,9,3], target = 7
Output: []
Explanation: The ordered array is [3,3,3,6,8,9]; the value 7 appears
nowhere, so no index qualifies.
```

### Example 3

```text
Input: nums = [4,4,4,4], target = 4
Output: [0,1,2,3]
Explanation: Every entry equals the target, so after ordering the
qualifying indices are 0, 1, 2 and 3.
```

### Example 4

```text
Input: nums = [10,20,30], target = 30
Output: [2]
Explanation: The array is already non-decreasing, and 30 sits at
index 2.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i], target <= 100`

## Hints

### Hint 1

Picture the array after it has been put into non-decreasing order.

### Hint 2

Every array entry smaller than the target must sit somewhere to the
left of it, so counting those entries already tells you where the
target's block starts.
