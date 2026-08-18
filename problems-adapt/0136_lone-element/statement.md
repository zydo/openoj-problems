# Lone Element

## Description

You are given an integer array `nums` in which one value occurs exactly once
and every other value occurs exactly twice.

Return the lone element.

Your solution must run in linear time and use only constant extra space.

### Example 1

```text
Input: nums = [11,4,11]
Output: 4
Explanation: The value 11 occurs twice; 4 occurs once.
```

### Example 2

```text
Input: nums = [2,9,2,6,9]
Output: 6
Explanation: 2 and 9 each occur twice; 6 sits between them unpaired.
```

### Example 3

```text
Input: nums = [-5]
Output: -5
Explanation: With no pairs at all, the lone element is the only value.
```

### Constraints

- `1 <= nums.length <= 3 · 10⁴`
- `-3 · 10⁴ <= nums[i] <= 3 · 10⁴`
- One value occurs exactly once; every other value occurs exactly twice.

## Hints

### Hint 1

What does a pair of equal values contribute to a running XOR?

### Hint 2

`x ^ x = 0` and `x ^ 0 = x`, and the operation ignores grouping order — so
folding the whole array together erases the pairs and leaves exactly the
unpaired value in the accumulator.

### Hint 3

Bookkeeping alternatives (counters, sets) work but pay memory for it; a
single running value is all the cancellation needs.
