# Carry The Ones Across

## Description

Two non-negative numbers arrive written in binary, one per string.
Work out their total and hand it back the same way: a string of `'0'`
and `'1'` characters, most significant bit first.

### Example 1

```text
Input: a = "1101", b = "11"
Output: "10000"
```

The carries ripple all the way through: 13 plus 3 is 16.

### Example 2

```text
Input: a = "10", b = "101"
Output: "111"
```

The strings need not be the same length — 2 plus 5 is 7.

### Example 3

```text
Input: a = "1111", b = "1"
Output: "10000"
```

A final carry left over after both strings run out extends the answer
by one place.

### Example 4

```text
Input: a = "0", b = "0"
Output: "0"
```

### Constraints

- `1 <= a.length, b.length <= 10⁴`
- Only `'0'` and `'1'` appear in `a` and `b`.
- Neither string has a leading zero, unless the string is just `"0"`.

### Follow-up

Can you get there without ever converting either whole string to a
number?
