# Signed Hex Notation

## Description

Given a 32-bit integer `num`, return its hexadecimal representation as a
string. Negative inputs are interpreted via the two's-complement convention,
so the answer is always exactly eight hex digits or fewer.

Use only lowercase letters, and omit leading zeros — except that the value
`0` itself is written `"0"`.

You may not use a built-in library routine to perform this conversion
directly.

### Example 1

```text
Input: num = 255
Output: "ff"
```

### Example 2

```text
Input: num = -2
Output: "fffffffe"
```

### Example 3

```text
Input: num = 0
Output: "0"
```

### Constraints

- `-2³¹ <= num <= 2³¹ - 1`
