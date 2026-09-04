# Cyclic Shift Cipher

## Description

You are given a string `s` and an integer `k`. Build a new string from `s`
one position at a time: the character at position `i` of the result is the
character sitting `k` places after position `i` in `s`, counted cyclically
— past the end of `s` the count continues from its start.

Return the resulting string.

### Example 1

```text
Input: s = "cipher", k = 2
Output: "pherci"
```

Position 0 takes the character two places ahead (`'p'`), every later
position does the same, and the last two positions wrap around to pick up
`'c'` and `'i'` from the front.

### Example 2

```text
Input: s = "abc", k = 4
Output: "bca"
```

`k` here exceeds the length, but only `k mod 3 = 1` matters: each
character effectively moves one place forward.

### Example 3

```text
Input: s = "mango", k = 5
Output: "mango"
```

Shifting by exactly one full lap returns every character to itself.

### Constraints

- `1 <= s.length <= 100`
- `1 <= k <= 10⁴`
- `s` consists only of lowercase English letters.

## Hints

### Hint 1

Position `i` of the answer copies the character at index `(i + k) mod n`
of the original string.

### Hint 2

Reducing `k` modulo the length keeps every index in range, so one pass
over the positions is enough.
