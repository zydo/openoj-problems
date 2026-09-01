# Matching Fraction Strings

## Description

Two strings each spell out a non-negative rational number, and you must
decide whether the two spellings describe the same value. A decimal point
and a bracketed tail are both optional: whatever a pair of parentheses
encloses repeats forever.

A spelling is assembled from up to three pieces — an integer part, a
non-repeating fractional part, and a repeating fractional part — arranged in
one of these shapes:

- `<IntegerPart>` — a whole number, like `19` or `0`.

- `<IntegerPart>.<NonRepeatingPart>` — a finite decimal, like `3.75` or
  `8.`.

- `<IntegerPart>.<NonRepeatingPart>(<RepeatingPart>)` — a decimal whose tail
  recurs without end, like `0.41(6)`.

Parentheses are the usual shorthand for endless repetition: `0.41(6)` means
`0.4166666...`, and so does `0.4166(6)`.

Return `true` when the two strings denote exactly the same number, and
`false` otherwise.

### Example 1

```text
Input: s = "5.1(36)", t = "5.136(36)"
Output: true
Explanation: Both strings describe 5.1363636..., so they agree.
```

### Example 2

```text
Input: s = "2.30(9)", t = "2.31"
Output: true
Explanation: The first string is 2.3099999..., which is exactly 2.31.
```

### Example 3

```text
Input: s = "1.20(2)", t = "1.202"
Output: false
Explanation: The first string is the endless decimal 1.2020202..., while
the second stops at 1.202.
```

### Constraints

- Every part consists only of digits.
- The `<IntegerPart>` carries no leading zeros (the single digit `0` is
  allowed).
- `1 <= <IntegerPart>.length <= 4`
- `0 <= <NonRepeatingPart>.length <= 4`
- `1 <= <RepeatingPart>.length <= 4`
