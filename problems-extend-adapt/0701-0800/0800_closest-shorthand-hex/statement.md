# Closest Shorthand Hex

## Description

A full six-digit hex color `"#AABBCC"` has a compact three-digit
shorthand, `"#ABC"`, whenever each byte is a repeated digit — every
shorthand digit simply stands for itself written twice, so `"#15c"`
expands back out to `"#1155cc"`.

Define the closeness of two full hex colors `"#ABCDEF"` and
`"#UVWXYZ"` as the negative sum of squared byte differences,
`-(AB - UV)² - (CD - WX)² - (EF - YZ)²`, with each letter pair read as
a two-digit hexadecimal value. A closeness of `0` means the colors are
identical; every mismatch drives it further negative.

Given a full hex color `color`, return whichever expressible shorthand
color is closest to it under this measure. If more than one shorthand
color ties for the best closeness, any one of them is an acceptable
answer.

### Example 1

```text
Input: color = "#5b8fa2"
Output: "#5588aa"
Explanation: Checking the closeness: -(0x5b - 0x55)² - (0x8f - 0x88)² -
(0xa2 - 0xaa)² = -36 - 49 - 64 = -149, which is the best achievable
closeness among all shorthand colors.
```

### Example 2

```text
Input: color = "#7c2d91"
Output: "#773399"
```

### Constraints

- `color.length == 7`
- `color[0] == '#'`
- `color[i]` is either a digit or a character in the range `['a', 'f']` for
  `i > 0`.
