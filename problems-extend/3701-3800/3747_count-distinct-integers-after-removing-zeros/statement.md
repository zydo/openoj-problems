# Count Distinct Integers After Removing Zeros

## Description

You are given a positive integer `n`.

For every integer `x` from `1` to `n`, write down the integer obtained by
deleting every digit `0` from the decimal representation of `x`. The
surviving digits keep their order and are read back together as one
ordinary integer: `100` writes down `1`, `2050` writes down `25`, and a
value with no zero digit at all simply writes down itself. Because `x` is
positive it always has at least one nonzero digit, so what gets written
down is never empty.

Return the number of **distinct** integers written down, where distinctness
is judged on those post-removal values — for instance `10`, `100`, and `1`
all write down `1` and together contribute a single distinct integer.

The answer counts values, not the act of writing: a value is counted once
no matter how many `x` produce it, and every value written down is itself
an integer between 1 and n whose decimal representation contains no zero.
Conversely each zero-free value up to `n` does get written (by itself), so
the answer is exactly how many integers in `[1, n]` are zero-free.

### Example 1

```text
Input: n = 10
Output: 9
Explanation: The integers written down are 1, 2, 3, 4, 5, 6, 7, 8, 9,
and, for x = 10, 1 again. There are 9 distinct integers.
```

### Example 2

```text
Input: n = 3
Output: 3
Explanation: The integers written down are 1, 2, 3 — all distinct, so the
answer is 3.
```

### Example 3

```text
Input: n = 110
Output: 90
Explanation: The 90 zero-free values up to 99 are written down by
themselves; x from 100 to 110 write down 1, 11, 12, ..., 19, 11 — every
one of them was already counted, so the total stays 90.
```

### Constraints

- `1 <= n <= 10¹⁵`

## Hints

### Hint 1

Build integers less than or equal to `n` using only digits from 1 to 9.

### Hint 2

Count such integers using math or digit DP.
