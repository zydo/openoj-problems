# Two Numbers From Four Digits

## Description

You are given a positive integer `num` with exactly four digits. Deal its four
digits out to build two new integers `a` and `b`: every digit of `num` must be
used exactly once across the two numbers, and leading zeros are permitted.

For instance, from `num = 2932` — two 2s, one 9, and one 3 — legal build-outs
include `[22, 93]`, `[23, 92]`, `[223, 9]`, and `[2, 329]`.

Return the smallest value that `a + b` can take over all ways to deal the
digits.

### Example 1

```text
Input: num = 7164
Output: 63
Explanation: The digits are 1, 4, 6, and 7. The smallest sum comes from
building 16 and 47: 16 + 47 = 63. Splits such as [167, 4] or [71, 64] give
strictly more.
```

### Example 2

```text
Input: num = 9081
Output: 27
Explanation: The digits are 9, 0, 8, and 1. Building 09 and 18 — that is,
9 and 18 — sums to 27, and nothing beats it.
```

### Example 3

```text
Input: num = 1000
Output: 1
Explanation: The digits are 1, 0, 0, and 0. Building 01 and 00 gives the
numbers 1 and 0, whose sum is 1.
```

### Constraints

- `1000 <= num <= 9999`

## Hints

### Hint 1

Which place a digit lands in decides how much it costs — a digit in a
hundreds place weighs ten times what it would weigh in a tens place. What
does that say about how many digits each of the two numbers should get?

### Hint 2

Two digits each is always best, and the two tens places are the expensive
slots: hand those to the smallest digits.

### Hint 3

So sort the four digits; pair the smallest with the largest and the two
middle ones, each pair forming one two-digit number.
