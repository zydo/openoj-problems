# Token Pattern Match

## Description

You are given a string `pattern` made only of lowercase letters and a
string `s` made of space-separated words. Determine whether `s` follows
`pattern` under a strict one-to-one correspondence:

- Every letter of `pattern` must always line up with the same word of
  `s`.
- Every distinct word of `s` must always line up with the same letter of
  `pattern`.
- Two different letters can never line up with the same word, and two
  different words can never line up with the same letter.

In other words, there must be a bijection between the letters used in
`pattern` and the words of `s`, position by position.

### Example 1

```text
Input: pattern = "xyyx", s = "cat dog dog cat"
Output: true
Explanation: Mapping 'x' to "cat" and 'y' to "dog" satisfies the
correspondence at every position.
```

### Example 2

```text
Input: pattern = "xyyx", s = "cat dog dog fish"
Output: false
Explanation: The last position needs "cat" again (since it maps to 'x'),
but the word there is "fish".
```

### Example 3

```text
Input: pattern = "xxxx", s = "cat dog dog cat"
Output: false
Explanation: 'x' would have to map to both "cat" and "dog" at once,
which breaks the one-letter-one-word rule.
```

### Constraints

- `1 <= pattern.length <= 300`
- `pattern` contains only lower-case English letters.
- `1 <= s.length <= 3000`
- `s` contains only lowercase English letters and spaces `' '`.
- `s` does not contain any leading or trailing spaces.
- All the words in `s` are separated by a single space.
