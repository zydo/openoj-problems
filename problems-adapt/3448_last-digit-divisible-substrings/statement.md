# Last-Digit Divisible Substrings

## Description

You are given a string `s` of digits.

Read each non-empty substring of `s` as a decimal number. The substring
qualifies when that number is a multiple of its final digit, and the final
digit is not `'0'`.

Return the number of qualifying substrings. Leading zeros inside a substring
are allowed — `"04"` is the number 4.

### Example 1

```text
Input: s = "5804"
Output: 6
Explanation: "5804" has 10 substrings. Four fail: "58" is not a multiple of
8, and "580", "80" and "0" end in '0', which divides nothing. "04" counts,
because its value is 4 and 4 divides 4, as do "5", "8", "4", "804" and
"5804".
```

### Example 2

```text
Input: s = "2057"
Output: 5
Explanation: "205" is 41 * 5 and "05" has value 5; the one-digit strings
"2", "5" and "7" divide themselves. "2057" is not a multiple of 7, and
substrings ending in '0' never qualify, so 5 substrings count.
```

### Example 3

```text
Input: s = "1011010"
Output: 14
Explanation: Every substring ending in '1' is a multiple of 1, and no
substring ending in '0' can qualify. The '1's sit at positions 0, 2, 3 and 6
of the 7-character string, giving 1 + 3 + 4 + 6 = 14 qualifying substrings.
```

### Constraints

- `1 <= s.length <= 10⁵`
- every character of `s` is a digit `'0'`–`'9'`

## Hints

### Hint 1

Only the final digit decides the divisor, so run one counting pass per
candidate final digit and add the nine answers together.

### Hint 2

In a pass for digit `d`, you need to know, at each position, how many earlier
suffixes of the prefix leave each remainder modulo `d`. Appending a character
multiplies every recorded value by 10 and adds its digit.

### Hint 3

A suffix of remainder `r` extended by the digit `d` itself becomes divisible
exactly when `10r` is a multiple of `d` — and those remainders are the same
for the whole pass. One rolling table of at most nine counters per pass keeps
the memory flat.
