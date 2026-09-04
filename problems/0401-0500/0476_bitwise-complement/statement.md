# Bitwise Complement

## Description

The complement of an integer flips every bit of its binary representation:
each `0` becomes `1` and each `1` becomes `0`. The representation is written
without leading zeros, so the bits above the most significant `1` are not
part of it.

Given `num`, return its complement. For example, `5` is `101` in binary, and
its complement `010` is the integer `2`.

### Example 1

```text
Input: num = 10
Output: 5
Explanation: 10 is 1010 in binary, and its complement 0101 is 5.
```

### Example 2

```text
Input: num = 7
Output: 0
Explanation: 7 is 111 in binary, and its complement 000 is 0.
```

### Example 3

```text
Input: num = 2
Output: 1
```

### Constraints

- `1 <= num < 2³¹`
