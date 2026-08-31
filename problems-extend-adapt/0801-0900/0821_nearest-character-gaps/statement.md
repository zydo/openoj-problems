# Nearest Character Gaps

## Description

Given a lowercase string `s` and a lowercase character `c` that appears in
`s`, build an array `answer` of the same length. For every index `i`,
`answer[i]` must be the distance from `i` to the closest occurrence of `c`.
The distance between positions `i` and `j` is `abs(i - j)`.

### Example 1

```text
Input: s = "abacada", c = "a"
Output: [0,1,0,1,0,1,0]
```

### Example 2

```text
Input: s = "zzxzzz", c = "x"
Output: [2,1,0,1,2,3]
```

### Constraints

- `1 <= s.length <= 10⁴`
- Both `s[i]` and `c` are lowercase English letters.
- `c` occurs at least once in `s`.
