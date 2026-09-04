# Does It Read As A Number

## Description

You are given a string of characters and must decide whether the whole
string can be read as one decimal number, possibly written in
scientific notation. Nothing may be discarded or ignored: every
character has to belong to the number.

A well-formed number has this shape: a base part — either a plain
integer or a decimal — optionally followed by an exponent. The base
may start with a single `'+'` or `'-'`. A plain integer is one or more
digits. A decimal is one or more digits with a single `'.'` anywhere
among them — before them, between them, or after them — as long as at
least one digit is present. An exponent, when it appears, is the
letter `'e'` or `'E'` followed by a plain integer of its own, sign
allowed; the base itself must contain a digit before an exponent can
attach.

Return `true` when the string matches this shape exactly and `false`
otherwise.

### Example 1

```text
Input: s = "+.8e-5"
Output: true
```

A signed decimal whose digits sit after the dot, carrying a negative
exponent: well formed.

### Example 2

```text
Input: s = "46.e3"
Output: true
```

The dot may trail the mantissa's digits, and the exponent `3` is a
valid integer.

### Example 3

```text
Input: s = "4e+"
Output: false
```

The `'+'` after the exponent marker is not followed by any digit.

### Example 4

```text
Input: s = "--.5"
Output: false
```

Two signs in a row is one more than the grammar allows.

### Constraints

- `1 <= s.length <= 20`
- `s` contains only English letters in either case, digits, `'+'`,
  `'-'`, and `'.'`.
