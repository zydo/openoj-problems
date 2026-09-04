# Maximum Repeat Count

## Description

Write `[s, n]` for the string formed by concatenating `s` with itself `n`
times. Say a string can be _carved_ from another when deleting zero or more
characters of the second produces the first.

Two source strings `s1`, `s2` and repetition counts `n1`, `n2` are given.
Form `str1 = [s1, n1]` and `str2 = [s2, n2]`. Return the largest integer `m`
such that `[str2, m]` — the string `str2` repeated `m` times — can be carved
from `str1`.

### Example 1

```text
Input: s1 = "abc", n1 = 3, s2 = "ab", n2 = 1
Output: 3
Explanation: str1 is "abcabcabc", and three copies of "ab" can be carved
from it, one from each block.
```

### Example 2

```text
Input: s1 = "ab", n1 = 5, s2 = "ab", n2 = 2
Output: 2
Explanation: str1 holds five copies of "ab". Two copies of "ab" need four
occurrences of the pair, so four of the five blocks support them.
```

### Example 3

```text
Input: s1 = "ab", n1 = 1, s2 = "ab", n2 = 2
Output: 0
Explanation: One copy of "ab" cannot supply two copies of the same string.
```

### Constraints

- `1 <= s1.length, s2.length <= 100`
- `s1` and `s2` consist only of lowercase English letters.
- `1 <= n1, n2 <= 10⁶`
