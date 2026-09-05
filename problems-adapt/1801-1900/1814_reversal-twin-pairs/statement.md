# Reversal Twin Pairs

## Description

You are given an array `nums` of non-negative integers. Write `rev(x)` for
the digit reversal of a non-negative integer `x`, leading zeros dropped —
`rev(123) = 321` and `rev(120) = 21`.

A pair of indices `(i, j)` is a _reversal twin_ pair when

- `0 <= i < j < nums.length`, and
- `nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])`.

Return how many reversal twin pairs the array holds, modulo `10⁹ + 7`.

### Example 1

```text
Input: nums = [24,13,42,31]
Output: 2
Explanation: The two pairs are:
 - (0,1) : 24 + rev(13) = 24 + 31 = 55, 13 + rev(24) = 13 + 42 = 55.
 - (2,3) : 42 + rev(31) = 42 + 13 = 55, 31 + rev(42) = 31 + 24 = 55.
```

### Example 2

```text
Input: nums = [10,100,5,50]
Output: 0
```

### Example 3

```text
Input: nums = [123,3210,45,54,678]
Output: 1
Explanation: Only (0,4) qualifies: 123 + rev(678) = 123 + 876 = 999,
and 678 + rev(123) = 678 + 321 = 999.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁹`

## Hints

### Hint 1

Move both reversal terms to the opposite sides of the equality; the
condition becomes a statement about `nums[i] - rev(nums[i])` alone.

### Hint 2

Give every element the key `x - rev(x)`. Two indices form a twin pair
exactly when their keys match, so the answer is a sum over key groups.

### Hint 3

Sweep the array once with a frequency map of the keys seen so far. Each
element completes as many new pairs as the map already holds for its key;
bump the count afterwards.
