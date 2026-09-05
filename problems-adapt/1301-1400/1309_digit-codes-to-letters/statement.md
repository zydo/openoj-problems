# Digit Codes to Letters

## Description

A message has been encoded as a string of digit characters and `#` marks.
Each lowercase English letter was written out using its position in the
alphabet:

- Letters `a` through `i` were written as the single digits `1` through `9`.
- Letters `j` through `z` were written as their two-digit position followed
  by a `#` (so `10#` through `26#`).

Given the encoded string `s`, decode it and return the original letters.

The input is guaranteed to decode to exactly one string.

### Example 1

```text
Input: s = "17#23#5"
Output: "qwe"
Explanation: "17#" decodes to "q" (letter 17), "23#" decodes to "w"
(letter 23), and "5" decodes to "e" (letter 5).
```

### Example 2

```text
Input: s = "610#14"
Output: "fjad"
Explanation: "6" is "f", "10#" is "j", "1" is "a", and "4" is "d".
```

### Example 3

```text
Input: s = "1212"
Output: "abab"
Explanation: With no `#` present, every digit stands for one letter:
"1" is "a" and "2" is "b".
```

### Example 4

```text
Input: s = "26#"
Output: "z"
```

### Constraints

- `1 <= s.length <= 1000`
- `s` contains only digit characters and the character `'#'`.
- `s` is a valid encoding, so the decoded string is unique.

## Hints

### Hint 1

A `#` is only ever written after the two digits of a `j`..`z` letter, so a
`#` settles the split for the two digits in front of it. Walk the string
from the right: when the current character is `#`, the two digits before it
form one letter; otherwise the current digit is a letter on its own.
