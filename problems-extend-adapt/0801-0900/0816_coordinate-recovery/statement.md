# Coordinate Recovery

## Description

A coordinate was once written as two ordinary decimal numbers inside
parentheses, with a comma and one space between them. All punctuation — the
outer parentheses included only as a wrapper — was then stripped except that
the remaining digit sequence was placed back inside parentheses. For example,
`(1, 3)` becomes `"(13)"`, while `(2, 0.5)` becomes `"(205)"`.

Given the resulting string `s`, return every coordinate that could have
produced it. A number may be an integer or contain one decimal point. Its
spelling must be shortest possible: it cannot have an unnecessary leading
zero, and a decimal fraction cannot end in zero. Thus `0`, `0.12`, and `12.3`
are allowed, but `00`, `01`, `1.0`, and `00.1` are not.

Return coordinates in this fixed order: split the digit sequence after each
position from left to right. For each side of a split, list decimal forms with
the decimal point moving left to right before the plain integer form; vary
the left side more slowly than the right side. Put exactly one space after
the comma in every returned coordinate.

### Example 1

```text
Input: s = "(1203)"
Output: ["(1, 2.03)","(1, 20.3)","(1, 203)","(1.2, 0.3)","(12, 0.3)","(120, 3)"]
```

### Example 2

```text
Input: s = "(101)"
Output: ["(1, 0.1)","(10, 1)"]
```

### Constraints

- `4 <= s.length <= 12`
- `s[0] == '('` and `s[s.length - 1] == ')'`.
- Every character between the outer parentheses is a digit.
