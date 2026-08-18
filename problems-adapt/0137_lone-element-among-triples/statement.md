# Lone Element Among Triples

## Description

You are given an integer array `nums` in which one value occurs exactly once
and every other value occurs exactly three times.

Return the lone element.

Your solution must run in linear time and use only constant extra space.

### Example 1

```text
Input: nums = [4,4,4,7]
Output: 7
Explanation: 4 arrives three times; 7 arrives once.
```

### Example 2

```text
Input: nums = [-2,0,-2,0,-2,0,15]
Output: 15
Explanation: -2 and 0 each arrive three times, interleaved; 15 arrives once.
```

### Constraints

- `1 <= nums.length <= 3 · 10⁴`
- `-2³¹ <= nums[i] <= 2³¹ - 1`
- One value occurs exactly once; every other value occurs exactly three
  times.

## Hints

### Hint 1

XOR erases values that arrive an even number of times, so the pairing trick
does not transfer. You need cancellation keyed to multiples of three.

### Hint 2

Inspect one bit position at a time: the triples together contribute a
multiple of three set bits there, and the lone value contributes 0 or 1.

### Hint 3

Assemble the answer from the 32 per-position counts taken mod 3 — and treat
the result as a signed 32-bit pattern, since a set bit 31 encodes a negative
value.
