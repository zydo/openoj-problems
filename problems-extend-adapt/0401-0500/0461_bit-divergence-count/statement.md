# Bit Divergence Count

## Description

The Hamming distance between two integers is the number of bit positions where
their binary representations differ. Given integers `x` and `y`, return the
Hamming distance between them.

### Example 1

```text
Input: x = 5, y = 2
Output: 3
Explanation: 5 is 101 and 2 is 010; all three bits differ.
```

### Example 2

```text
Input: x = 7, y = 0
Output: 3
Explanation: 7 is 111 and 0 is 000.
```

### Example 3

```text
Input: x = 10, y = 12
Output: 2
Explanation: 10 is 1010 and 12 is 1100; the two middle bits differ.
```

### Constraints

- `0 <= x, y <= 2³¹ - 1`
