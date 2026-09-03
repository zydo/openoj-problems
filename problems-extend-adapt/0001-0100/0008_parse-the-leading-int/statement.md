# Parse The Leading Integer

## Description

Read a 32-bit signed integer out of the front of a string `s`, ignoring
everything the number never reaches. Scanning left to right:

- **Blank space.** Skip any run of leading spaces.
- **Sign.** If the next character is `'-'` or `'+'`, that one character fixes
  the sign; with neither, the value ahead is positive. A second sign
  character never belongs to the number.
- **Digits.** Consume the run of decimal digits that follows — leading zeros
  contribute nothing to the value — and stop at the first character that is
  not a digit. An empty run means the value is 0.
- **Clamping.** Round the value into the signed 32-bit range
  `[-2³¹, 2³¹ - 1]`: anything below `-2³¹` becomes `-2³¹`, anything above
  `2³¹ - 1` becomes `2³¹ - 1`.

Return the integer the scan produces.

### Example 1

```text
Input: s = "  +741%"
Output: 741
```

The spaces are skipped, the `'+'` fixes a positive sign, and reading stops at
`'%'` because it is not a digit.

### Example 2

```text
Input: s = "  0032x9"
Output: 32
```

The leading zeros carry no weight, and the trailing `9` is never reached
because `x` ends the digit run first.

### Example 3

```text
Input: s = "-91283472332"
Output: -2147483648
```

The parsed value is far below the lower bound, so it is clamped to `-2³¹`.

### Example 4

```text
Input: s = "over9000"
Output: 0
```

The very first character is a letter, so no digits are read and the result is
the zero value.

### Constraints

- `0 <= s.length <= 200`
- `s` consists of English letters in either case, digits `'0'`–`'9'`, spaces,
  `'+'`, `'-'`, and `'.'`.
