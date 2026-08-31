# Distinct Value Lift

## Description

Given the integer array `nums`, a move selects one index `i`
(`0 <= i < nums.length`) and increases `nums[i]` by exactly 1.

Return the fewest moves required until no two elements of `nums` hold the
same value. Values may only move upward; they cannot be decreased or changed
by more than one in a single move.

### Example 1

```text
Input: nums = [0,0,0,3]
Output: 3
Explanation: Raise the second 0 once and the third 0 twice to obtain
[0,1,2,3].
```

### Example 2

```text
Input: nums = [2,2,2,2]
Output: 6
Explanation: The four copies can become [2,3,4,5], costing 0 + 1 + 2 + 3 = 6
moves.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁵`
