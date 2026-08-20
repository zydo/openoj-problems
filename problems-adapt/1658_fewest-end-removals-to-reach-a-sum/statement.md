# Fewest End Removals to Reach a Sum

## Description

You are given an integer array `nums` and an integer `x`. One move takes
either the leftmost or the rightmost element off `nums`, subtracts its value
from `x`, and shrinks the array for the moves that follow.

Return the fewest moves after which `x` lands on exactly `0`; if no sequence
of moves manages it, return `-1`.

### Example 1

```text
Input: nums = [2,3,1,4,2], x = 4
Output: 2
Explanation: Take the leading 2 and the trailing 2 — two moves — and x drops
from 4 to 0.
```

### Example 2

```text
Input: nums = [4,6,7,8,5], x = 3
Output: -1
Explanation: Every element exceeds 3 on its own, and any two or more removed
elements overshoot it, so x never lands on 0.
```

### Example 3

```text
Input: nums = [1,4,18,2,1,5], x = 13
Output: 5
Explanation: Keep only the 18: strip the two leading elements and the three
trailing ones, 1 + 4 + 2 + 1 + 5 = 13, in five moves.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁴`
- `1 <= x <= 10⁹`

## Hints

### Hint 1

Turn the question inside out: rather than the fewest ends removed, look for
the most elements kept in one unbroken middle stretch.

### Hint 2

The removed ends sum to `x`, so the kept middle stretch must sum to
`sum(nums) - x`.

### Hint 3

Every element is positive, so the longest stretch with that sum is found by
the standard grow-and-shrink sliding window.
