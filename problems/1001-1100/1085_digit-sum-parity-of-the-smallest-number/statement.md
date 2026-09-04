# Digit-Sum Parity of the Smallest Number

## Description

From the integer array `nums`, locate its smallest element and add up
that element's digits. Answer `0` when the resulting digit sum is odd
and `1` when it is even.

### Example 1

```text
Input: nums = [21,44,35,18]
Output: 0
Explanation: The smallest element is 18, whose digits add to
1 + 8 = 9 — an odd sum, so the answer is 0.
```

### Example 2

```text
Input: nums = [47,61,39]
Output: 1
Explanation: The smallest element is 39, whose digits add to
3 + 9 = 12 — an even sum, so the answer is 1.
```

### Example 3

```text
Input: nums = [52,7,60]
Output: 0
Explanation: The smallest element is 7, a single odd digit, so the
answer is 0.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`

## Hints

### Hint 1

Only one element of the array ever matters — the minimum. One linear
scan with a running smallest-so-far finds it.

### Hint 2

Peel the minimum apart with arithmetic: dividing by ten drops the last
digit, and the remainder modulo ten is that digit. Collect the digits
and look at the parity of their total.
