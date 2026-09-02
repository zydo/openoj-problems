# Prefix Divisibility Flags

## Description

A string `word` of digits and a positive integer `m` are given. Every
prefix of `word` — the characters from the start through some index
`i` — reads as one decimal number, and for a long string that number
grows far past what any machine integer can hold.

Build the answer array `div` of length `n = word.length`: set
`div[i] = 1` when the number spelled by `word[0..i]` is a multiple of
`m`, and `div[i] = 0` when it is not. Return `div`.

### Example 1

```text
Input: word = "31415926535", m = 7
Output: [0,0,0,0,0,0,0,0,1,0,1]
Explanation: Of the eleven prefixes, only 314159265 and 31415926535
are multiples of 7.
```

### Example 2

```text
Input: word = "513", m = 9
Output: [0,0,1]
Explanation: The prefixes read as 5, 51, and 513; only 513 is a
multiple of 9.
```

### Example 3

```text
Input: word = "480", m = 4
Output: [1,1,1]
Explanation: 4, 48, and 480 are all multiples of 4.
```

### Constraints

- `1 <= word.length <= 10⁵`
- `word` consists of the characters `'0'` – `'9'`
- `1 <= m <= 10⁹`

## Hints

### Hint 1

Only the remainder modulo `m` matters: a prefix is a multiple of `m`
exactly when that remainder is zero, so the prefix's full — possibly
huge — value never has to be stored.

### Hint 2

If `r` is the remainder of the prefix ending at index `i - 1`,
appending the digit `d` at index `i` turns it into
`(10*r + d) mod m` — one multiply, one add, one mod per character.
