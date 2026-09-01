# Digit Power Sum

## Description

A positive integer `n` with `k` digits is self-powering when the sum of
every digit raised to the `k`-th power comes back to `n` itself. Given
`n`, return `true` exactly when it has that property, and `false`
otherwise.

### Example 1

```text
Input: n = 9474
Output: true
Explanation: `9474` has 4 digits, and `9⁴ + 4⁴ + 7⁴ + 4⁴ = 6561 + 256 +
2401 + 256 = 9474`.
```

### Example 2

```text
Input: n = 10
Output: false
Explanation: `1² + 0² = 1`, which falls short of `10`.
```

### Example 3

```text
Input: n = 7
Output: true
Explanation: A one-digit number raised to the power `1` is itself.
```

### Constraints

- `1 <= n <= 10⁸`

## Hints

### Hint 1

Decide first how many digits `n` has — that count is the exponent `k`
every digit gets raised to.

### Hint 2

Strip the number one digit at a time: modulo 10 reads off the last digit
and integer division by 10 discards it. Raise each digit to the `k`-th
power and accumulate the sum as you go.

### Hint 3

The verdict is a single comparison between the accumulated sum and the
original `n` — keep `n` untouched in a separate variable before the
stripping starts.
