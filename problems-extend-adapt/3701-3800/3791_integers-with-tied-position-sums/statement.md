# Integers With Tied Position Sums

## Description

Two integers `low` and `high` are given. Call an integer tied when it has at
least two digits and the digits sitting at odd positions add up to exactly
what the digits at even positions add up to, counting positions from 1 at
the leftmost digit. How many tied integers fall inside the inclusive range
`[low, high]`?

### Example 1

```text
Input: low = 1, high = 150
Output: 13
Explanation: The two-digit ties are 11, 22, ..., 99 — nine of them. Up to
150 the three-digit ties are 110, 121, 132 and 143; for instance 143 has
odd-position sum 1 + 3 = 4 matching its even-position digit 4. That totals
9 + 4 = 13.
```

### Example 2

```text
Input: low = 2345, high = 2345
Output: 0
Explanation: 2345 fails the test: its odd-position digits give 2 + 4 = 6
while its even-position digits give 3 + 5 = 8.
```

### Example 3

```text
Input: low = 1, high = 10000
Output: 669
Explanation: The two- and three-digit ties contribute 9 and 45, and the
four-digit block adds 615 more, for 669 in total.
```

### Constraints

- `1 <= low <= high <= 10¹⁵`

## Hints

### Hint 1

Count with digit dynamic programming: let `f(x)` be the number of tied
integers in `[1, x]`, and answer `f(high) - f(low - 1)`.

### Hint 2

Build numbers from the most significant digit, carrying the gap between the
odd-position sum and the even-position sum; the gap must end at zero.

### Hint 3

Leading zeros must not disturb the running gap, so treat them as "not
started yet" during transitions.

### Hint 4

Count a placement only once at least two real digits have been set down.
