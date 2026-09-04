# Fitting A Starred Pattern Inside

## Description

You are given a string `s` and a pattern string `p` that holds exactly
one `'*'` character.

The `'*'` stands for any run of characters — possibly empty. Swapping
the star for some run turns `p` into an ordinary string.

Return `true` if some substitution makes the result a substring of
`s`, and `false` otherwise.

### Example 1

```text
Input: s = "shadowbox", p = "sh*box"
Output: true
Explanation: Replacing the '*' with "adow" yields "shadowbox", which is
the whole of s.
```

### Example 2

```text
Input: s = "gateway", p = "*way"
Output: true
Explanation: An empty substitution for the '*' leaves "way", the
trailing substring of s.
```

### Example 3

```text
Input: s = "dialog", p = "g*a"
Output: false
Explanation: Both letters occur, but no 'g' sits before an 'a', so no
substitution lands the pattern inside s.
```

### Constraints

- `1 <= s.length <= 50`
- `1 <= p.length <= 50`
- `s` contains only lowercase English letters.
- `p` contains only lowercase English letters and exactly one `'*'`

## Hints

### Hint 1

Cut the pattern at the star: what is left is a fixed head and a fixed
tail to locate inside `s`.

### Hint 2

The head only needs its earliest occurrence and the tail its latest;
the star absorbs everything — or nothing — in between as long as the
head finishes before the tail begins.
