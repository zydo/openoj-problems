# Neighbors That Share No Bits

## Description

Fix a positive integer `n` and call another positive integer `x` a
_disjoint neighbor_ of `n` when the two integers never set the same bit —
that is, their bitwise AND is zero — and `x` stays within distance `k` of
`n`, meaning `abs(n - x) <= k`.

Return the sum of every disjoint neighbor of `n`.

### Example 1

```text
Input: n = 4, k = 3
Output: 6
Explanation:
    The allowed window is 1 through 7. Values 1, 2, and 3 use none of the
    bits that 4 (binary 100) uses, and no other value in the window is
    disjoint from 4.
    The sum is 1 + 2 + 3 = 6.
```

### Example 2

```text
Input: n = 6, k = 4
Output: 17
Explanation:
    The window runs 2 through 10, and 6 is binary 110, so a disjoint
    value there may only set bits 0 and 3: just 8 and 9 qualify.
    The sum is 8 + 9 = 17.
```

### Example 3

```text
Input: n = 10, k = 2
Output: 0
Explanation:
    The window 8..12 consists of values that all reuse a bit of 10
    (binary 1010), so the qualifying sum is empty and equals 0.
```

### Constraints

- `1 <= n <= 100`
- `1 <= k <= 100`

### Hint 1

The distance rule confines the candidates to the positive integers from
`max(1, n - k)` through `n + k`.

### Hint 2

Testing one candidate is a single AND — keep it when the result is zero.
