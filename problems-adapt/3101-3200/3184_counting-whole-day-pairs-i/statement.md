# Counting Whole-Day Pairs I

## Description

A logistics planner holds a list of shift lengths, each given in hours.
A pair of shifts covers whole days exactly when their combined length is
a multiple of 24 — one day is 24 hours, two days are 48, and so on. The
planner wants to know how many ways two distinct shifts can be teamed up
that way.

Given an integer array `hours` of shift lengths, count the index pairs
`(i, j)` with `i < j` such that `hours[i] + hours[j]` is divisible by
24, and return that count.

### Example 1

```text
Input: hours = [18,30,42,6]
Output: 4
Explanation:
The pairs that combine to a multiple of 24 are (0, 1), (0, 3), (1, 2),
and (2, 3) — sums of 48, 24, 72, and 48 hours respectively.
```

### Example 2

```text
Input: hours = [5,11,1000000000]
Output: 0
Explanation:
No two of the three lengths add up to a multiple of 24.
```

### Example 3

```text
Input: hours = [24,48,72]
Output: 3
Explanation:
Each length is already some whole number of days, so every one of the
three possible pairs qualifies.
```

### Constraints

- `1 <= hours.length <= 100`
- `1 <= hours[i] <= 10⁹`

## Hints

### Hint 1

Testing all `(i, j)` pairs is affordable at this size; a pair counts
exactly when `(hours[i] + hours[j]) % 24 == 0`.
