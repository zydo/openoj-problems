# What The Odd And Even Sums Share

## Description

Build two totals from the positive integers: `sumOdd` adds up the smallest
`n` odd numbers (`1, 3, 5, ...`), and `sumEven` adds up the smallest `n`
even numbers (`2, 4, 6, ...`).

Given the positive integer `n`, return the greatest common divisor of
`sumOdd` and `sumEven`.

### Example 1

```text
Input: n = 8
Output: 8
Explanation: The eight smallest odd numbers total 1 + 3 + ... + 15 = 64,
and the eight smallest even numbers total 2 + 4 + ... + 16 = 72. Since
gcd(64, 72) = 8, the answer is 8.
```

### Example 2

```text
Input: n = 25
Output: 25
Explanation: The odd total is 1 + 3 + ... + 49 = 625 and the even total is
2 + 4 + ... + 50 = 650; their greatest common divisor is 25.
```

### Constraints

- `1 <= n <= 1000`

## Hints

### Hint 1

Pairing terms around the middle shows the first `n` odd numbers summing to
`n * n`.

### Hint 2

The first `n` even numbers come to `n * (n + 1)` — just factor the shared
`n` out of `2 + 4 + ... + 2n`.

### Hint 3

Two consecutive integers are coprime, so `gcd(n, n + 1) = 1` and the common
factor `n` is all that survives.
