# Deepest Bracket Nesting

## Description

You receive a string `s` holding a valid parentheses expression. Besides
round brackets it may carry digits and the arithmetic operators `+`, `-`,
`*`, and `/`, but those never influence nesting — only the brackets do.

Measure how deeply `s` nests: scanning once from left to right, the
nesting level at any moment is how many brackets are currently open, and
the string's nesting is the largest level ever reached.

Return that largest level.

### Example 1

```text
Input: s = "(2+((3*4)-1))/2"
Output: 3
Explanation: The subexpression (3*4) sits inside three nested pairs of
brackets, and nothing in the string is buried deeper.
```

### Example 2

```text
Input: s = "((2+((7)/3))*5)"
Output: 4
Explanation: The digit 7 alone is wrapped in four nested pairs, so the
string nests four deep.
```

### Example 3

```text
Input: s = "((()))()(())"
Output: 3
```

### Constraints

- `1 <= s.length <= 100`
- `s` is built from the digits `0-9`, the operators `+`, `-`, `*`, `/`,
  and the brackets `(` and `)`.
- `s` is guaranteed to be a valid parentheses string.

## Hints

### Hint 1

Reading left to right, a character's nesting level is simply the number
of `(` marks seen so far minus the number of `)` marks.
