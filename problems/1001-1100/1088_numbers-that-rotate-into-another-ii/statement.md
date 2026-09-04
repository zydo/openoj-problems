# Numbers That Rotate Into Another II

## Description

Write a number on a sheet of paper and rotate the sheet by 180 degrees.
Some digits survive the turn, each mapping to another digit:

- `0`, `1`, and `8` land back on themselves, while `6` and `9` trade
  places with each other.
- `2`, `3`, `4`, `5`, and `7` have no upside-down shape at all, so a
  number containing any of them cannot be rotated into a number.

After the rotation, leading zeros are simply discarded: rotating `8000`
leaves `0008`, which reads as `8`.

A number _rotates into another_ when every one of its digits survives
the rotation and the numeral read off afterwards differs from the
original. Given an integer `n`, return how many numbers in the
inclusive range `[1, n]` rotate into another.

### Example 1

```text
Input: n = 15
Output: 3
Explanation: Only 1, 6, 8, 9, 10, and 11 are made of digits that
survive the turn, and exactly three of them change: 6 becomes 9, 9
becomes 6, and 10 becomes 1 once its leading zero falls away. 1, 8,
and 11 read as themselves either way up.
```

### Example 2

```text
Input: n = 85
Output: 12
Explanation: The twelve are 6, 9, 10, 16, 18, 19, 60, 61, 66, 68, 80,
and 81. Near misses stay out: 69 reads 69 from either end, and numbers
like 25 contain a digit with no upside-down shape.
```

### Constraints

- `1 <= n <= 10⁹`

## Hints

### Hint 1

Testing every integer up to `n` one at a time is far too slow. Only
five digits may ever appear in a candidate, so think about building the
candidates directly instead of filtering.

### Hint 2

Grow a candidate one digit at a time from `{0, 1, 6, 8, 9}`, never
starting with `0`, and abandon a branch as soon as it passes `n`. Carry
the rotated value alongside the candidate: appending a digit shifts
every earlier digit one place further along the reversed, mapped order.
A candidate counts exactly when the rotation it carries differs from
the candidate itself.
