# The In-Order Pair Sum

## Description

An integer array `nums` arrives already sorted from its smallest value to
its largest. Somewhere inside it sit exactly two positions whose values add
up to a given integer `target`. Find that pair and report the two positions
**counting from one**, smaller position first, as a two-element array.

The pair is guaranteed to be unique, and a position cannot be paired with
itself — the two positions are always distinct, even when the two values
happen to be equal.

Work from constant extra space: whatever the approach remembers besides the
input itself must not grow with the length of `nums`.

### Example 1

```text
Input: nums = [1,3,5,7,9], target = 16
Output: [4,5]
Explanation: The values 7 and 9 sit at positions 4 and 5, and 7 + 9 is 16.
```

### Example 2

```text
Input: nums = [-8,-3,0,4,10], target = 1
Output: [2,4]
Explanation: -3 + 4 is 1. Negative values are fine as long as the order
still ascends.
```

### Example 3

```text
Input: nums = [5,5,8,9], target = 10
Output: [1,2]
Explanation: Two equal values pair up legally — they occupy different
positions.
```

### Constraints

- `2 <= nums.length <= 3 * 10⁴`
- `-1000 <= nums[i] <= 1000`
- `nums` is sorted in non-decreasing order.
- `-1000 <= target <= 1000`
- Exactly one valid pair exists.
