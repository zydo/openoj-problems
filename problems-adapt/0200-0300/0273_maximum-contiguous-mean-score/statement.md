# Maximum Contiguous Mean Score

## Description

Given an integer array `values` and an integer `groupLimit`, divide the entire
array into no more than `groupLimit` non-empty contiguous groups.

The score of a division is the sum of the arithmetic mean of every group.
Return the greatest score obtainable. An answer within `10^-6` of the exact
value is accepted.

### Example 1

```text
Input: values = [8,2,6,3,9], groupLimit = 3
Output: 20.6666666667
Explanation: The groups [8], [2,6,3], and [9] score 8 + 11/3 + 9 = 62/3.
```

### Example 2

```text
Input: values = [4,6,8,10], groupLimit = 2
Output: 16.0000000000
Explanation: Splitting after the third element gives mean([4,6,8]) + mean([10]) = 6 + 10.
```

### Constraints

- `1 <= values.length <= 100`
- `1 <= values[i] <= 10^4`
- `1 <= groupLimit <= values.length`

## Hints

### Hint 1

Prefix sums let you obtain the mean of any contiguous segment in constant
time.

### Hint 2

For each suffix and number of available groups, try every possible endpoint
of its first group.

### Hint 3

With only one group available, the whole suffix must remain together. Build
larger group counts from this base case.
