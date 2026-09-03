# Bump The Number Up

## Description

A number too important to trust to a machine's own integer type is
stored as a list of its decimal digits, most significant first. Hand
this list back with the number raised by exactly one, expressed the
same way — as many digits as the incremented value needs.

### Example 1

```text
Input: digits = [7,8,4]
Output: [7,8,5]
```

The stored digits read 784, so the answer reads 785.

### Example 2

```text
Input: digits = [1,9,9,2]
Output: [1,9,9,3]
```

Only the last digit changes: 1992 becomes 1993.

### Example 3

```text
Input: digits = [9,9]
Output: [1,0,0]
```

The carry runs the whole length, 99 becomes 100, and the result needs
one more digit than it was given.

### Example 4

```text
Input: digits = [5]
Output: [6]
```

### Constraints

- `1 <= digits.length <= 100`
- Each entry is a single digit: `0 <= digits[i] <= 9`.
- The leading digit is never `0`.
