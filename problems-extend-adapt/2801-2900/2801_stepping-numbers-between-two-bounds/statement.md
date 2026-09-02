# Stepping Numbers Between Two Bounds

## Description

Call a positive integer a **stepping number** when every pair of adjacent
digits differs by exactly one. Reading 1234 from the left, the digit steps
are 1→2, 2→3, 3→4 — each of size one — so it qualifies; 1300 fails at the
3→0 step, and so does anything with two equal neighbors. The first digit is
an ordinary most-significant digit, so it is never zero.

You are given the decimal strings `low` and `high` of two positive integers
with `low <= high`. Count how many stepping numbers fall in the inclusive
range `[low, high]` and return that count modulo 10⁹ + 7.

### Example 1

```text
Input: low = "10", high = "130"
Output: 20
Explanation: Seventeen two-digit numbers qualify — 10, 12, 21, 23, 32, 34,
43, 45, 54, 56, 65, 67, 76, 78, 87, 89, 98 — and the three-digit ones not
past 130 are 101, 121 and 123. Together that is 20.
```

### Example 2

```text
Input: low = "70", high = "70"
Output: 0
Explanation: The only candidate is 70 itself, and its digits 7 and 0 differ
by 7, so the range holds no stepping numbers.
```

### Example 3

```text
Input: low = "45", high = "1000"
Output: 42
Explanation: The two-digit portion contributes the ten numbers from 45
through 98 whose digits step by one, all thirty-two three-digit stepping
numbers fit under 1000, and the smallest four-digit stepping number, 1010,
does not. That gives 10 + 32 = 42.
```

### Constraints

- `1 <= int(low) <= int(high) < 10¹⁰⁰`
- `1 <= low.length, high.length <= 100`
- `low` and `high` are made up of digit characters only.
- Neither string starts with a zero.

## Hints

### Hint 1

Counting a range directly is awkward; count a prefix instead. The answer is
`f(high) - f(low - 1)` where `f(x)` counts stepping numbers up to `x`, and
`low - 1` is easy to produce with a manual borrow on the digit string.

### Hint 2

The real work is computing `f(x)` for one 100-digit bound.

### Hint 3

Split by length. Every length shorter than `x`'s is free of any upper-bound
worries, and a small table — `dp[i][d]` = how many `i`-digit stepping
numbers end in digit `d` — gives those counts with only the first digit
kept nonzero.

### Hint 4

For lengths equal to `x`, walk `x`'s own digits while remembering whether
the prefix built so far is still glued to `x` or has already dropped
strictly below it. A digit placed below `x`'s digit frees the remainder,
which the same table completes; the first adjacency violation abandons the
equal-prefix branch, and surviving the whole walk means `x` itself is a
stepping number.
