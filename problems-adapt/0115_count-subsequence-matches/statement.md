# Count Subsequence Matches

## Description

Deleting some characters of a string — possibly none — and leaving the rest in
place yields a *subsequence*. Two subsequences are considered different when
they are drawn from different positions, even if the letters they spell are
the same.

Given strings `s` and `t`, count how many subsequences of `s` spell `t`.

The inputs are chosen so that the count fits in a signed 32-bit integer.

### Example 1

```text
Input: s = "banana", t = "bana"
Output: 4
Explanation: Writing the chosen positions in capitals:
BANAna, BANanA, BAnaNA, BanANA.
```

### Example 2

```text
Input: s = "aaa", t = "aa"
Output: 3
Explanation: Any two of the three positions will do.
```

### Example 3

```text
Input: s = "ab", t = "abb"
Output: 0
Explanation: A subsequence is never longer than the string it comes from.
```

### Constraints

- `1 <= s.length, t.length <= 1000`
- `s` and `t` consist of English letters.

## Hints

### Hint 1

Ask a smaller question: how many ways are there to spell the first `j`
characters of `t` using only the first `i` characters of `s`? The answer you
want is that quantity at the far corner.

### Hint 2

Consider the last character of that prefix of `s`. You may always ignore it.
If it happens to equal the character of `t` you are trying to place, you may
instead spend it there — and those two choices land on different position
sets, so their counts add.

### Hint 3

Each row depends only on the row above it, so one array suffices. Update it
from the far end backwards, or you will read a value the current character has
already changed and let a single character of `s` fill two places in `t`.
