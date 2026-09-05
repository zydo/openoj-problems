# XOR of a Strided Progression

## Description

You are given two integers, `n` and `start`.

Imagine an array `nums` of length `n` whose entry at index `i`
(0-indexed) equals `start + 2 * i` — consecutive entries always differ
by exactly two.

Return the bitwise XOR of all `n` entries of that array.

### Example 1

```text
Input: n = 3, start = 6
Output: 4
Explanation: The entries are [6, 8, 10], and 6 ^ 8 ^ 10 = 4, where ^
denotes the bitwise XOR.
```

### Example 2

```text
Input: n = 6, start = 1
Output: 2
Explanation: The entries are [1, 3, 5, 7, 9, 11], whose XOR folds to 2.
```

### Example 3

```text
Input: n = 1, start = 7
Output: 7
Explanation: A single entry XORs to itself.
```

### Constraints

- `1 <= n <= 1000`
- `0 <= start <= 1000`
- `n` is the length of the imagined array.

## Hints

### Hint 1

The array never has to exist: fold the term `start + 2 * i` into a
running XOR for each `i` from `0` to `n - 1` and return the result.
