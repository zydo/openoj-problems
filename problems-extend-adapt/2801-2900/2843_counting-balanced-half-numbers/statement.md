# Counting Balanced-Half Numbers

## Description

Two positive integers `low` and `high` are given.

Call an integer balanced when its decimal representation has an even number
of digits, `2 * n`, and the digits split into two equal halves whose sums
match — the first `n` digits add up to exactly what the last `n` digits add
up to. A value with an odd digit count can never be balanced.

How many balanced integers fall inside the inclusive range `[low, high]`?

### Example 1

```text
Input: low = 10, high = 99
Output: 9
Explanation: Both-digit counts being equal, a two-digit number balances
exactly when its two digits match; the nine values 11, 22, 33, 44, 55, 66,
77, 88, and 99 qualify.
```

### Example 2

```text
Input: low = 3500, high = 4200
Output: 54
Explanation: Every four-digit value in the range whose leading pair sums to
its trailing pair counts — for instance 3535 (3 + 5 = 3 + 5) and 4004
(4 + 0 = 0 + 4). There are 54 such values between 3500 and 4200.
```

### Example 3

```text
Input: low = 100, high = 1000
Output: 0
Explanation: Everything from 100 through 999 has an odd digit count, and
1000 splits into 1 + 0 versus 0 + 0, so no value in the range balances.
```

### Constraints

- `1 <= low <= high <= 10⁴`

## Hints

### Hint 1

The range is small enough to inspect every value from `low` through `high`
individually.

### Hint 2

Write each value out as a decimal string and compare the digit sum of its
first half against that of its second half.
