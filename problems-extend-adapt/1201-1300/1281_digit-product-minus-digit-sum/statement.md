# Digit Product Minus Digit Sum

## Description

Take a positive integer `n` and look at its decimal digits. Multiply
them all together, add them all up, and return the product minus the
sum.

### Example 1

```text
Input: n = 377
Output: 130
Explanation:
Product of digits = 3 * 7 * 7 = 147
Sum of digits = 3 + 7 + 7 = 17
Answer = 147 - 17 = 130
```

### Example 2

```text
Input: n = 8506
Output: -19
Explanation:
Product of digits = 8 * 5 * 0 * 6 = 0
Sum of digits = 8 + 5 + 0 + 6 = 19
Answer = 0 - 19 = -19
```

### Constraints

- `1 <= n <= 10^5`

## Hints

### Hint 1

How would you visit every digit of `n` one at a time?

### Hint 2

`n % 10` isolates the last digit.

### Hint 3

Pair that remainder with integer division to walk through all digits
until none are left.
