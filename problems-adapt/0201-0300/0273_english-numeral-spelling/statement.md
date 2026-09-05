# English Numeral Spelling

## Description

You are given a non-negative integer `num`. Return its value written out
as English words, following standard number-naming conventions (for
example, `123` becomes `"One Hundred Twenty Three"`).

### Example 1

```text
Input: num = 407
Output: "Four Hundred Seven"
```

### Example 2

```text
Input: num = 50060
Output: "Fifty Thousand Sixty"
```

### Example 3

```text
Input: num = 1000010
Output: "One Million Ten"
```

### Constraints

- `0 <= num <= 2³¹ - 1`

## Hints

### Hint 1

Notice that any three-digit chunk of digits spells out the same way no
matter which chunk it is — the `123` in `123` and the `123` inside
`123,000` read identically.

### Hint 2

Split `num` into groups of three digits (ones, thousands, millions, ...)
and write one helper that spells any value below 1000.

### Hint 3

Watch for edge cases: what should your code produce for `0`? And for a
number like `1,000,010`, where a middle group of three digits is entirely
zero and must contribute nothing to the output?
