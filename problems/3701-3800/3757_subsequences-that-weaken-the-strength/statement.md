# Subsequences That Weaken the Strength

## Description

You are given an array of positive integers `nums`.

Define the array's strength as the bitwise OR of all its elements; the
strength of an empty array is `0`.

Pick any subsequence of `nums` and remove it. The removal counts if it
strictly weakens what remains — that is, the strength of the surviving
elements is strictly smaller than the strength of the original array.

Return how many subsequences of `nums` count. Copies of the same values
taken from different positions are different subsequences. The answer
can be huge, so report it modulo `10⁹ + 7`.

### Example 1

```text
Input: nums = [2,4,8]
Output: 7
Explanation: The strength is 14, and each of its bits lives in exactly
one element. Every non-empty subsequence takes away the sole carrier of
at least one bit, so 7 of the 8 subsequences count; only removing
nothing fails.
```

### Example 2

```text
Input: nums = [5,3]
Output: 3
Explanation: The strength is 7. The counting removals are [5] (leaving
strength 3), [3] (leaving strength 5), and [5,3] (leaving strength 0).
```

### Example 3

```text
Input: nums = [6,6,5]
Output: 5
Explanation: The strength is 7. The counting removals are [6,6]
(leaving strength 5), [6,6,5] (leaving strength 0), [5] (leaving
strength 6), and the two position-distinct [6,5] removals (each leaving
strength 6). Removing a single 6 leaves strength 7, so it does not
count.
```

### Example 4

```text
Input: nums = [10,10,10]
Output: 1
Explanation: The strength is 10, and a bit survives unless every copy
carrying it is taken, so only [10,10,10] (leaving strength 0) counts.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁶`

## Hints

### Hint 1

The surviving OR loses ground exactly when some bit of the original
strength vanishes from it completely.

### Hint 2

A bit vanishes only if the removal takes every element that carries it —
each such element is forced into the removed subsequence.

### Hint 3

For each non-empty set `S` of the strength's bits, count the
subsequences that take all occurrences of every bit in `S`; an
inclusion-exclusion sweep over `S` turns those counts into the number of
subsequences that kill at least one bit.
