# A Divisor Built From the Digits

## Description

Given a positive integer `n`, fold its digits two ways: add them up, and
multiply them together. Adding the two results gives one combined value —
call it the digits' total.

Return `true` when `n` is divisible by that total, and `false`
otherwise.

### Example 1

```text
Input: n = 39
Output: true
Explanation: The digits add to 3 + 9 = 12 and multiply to 3 * 9 = 27,
giving a total of 39 — exactly n itself, so n divides evenly by it.
```

### Example 2

```text
Input: n = 47
Output: false
Explanation: The digits add to 4 + 7 = 11 and multiply to 4 * 7 = 28,
a total of 39. Since 47 % 39 is nonzero, the answer is false.
```

### Example 3

```text
Input: n = 10
Output: true
Explanation: The digit product collapses to 1 * 0 = 0, but the digit sum
of 1 keeps the total a valid divisor of 1, and every integer divides
evenly by 1.
```

### Example 4

```text
Input: n = 1000000
Output: true
Explanation: Six zeros zero the product, while the single 1 leaves a
digit sum of 1, so the total is 1 and the answer is true.
```

### Constraints

- `1 <= n <= 10⁶`

## Hints

### Hint 1

Peel the digits off `n` by repeated division by ten, folding each digit
into a running sum and a running product as it comes loose.

### Hint 2

The answer is just `n % (digit sum + digit product) == 0` — and the digit
sum of a positive integer is at least 1, so the divisor is never zero even
when every digit product collapses.
