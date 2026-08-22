# Longest String Border

## Description

Call a **border** of a string `s` any non-empty prefix of `s` that also
appears as a suffix of `s`, other than `s` itself. The two copies may overlap.

Return the longest border of `s`. If none exists, return the empty string `""`.

### Example 1

```text
Input: s = "rotator"
Output: "r"
Explanation: The proper prefixes are "r", "ro", "rot", "rota", "rotat",
"rotato"; the suffixes are "r", "or", "tor", "ator", "tator", "otator".
The only string on both lists is "r".
```

### Example 2

```text
Input: s = "abcabcabc"
Output: "abcabc"
Explanation: "abcabc" is a prefix and also the final six characters. The
border is longer than half of s — the two copies overlap.
```

### Example 3

```text
Input: s = "mississippi"
Output: ""
Explanation: No proper prefix of any length reappears at the end, so the
answer is empty.
```

### Constraints

- `1 <= s.length <= 10^5`
- `s` consists only of lowercase English letters.

## Hints

### Hint 1

The quantity you need — longest proper prefix of `s` that is also a suffix —
is exactly what the KMP failure function's final entry stores.

### Hint 2

Fill the prefix-function table in one pass; the answer's length is
`pi[n - 1]`. The Z-algorithm or a rolling hash over prefixes would also do.
