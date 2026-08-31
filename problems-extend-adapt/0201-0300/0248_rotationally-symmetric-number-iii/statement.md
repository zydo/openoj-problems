# Rotationally Symmetric Number III

## Description

A number is **rotationally symmetric** if turning its written form upside
down (a 180-degree rotation) reproduces the exact same digit string. Only
`0`, `1`, and `8` rotate into themselves, while `6` and `9` rotate into
each other; any other digit breaks the symmetry outright.

You are given two strings `low` and `high`, each the decimal digits of a
non-negative integer, with `low <= high` as numbers. Return how many
rotationally symmetric numbers fall in the inclusive range `[low, high]`.

### Example 1

```text
Input: low = "10", high = "120"
Output: 6
Explanation: The rotationally symmetric numbers in range are 11, 69, 88,
96, 101, and 111.
```

### Example 2

```text
Input: low = "9", high = "9"
Output: 0
Explanation: 9 rotates 180 degrees into 6, not back into itself, so it
does not count.
```

### Constraints

- `1 <= low.length, high.length <= 15`
- `low` and `high` consist only of digits.
- `low <= high`, comparing them as integers.
- Neither `low` nor `high` has a leading zero, unless the value itself is
  `"0"`.

## Hints

### Hint 1

A number's symmetry is fixed by its first half — the second half is
forced to be the rotated mirror of the first. Count by length: for
lengths strictly between `low` and `high`, every symmetric string of
that length is valid, so count them with a closed-form product instead
of building them one by one. Only the two boundary lengths need a
digit-by-digit comparison against `low` or `high`.
