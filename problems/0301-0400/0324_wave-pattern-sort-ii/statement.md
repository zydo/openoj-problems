# Wave Pattern Sort II

## Description

Rearrange the integers in `nums` so that they alternate strictly between
low and high values:

```text
nums[0] < nums[1] > nums[2] < nums[3] > ...
```

An arrangement satisfying this rule is guaranteed to exist. Rearrange
`nums` in place and return the reordered array.

Several valid arrangements can exist, so this judge specifies one result:
sort a copy of the values, split it after the first `(n + 1) / 2` values,
and fill the even positions from the lower portion in reverse order and
the odd positions from the upper portion in reverse order.

### Example 1

```text
Input: nums = [2,5,2,6,3,5]
Output: [3,6,2,5,2,5]
```

### Example 2

```text
Input: nums = [4,1,4,2]
Output: [2,4,1,4]
```

### Example 3

```text
Input: nums = [0,3,1,2,1]
Output: [1,3,1,2,0]
```

### Constraints

- `1 <= nums.length <= 5 * 10⁴`
- `0 <= nums[i] <= 5000`
- It is guaranteed that there will be an answer for the given input `nums`.

### Follow-up

Can you do it in `O(n)` time and/or in-place with `O(1)` extra space?
