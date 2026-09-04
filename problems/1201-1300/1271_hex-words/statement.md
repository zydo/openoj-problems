# Hex Words

## Description

Spell a decimal number in hexadecimal and read it as a word: convert `n`
to uppercase hexadecimal, then rewrite every `'0'` as `'O'` and every
`'1'` as `'I'`. The spelling is a valid hex word only when every
character it contains comes from the set `{'A', 'B', 'C', 'D', 'E', 'F',
'I', 'O'}` — any leftover digit `2` through `9` ruins it.

Given a string `num` holding the decimal digits of `n`, return its hex
word, or the string `"ERROR"` when no valid spelling exists.

### Example 1

```text
Input: num = "65537"
Output: "IOOOI"
Explanation: 65537 is 10001 in hexadecimal, and each 1 turns into an
`I`.
```

### Example 2

```text
Input: num = "2748"
Output: "ABC"
Explanation: 2748 is ABC in hexadecimal — every character is already a
letter.
```

### Example 3

```text
Input: num = "20"
Output: "ERROR"
Explanation: 20 is 14 in hexadecimal, and the digit 4 has no letter to
become.
```

### Constraints

- `1 <= num.length <= 12`
- `num` carries no leading zeros.
- `num` represents an integer in the range `[1, 10^12]`.

## Hints

### Hint 1

Build the hexadecimal digits of `n` — repeated division by 16 peels
them off least-significant first.

### Hint 2

Map each hex digit to its letter: `0` to `'O'`, `1` to `'I'`, and
`10`–`15` to `'A'`–`'F'`.

### Hint 3

A remaining digit `2`–`9` means the answer is `"ERROR"`.
