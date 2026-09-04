# Best Window with One Square

## Description

Given an integer array `nums`, you must square exactly one element —
choose any single index `i` and replace `nums[i]` with
`nums[i] * nums[i]`. With that one change made, look at every non-empty
contiguous window of the array and take the largest window sum.

Return that maximum.

### Example 1

```text
Input: nums = [3,-2,5]
Output: 26
Explanation: Squaring the 5 turns the array into [3,-2,25], and the
whole array then sums to 26.
```

### Example 2

```text
Input: nums = [-3,-7,-1]
Output: 49
Explanation: Every element is negative, so the best move is to square
the -7 into 49 and keep that single-element window.
```

### Example 3

```text
Input: nums = [4,-5,2,-9,6]
Output: 89
Explanation: Squaring the -9 into 81 makes the window [2,81,6] sum to
89.
```

### Constraints

- `1 <= nums.length <= 10^5`
- `-10^4 <= nums[i] <= 10^4`

## Hints

### Hint 1

Sweep the array with two running Kadane states: the best window ending
at the current position that has used no square, and the best one that
has used exactly one.

### Hint 2

The one-square state is the best of three moves — square the current
element as a fresh window, square it onto a no-square window, or append
it unsquared to a one-square window.
