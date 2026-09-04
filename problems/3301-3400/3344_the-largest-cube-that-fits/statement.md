# The Largest Cube That Fits

## Description

Fix a positive integer `n` and picture an `n × n × n` grid of numbers `A`,
indexed by `0 <= i, j, k < n`, whose entries follow one rule:

```text
A[i][j][k] = i * (j OR k)
```

where `OR` is the bitwise-or of the two indices. Every choice of `n`
produces some grand total over all `n³` entries, and that total grows
quickly as the cube grows.

You are given a nonnegative integer `s`, a budget. Return the largest `n`
whose cube total stays within budget, i.e. the largest `n` such that the
sum of all elements of `A` is at most `s`.

### Example 1

```text
Input: s = 25
Output: 2
Explanation: For n = 2 the eight entries are
0 * (0 OR 0) = 0, 0 * (0 OR 1) = 0, 0 * (1 OR 0) = 0, 0 * (1 OR 1) = 0,
1 * (0 OR 0) = 0, 1 * (0 OR 1) = 1, 1 * (1 OR 0) = 1, 1 * (1 OR 1) = 1,
so the total is 3 <= 25. Growing to n = 3 already costs 45 > 25, so the
largest cube that fits has n = 2.
```

### Example 2

```text
Input: s = 9999
Output: 8
Explanation: An n = 8 cube totals 9408, which is within the budget, while
an n = 9 cube totals 19008 and overshoots it.
```

### Example 3

```text
Input: s = 12345678901234
Output: 505
```

### Constraints

- `0 <= s <= 10^15`
