# Count Non-Decreasing Splits

## Description

You are given a string `num` of digits. Cut it into one or more consecutive,
non-empty pieces so that reading each piece as an integer gives a list that
never decreases from one piece to the next. No piece may begin with the
digit `0`, and every piece must be a positive integer.

Count the valid cuts. Since the count can be huge, report it modulo
`10⁹ + 7`.

### Example 1

```text
Input: num = "5161"
Output: 3
Explanation: The cuts are
5 | 161        (5 <= 161)
51 | 61        (51 <= 61)
5161          (a single number)
The cut 5 | 16 | 1 fails because 16 > 1.
```

### Example 2

```text
Input: num = "1213"
Output: 4
Explanation: The cuts are 1213, 1 | 213, 12 | 13, and 1 | 2 | 13. The
equal-length pair 12 <= 13 is what allows the second-to-last option.
```

### Example 3

```text
Input: num = "012"
Output: 0
Explanation: Whichever way the string is cut, the first piece starts with
0, and no piece may have a leading zero.
```

### Constraints

- `1 <= num.length <= 3500`
- `num` consists of digits `'0'` through `'9'`

## Hints

### Hint 1

Fix the length `d` of the final number in a prefix. How long can the number
before it be — and what comparison decides whether that length is allowed?

### Hint 2

The number of options for the preceding part, over every length at most
`d`, is a range sum over a table you are already filling. What
precomputation turns each such sum into one lookup?

### Hint 3

When the previous number has exactly `d` digits too, the comparison is
between equal-length substrings. Precompute, for every pair of positions,
how far their suffixes agree, so the first mismatch is found in constant
time.
