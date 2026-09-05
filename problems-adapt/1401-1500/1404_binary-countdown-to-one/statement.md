# Binary Countdown to One

## Description

You are given the binary representation of a positive integer as the
string `s`. Repeatedly apply one of two operations until the number
becomes 1:

- if the number is even, halve it;
- if the number is odd, add 1 to it.

Return how many operations are applied. The data guarantees the number
always reaches 1.

### Example 1

```text
Input: s = "1100"
Output: 5
Explanation: "1100" is 12. 12 is even: 12 -> 6. 6 is even: 6 -> 3. 3 is
odd: 3 -> 4. Then 4 -> 2 -> 1, for five operations in total.
```

### Example 2

```text
Input: s = "1110"
Output: 5
Explanation: "1110" is 14. 14 -> 7 -> 8 -> 4 -> 2 -> 1: the odd 7 needs
an increment before the halvings can resume.
```

### Example 3

```text
Input: s = "1000"
Output: 3
Explanation: "1000" is 8, and 8 -> 4 -> 2 -> 1.
```

### Constraints

- `1 <= s.length <= 500`
- `s` consists of characters `'0'` or `'1'`
- `s[0] == '1'`

## Hints

### Hint 1

Work on the string itself, right to left: a number ending in `'0'` is
even and simply loses its last bit when halved, while one ending in
`'1'` is odd and adding 1 turns a trailing run of 1s into a single
carry.

### Hint 2

Walk the bits once, remembering only whether a carry is pending, and
count each halving and each increment as it happens.
