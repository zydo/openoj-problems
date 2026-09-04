# Two Lone Elements

## Description

You are given an integer array `nums` in which exactly two values occur once
and every other value occurs exactly twice.

Return the two lone values, in either order.

Your solution must run in linear time and use only constant extra space.

### Example 1

```text
Input: nums = [4,6,4,1]
Output: [1,6]
Explanation: 4 occurs twice; 1 and 6 are the unpaired values. [6,1] is
accepted too.
```

### Example 2

```text
Input: nums = [9,9,-5,7,7,2]
Output: [-5,2]
Explanation: The pairs are 9 and 7; -5 and 2 occur once each.
```

### Example 3

```text
Input: nums = [-4,0]
Output: [-4,0]
Explanation: No pairs at all — both values are lone.
```

### Constraints

- `2 <= nums.length <= 3 · 10⁴`
- `-2³¹ <= nums[i] <= 2³¹ - 1`
- Exactly two values occur once; every other value occurs exactly twice.

## Hints

### Hint 1

Folding the array with XOR wipes out the pairs and leaves a single mixed
number: the XOR of the two lone values.

### Hint 2

The two lone values differ, so that number is nonzero — and every set bit in
it marks a position where they differ.

### Hint 3

Use one such bit (the lowest is easy to isolate) to split the array in two:
each side collects whole pairs plus one lone value, so folding a side
recovers it.
