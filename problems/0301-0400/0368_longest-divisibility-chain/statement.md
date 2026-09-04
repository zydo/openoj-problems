# Longest Divisibility Chain

## Description

`nums` holds distinct positive integers. Choose as many of them as you can
subject to one rule: any two chosen values must be _compatible_, meaning one of
the two is a multiple of the other. Return the values you chose.

Written out, for every pair `x`, `y` taken from your answer, at least one of
`x % y == 0` and `y % x == 0` has to hold. Should several choices tie for the
maximum count, hand back whichever one you like.

### Example 1

```text
Input: nums = [12,3,5,6,24]
Output: [3,6,12,24]
Explanation: 3 is a divisor of 6, 6 of 12, and 12 of 24, which makes all six
pairs among the four compatible. 5 neither divides nor is divided by any of
them, so it cannot join.
```

### Example 2

```text
Input: nums = [15,4,22]
Output: [4]
Explanation: No value here is a multiple of another, so nothing larger than a
one-element choice exists. Any single value is an acceptable answer.
```

### Example 3

```text
Input: nums = [8,2,16,7]
Output: [2,8,16]
Explanation: Doubling twice from 2 reaches 8 and then 16. Adding 7 would break
the rule against every one of them.
```

### Constraints

- `nums` holds at least 1 and at most 1000 values.
- Each value lies in `1 <= nums[i] <= 2 * 10^9`.
- No value occurs twice.

## Hints

### Hint 1

Being a multiple carries over: when `a` divides `b` and `b` divides `c`, `a`
divides `c` as well. What does that buy you if the chosen values are read in
increasing order?

### Hint 2

By that argument a choice is legal precisely when, sorted ascending, each value
divides its immediate successor. Sort first and you are hunting for the longest
run of that kind — the same shape as a longest-increasing-subsequence sweep.

### Hint 3

Let `best[i]` be the size of the longest legal run whose last value is
`nums[i]`. Any earlier position holding a divisor of `nums[i]` offers its own
run, one element longer.

### Hint 4

A count alone is not the answer, since the values themselves are wanted. Record
alongside each position which predecessor produced its count, then follow those
records backwards from the winning endpoint.
