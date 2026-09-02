# Kindred Pair XOR I

## Description

Given a 0-indexed integer array `nums`, call two integers `x` and `y`
kindred when they are close enough to each other:

`|x - y| <= min(x, y)`

Choose two entries of `nums` that form a kindred pair, aiming to make
their bitwise XOR as large as possible. Return that largest XOR over
every kindred pair that can be formed from the array.

You may use the same entry of the array twice, so pairing a value with
itself is allowed.

### Example 1

```text
Input: nums = [2,4,9]
Output: 6
Explanation: The kindred pairs here are (2, 2), (2, 4), (4, 4) and
(9, 9) — 9 is too far from both 2 and 4 to qualify. The best XOR is
2 XOR 4 = 6.
```

### Example 2

```text
Input: nums = [12]
Output: 0
Explanation: The only pair is (12, 12), and any value XORed with
itself gives 0.
```

### Example 3

```text
Input: nums = [8,13]
Output: 5
Explanation: |8 - 13| = 5 does not exceed min(8, 13) = 8, so the pair
is kindred and its XOR is 8 XOR 13 = 5.
```

### Constraints

- `1 <= nums.length <= 50`
- `1 <= nums[i] <= 100`

## Hints

### Hint 1

With at most 50 values, testing every candidate pair directly is well
within the limits.

### Hint 2

A pair `x <= y` is kindred exactly when `y - x <= x`, which turns the
check into a single subtraction and comparison.
