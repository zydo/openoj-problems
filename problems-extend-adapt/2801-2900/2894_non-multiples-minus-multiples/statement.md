# Non-Multiples Minus Multiples

## Description

You are given two positive integers `n` and `m`.

Split the integers `1` through `n` into two groups: the ones `m`
divides evenly, and all the others. Let `S_in` be the sum of the
divisible ones and `S_out` the sum of the rest.

Return `S_out - S_in`.

### Example 1

```text
Input: n = 12, m = 5
Output: 48
Explanation: Of the integers 1..12, only 5 and 10 are multiples of 5,
so S_in = 15. The rest sum to S_out = 1+2+3+4+6+7+8+9+11+12 = 63, and
63 - 15 = 48.
```

### Example 2

```text
Input: n = 9, m = 3
Output: 9
Explanation: The multiples of 3 up to 9 are 3, 6 and 9, so S_in = 18;
the remaining integers sum to 27. The answer is 27 - 18 = 9.
```

### Example 3

```text
Input: n = 7, m = 7
Output: 14
Explanation: Only 7 itself is a multiple of 7, so S_in = 7 and
S_out = 1+2+3+4+5+6 = 21, giving 21 - 7 = 14.
```

### Example 4

```text
Input: n = 1, m = 2
Output: 1
Explanation: No integer in [1, 1] is divisible by 2, so S_in = 0 and
S_out = 1. The answer is 1 - 0 = 1.
```

### Constraints

- `1 <= n, m <= 1000`

## Hints

### Hint 1

Each group is an arithmetic progression: 1 through n sums to
`n * (n + 1) / 2`, and the multiples of `m` are `m`, `2m`, ..., `km`
with `k = n / m`, summing to `m * k * (k + 1) / 2` — subtract one from
the other.
