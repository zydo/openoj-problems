# Distinct Quadruple Sums

## Description

Given an integer array `nums` and an integer `target`, list every distinct
way of choosing four elements at four different positions whose values add
up to `target`. Each quadruple is reported as the four chosen values, and
the same set of four values is reported only once no matter how many index
combinations produce it.

To make the answer deterministic, every quadruple carries its values in
ascending order, and the quadruples themselves are listed in ascending
lexicographic order.

### Example 1

```text
Input: nums = [3, 1, -5, 8, 2, -2, 6], target = 7
Output: [[-5,-2,6,8],[-5,1,3,8],[-2,1,2,6]]
```

### Example 2

```text
Input: nums = [4, 4, 4, 4], target = 16
Output: [[4,4,4,4]]
Explanation: All four positions hold the same value and one distinct
quadruple reaches the target.
```

### Example 3

```text
Input: nums = [-9, -4, -1, 0], target = 100
Output: []
Explanation: No four elements add up to 100.
```

### Constraints

- `1 <= nums.length <= 200`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`
