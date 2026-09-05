# Nearest Triple Sum

## Description

From an integer array `nums`, pick any three elements that sit at three
different positions and add them together. Among all such triples, report
the sum that lands closest to a given integer `target`.

The input is guaranteed to have exactly one closest sum, so the answer is
always unambiguous.

### Example 1

```text
Input: nums = [6, -5, 3, 8, 1], target = 12
Output: 12
Explanation: The triple 3 + 8 + 1 hits the target exactly, so 12 is the
nearest possible sum.
```

### Example 2

```text
Input: nums = [5, 2, 7, 13], target = 21
Output: 20
Explanation: No triple sums to 21. The closest is 5 + 2 + 13 = 20, one
away from the target.
```

### Example 3

```text
Input: nums = [2, 2, 2], target = 50
Output: 6
Explanation: The only reachable sum is 2 + 2 + 2 = 6.
```

### Constraints

- `3 <= nums.length <= 500`
- `-1000 <= nums[i] <= 1000`
- `-10^4 <= target <= 10^4`
