# Read The Roman Numeral

## Description

Roman numerals are written with seven symbols:

| Symbol | Value |
| ------ | ----- |
| I      | 1     |
| V      | 5     |
| X      | 10    |
| L      | 50    |
| C      | 100   |
| D      | 500   |
| M      | 1000  |

Most of a numeral adds up left to right: symbols appear largest first, so
`XXVII` is 20 + 5 + 2. Six subtractive shapes break that pattern — a small
symbol placed just before one step larger is taken away rather than added:
`IV` and `IX` for 4 and 9, `XL` and `XC` for 40 and 90, `CD` and `CM` for 400
and 900.

Given a valid Roman numeral `s` for a number in `[1, 3999]`, return the
number it spells.

### Example 1

```text
Input: s = "MMXXIV"
Output: 2024
```

The pair `IV` contributes 4; everything else adds up plainly: 1000 + 1000 +
10 + 10 + 4.

### Example 2

```text
Input: s = "XLVIII"
Output: 48
```

`XL` is 10 taken from 50, so 40, then `VIII` adds 8.

### Example 3

```text
Input: s = "CDXLIV"
Output: 444
```

Three subtractive shapes in a row: 400, 40, and 4.

### Constraints

- `1 <= s.length <= 15`
- `s` consists only of the characters `I`, `V`, `X`, `L`, `C`, `D`, `M`.
- `s` is a valid Roman numeral for a number between 1 and 3999.

### Hint 1

Read the numeral one symbol at a time and let each symbol's right neighbor
decide whether it is added or taken away.
