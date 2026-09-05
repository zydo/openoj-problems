# Value Total Against Digit Total

## Description

You are given an array `nums` of positive integers.

- The value total is the sum of all the elements of `nums`.
- The digit total is the sum of every digit that appears when the
  elements are written out — digits are counted as many times as they
  occur, not just once.

Report how far apart the two totals are: the absolute difference between
the value total and the digit total.

For integers `x` and `y`, their absolute difference is `|x - y|`.

### Example 1

```text
Input: nums = [12,7,3]
Output: 9
Explanation: The value total is 12 + 7 + 3 = 22.
The digit total is 1 + 2 + 7 + 3 = 13.
The two totals are |22 - 13| = 9 apart.
```

### Example 2

```text
Input: nums = [5,5,5]
Output: 0
Explanation: The value total is 5 + 5 + 5 = 15.
The digit total is 5 + 5 + 5 = 15.
The two totals are |15 - 15| = 0 apart.
```

### Example 3

```text
Input: nums = [1000]
Output: 999
Explanation: The value total is 1000, while its digits contribute only
1 + 0 + 0 + 0 = 1, and |1000 - 1| = 999.
```

### Constraints

- `1 <= nums.length <= 2000`
- `1 <= nums[i] <= 2000`

## Hints

### Hint 1

One pass over the array is enough: add each value to one running total
while breaking the same value into digits for the other.

### Hint 2

Peel digits off a number by taking remainders modulo 10 and dividing by
10 until it reaches zero.
