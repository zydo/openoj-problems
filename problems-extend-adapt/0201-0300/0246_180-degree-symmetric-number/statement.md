# 180-Degree Symmetric Number

## Description

You are given a string `num` representing an integer written in decimal.
Imagine the string printed on paper and the paper physically rotated
180 degrees (turned upside down in place, not mirrored left-to-right).
Determine whether the rotated string still reads as exactly the same
sequence of digits, in the same order, and return `true` if it does,
`false` otherwise.

### Example 1

```text
Input: num = "96"
Output: true
```

### Example 2

```text
Input: num = "808"
Output: true
```

### Example 3

```text
Input: num = "246"
Output: false
```

### Constraints

- `1 <= num.length <= 50`
- `num` consists only of digits.
- `num` has no leading zero unless `num` itself is `"0"`.
