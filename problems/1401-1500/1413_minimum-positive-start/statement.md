# Minimum Positive Start

## Description

Pick a positive integer `start`. Then walk the array `nums` from left to
right, keeping a running total that begins at `start` and gains
`nums[i]` at step `i`. The walk is acceptable when the running total
stays at `1` or above after every step.

Return the smallest `start` for which the whole walk is acceptable.

### Example 1

```text
Input: nums = [2,-5,3,-1]
Output: 4
Explanation: Starting from 4 the running total reads 6, 1, 4, 3 — never
below 1. Starting from 3 it would read 5, 0, 3, 2, and the 0 in the
second position breaks the rule.
```

### Example 2

```text
Input: nums = [3,-1,-1]
Output: 1
Explanation: The totals are 4, 3, 2, so even the smallest legal start,
1, already works.
```

### Example 3

```text
Input: nums = [-4,2,6]
Output: 5
Explanation: The first element is negative, and the running total dips
to -4 plus the start right away; a start of 5 keeps that low point at 1.
```

### Constraints

- `1 <= nums.length <= 100`
- `-100 <= nums[i] <= 100`

## Hints

### Hint 1

The start is added to every running total equally, so only the worst
moment of the walk matters — find the smallest prefix sum of `nums`.

### Hint 2

If `m` is that minimum prefix sum, the start must satisfy
`start + m >= 1`. Combine that with the requirement that the start is
at least `1` and take whichever bound is stronger.
