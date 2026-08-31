# Token Pattern Match II

## Description

You are given a string `pattern` and a string `s`, both made only of
lowercase English letters. Decide whether `s` can be produced by
substituting every occurrence of each `pattern` character with some
fixed, non-empty chunk of text — where the substitution is a true
bijection: distinct characters must be replaced with distinct chunks,
and the same character must always be replaced with the same chunk.

Unlike a simpler word-matching variant, here you are not told where the
chunk boundaries fall inside `s` — you must discover both the
per-character substitution and the split points that make the
concatenation equal `s`, if any such assignment exists.

### Example 1

```text
Input: pattern = "abab", s = "hihohiho"
Output: true
Explanation: One valid assignment is:
'a' -> "hi"
'b' -> "ho"
```

### Example 2

```text
Input: pattern = "aaaa", s = "pqpqpqpqpqpqpqpq"
Output: true
Explanation: One valid assignment is:
'a' -> "pqpq"
```

### Example 3

```text
Input: pattern = "aabb", s = "mnopqrmnrpoq"
Output: false
```

### Constraints

- `1 <= pattern.length, s.length <= 20`
- `pattern` and `s` consist of only lowercase English letters.
