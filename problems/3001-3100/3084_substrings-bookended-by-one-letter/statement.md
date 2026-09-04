# Substrings Bookended By One Letter

## Description

Given a string `s` and a character `c`, count the substrings of `s` whose
first and last characters both equal `c`. Substrings at different positions
count separately even when they spell the same word, and the lone character
`c` itself qualifies.

### Example 1

```text
Input: s = "banana", c = "a"
Output: 6
Explanation: The a's sit at three positions, and every choice of a start position and an end position among them — the same position twice allowed — picks out one substring: three lone "a" substrings plus "ana", "anana", and a second positional "ana".
```

### Example 2

```text
Input: s = "tent", c = "t"
Output: 3
Explanation: The two t's bookend the two single-letter "t" substrings and "tent" itself.
```

### Example 3

```text
Input: s = "xyz", c = "q"
Output: 0
Explanation: The letter q never appears in s, so nothing can be bookended by it.
```

### Constraints

- `1 <= s.length <= 10⁵`
- `s` and `c` consist only of lowercase English letters

## Hints

### Hint 1

Only the positions where `c` occurs matter; call their number `m`.

### Hint 2

A qualifying substring is nothing more than a choice of two occurrence
positions — the same position chosen twice gives the length-1 substring.

### Hint 3

The answer is therefore `m * (m + 1) / 2`.
