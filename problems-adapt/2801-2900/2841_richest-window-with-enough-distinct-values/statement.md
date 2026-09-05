# Richest Window With Enough Distinct Values

## Description

An integer array `nums` is given together with two positive integers `m`
and `k`.

Look at every contiguous stretch of exactly `k` consecutive elements — call
each stretch a window. A window counts as varied when it holds at least `m`
distinct values.

Among all varied windows, report the largest element sum any of them
reaches. If no window anywhere in the array is varied, the answer is 0.

### Example 1

```text
Input: nums = [8,2,4,7,2,8,4], m = 2, k = 3
Output: 17
Explanation: The window [7,2,8] holds three distinct values and sums to 17,
which none of the other qualifying windows exceeds.
```

### Example 2

```text
Input: nums = [4,2,2,7,7,3,9,1], m = 3, k = 4
Output: 26
Explanation: The qualifying windows include [4,2,2,7] with sum 15,
[2,7,7,3] with sum 19, [7,7,3,9] with sum 26, and [7,3,9,1] with sum 20.
The best of these is [7,7,3,9], giving 26.
```

### Example 3

```text
Input: nums = [10,10,3,4,4,5], m = 4, k = 4
Output: 0
Explanation: Every window of length 4 here contains at most 3 distinct
values, so no window reaches the threshold of m = 4 and the result is 0.
```

### Constraints

- `1 <= nums.length <= 2 * 10⁴`
- `1 <= m <= k <= nums.length`
- `1 <= nums[i] <= 10⁹`

## Hints

### Hint 1

A frequency map over the current window keeps its distinct count available
in constant time per step.

### Hint 2

Slide the window once from left to right, updating the distinct count and
the running sum as one element enters and another leaves, and test each
window at the moment it reaches full length.
