# One-Digit Rewrite Extremes

## Description

You are given an integer `num`. A single rewrite is now applied to it:
one digit is picked, and every occurrence of that digit in `num` is
replaced by some (possibly different) digit.

Work out how far apart the best and worst outcomes of one rewrite can be,
and return that spread — the largest value obtainable minus the smallest
value obtainable.

The rules:

- Rewriting digit `d1` to digit `d2` substitutes `d2` for **every**
  occurrence of `d1` in `num`.
- `d2` may equal `d1`, which leaves `num` unchanged.
- The rewrites producing the largest and the smallest value do not have
  to pick the same digit.
- A rewritten value may start with zeroes; those simply vanish when it is
  read back as a number.

### Example 1

```text
Input: num = 555
Output: 999
Explanation: Rewriting the digit 5 to 9 produces 999, the largest
possible value. Rewriting 5 to 0 produces "000", read as 0, the smallest
possible value. The spread is 999 - 0 = 999.
```

### Example 2

```text
Input: num = 123456
Output: 900000
Explanation: The largest value comes from rewriting the digit 1 to 9,
yielding 923456. The smallest comes from rewriting the digit 1 to 0,
yielding "023456", read as 23456. The spread is 923456 - 23456 = 900000.
```

### Example 3

```text
Input: num = 99999
Output: 99999
Explanation: Every digit is already 9, so the largest value stays 99999
whatever rewrite is applied, while rewriting 9 to 0 collapses the number
to 0.
```

### Constraints

- `1 <= num <= 10⁸`

## Hints

### Hint 1

For the largest result, find the leftmost digit that is not already 9 and
rewrite it to 9 everywhere.

### Hint 2

For the smallest result, rewrite the leading digit to 0 everywhere — one
rewrite covers all of its repeats.
