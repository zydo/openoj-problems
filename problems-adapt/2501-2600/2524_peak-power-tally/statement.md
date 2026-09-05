# Peak Power Tally

## Description

You are given an integer array `nums` and a positive integer `k`.

Define the power tally of an array as the sum, taken modulo `10⁹ + 7`,
of each distinct value raised to its own frequency. As a worked case,
the array `[5,4,5,7,4,4]` tallies to `(4³ + 5² + 7¹) mod (10⁹ + 7)`,
which is `96`.

Every contiguous window of `nums` having exactly `k` elements has a
power tally; return the largest tally any of them reaches. The
maximization happens on the residues themselves — compare values
already reduced modulo `10⁹ + 7`, not the unreduced sums.

A subarray is a contiguous, non-empty stretch of the array.

### Example 1

```text
Input: nums = [2,2,3,5,2,3], k = 4
Output: 16
Explanation: The last window [3,5,2,3] tallies 3² + 5¹ + 2¹ = 16, and
no other window of length 4 gets that high.
```

### Example 2

```text
Input: nums = [7,7,7,7], k = 2
Output: 49
Explanation: Both entries of any length-2 window are 7, so each window
tallies 7² = 49.
```

### Example 3

```text
Input: nums = [1,4,4,1,6], k = 3
Output: 17
Explanation: The window [1,4,4] tallies 1¹ + 4² = 17, which beats every
other window, including [4,1,6] at 11.
```

### Constraints

- `1 <= k <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁶`

## Hints

### Hint 1

Scoring every length-`k` window on its own and taking the best is
correct but quadratic; the tally of consecutive windows overlaps almost
entirely.

### Hint 2

Slide the window while keeping, per distinct value, its current power
term. Each one-step slide moves only two counts — the entering value
and the leaving one — so repair those two terms instead of rebuilding
the sum.
