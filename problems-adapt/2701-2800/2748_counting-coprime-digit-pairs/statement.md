# Counting Coprime Digit Pairs

## Description

You are given a 0-indexed integer array `nums`.

Pick a pair of indices `i` and `j` with `0 <= i < j < nums.length`. The
pair is counted when the leading digit of `nums[i]` and the trailing digit
of `nums[j]` are coprime.

Return how many index pairs of `nums` are counted this way.

Two integers `x` and `y` are coprime when nothing greater than 1 divides
both of them — equivalently, when `gcd(x, y) == 1`, where `gcd(x, y)` is
the greatest common divisor of `x` and `y`.

### Example 1

```text
Input: nums = [43,28,71,16]
Output: 3
Explanation: The counted pairs are:
When i = 0 and j = 2: the first digit of 43 is 4 and the last digit of 71 is 1, and gcd(4,1) == 1.
When i = 1 and j = 2: the first digit of 28 is 2 and the last digit of 71 is 1, and gcd(2,1) == 1.
When i = 2 and j = 3: the first digit of 71 is 7 and the last digit of 16 is 6, and gcd(7,6) == 1.
The other three pairs share a common divisor greater than 1, so the answer is 3.
```

### Example 2

```text
Input: nums = [11,31,25]
Output: 3
Explanation: Every pair counts here. In particular, for i = 0 and j = 1 both digits are 1, and gcd(1,1) == 1 — a leading digit of 1 is coprime to every trailing digit, even another 1.
```

### Example 3

```text
Input: nums = [29,36,48]
Output: 1
Explanation: Only i = 1 and j = 2 counts: the first digit of 36 is 3 and the last digit of 48 is 8, with gcd(3,8) == 1. The pairs starting at index 0 fail because gcd(2,6) == 2 and gcd(2,8) == 2.
```

### Constraints

- `2 <= nums.length <= 100`
- `1 <= nums[i] <= 9999`
- `nums[i] % 10 != 0`

## Hints

### Hint 1

The array holds at most 100 numbers, so testing every index pair directly
is well within reach.

### Hint 2

The leading digit falls out of the decimal representation of `nums[i]`,
and the trailing digit is just `nums[j] % 10`.
