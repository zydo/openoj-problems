# Signed Digit Tally

## Description

You are given a positive integer `n`. Read its decimal digits and give
each one a sign:

- the leading (most significant) digit counts as positive;
- every following digit flips the sign of the digit before it.

Return the total of the digits after their signs are applied.

### Example 1

```text
Input: n = 739
Output: 13
Explanation: (+7) + (-3) + (+9) = 13.
```

### Example 2

```text
Input: n = 120
Output: -1
Explanation: (+1) + (-2) + (+0) = -1.
```

### Example 3

```text
Input: n = 4004
Output: 0
Explanation: (+4) + (-0) + (+0) + (-4) = 0.
```

### Constraints

- `1 <= n <= 10⁹`

## Hints

### Hint 1

Visit the digits left to right — via a string, a digit array, or plain
arithmetic on the number.

### Hint 2

Hold onto two values as you go: the running total and the sign that the
next digit will carry.

### Hint 3

For each digit, fold `sign * digit` into the total and then flip `sign`.
