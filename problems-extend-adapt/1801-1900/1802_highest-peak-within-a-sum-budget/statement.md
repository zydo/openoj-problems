# Highest Peak Within a Sum Budget

## Description

Three positive integers `n`, `index`, and `maxSum` are given. Build an
array `nums` of length `n` (0-indexed) under these rules:

- every element is a positive integer;
- adjacent elements differ by at most 1: `abs(nums[i] - nums[i+1]) <= 1`
  for `0 <= i < n-1`;
- the elements add up to at most `maxSum`.

Among all arrays satisfying the rules, choose one that makes `nums[index]`
as large as possible, and return that largest value.

Here `abs(x)` is `x` when `x >= 0` and `-x` otherwise.

### Example 1

```text
Input: n = 5, index = 2, maxSum = 13
Output: 3
Explanation: [1,2,3,2,1] is legal, sums to 9, and has nums[2] = 3. A 4 at
position 2 cannot work: the cheapest array carrying it is [2,3,4,3,2],
which already sums to 14, past the budget of 13.
```

### Example 2

```text
Input: n = 3, index = 0, maxSum = 7
Output: 3
Explanation: [3,2,2] is legal and sums to exactly 7. A 4 at position 0
would force its two neighbors to be at least 3 and 2, so the total would
be at least 4 + 3 + 2 = 9, over budget.
```

### Example 3

```text
Input: n = 4, index = 3, maxSum = 1000000000
Output: 250000001
Explanation: With the peak at the last slot the array descends leftward
from it, so the cheapest array with peak m is [m-3, m-2, m-1, m]. For
m = 250000001 that sums to 999999998, within budget; stepping the peak up
to 250000002 pushes the total to 1000000002, just past it.
```

### Constraints

- `1 <= n <= maxSum <= 10⁹`
- `0 <= index < n`

## Hints

### Hint 1

Flip the question around: for a fixed candidate value `t`, what is the
smallest possible total of a legal array with `nums[index] = t`? That
minimum decides feasibility, and feasibility improves as `t` shrinks —
exactly the monotone shape binary search needs.

### Hint 2

The cheapest array with `nums[index] = t` descends by 1 on each step away
from `index`, floored at 1: position `index ± d` costs `max(t - d, 1)`.
Sum the left ramp and the right ramp of that staircase.

### Hint 3

Both `n` and `t` reach 10⁹, so never materialize the array — a ramp of
width `w` has a closed-form sum: while the staircase is still above the
floor it contributes `w*t - w*(w+1)/2`, and once it bottoms out the
remainder of the ramp is all 1s.

### Hint 4

Watch the arithmetic range: a ramp sum can approach 5·10¹⁷, so use 64-bit
integers, and note that this exceeds exact double precision in JavaScript.
