# Ternary Power Check

## Description

Given a signed 32-bit integer `n`, determine whether it is an exact power
of three. In other words, return `true` when some nonnegative integer `e`
satisfies `n = 3^e`; otherwise return `false`.

### Example 1

```text
Input: n = 81
Output: true
Explanation: 81 = 3⁴.
```

### Example 2

```text
Input: n = 45
Output: false
Explanation: 45 is not a power of three.
```

### Example 3

```text
Input: n = -3
Output: false
Explanation: A power must have a nonnegative exponent, so it is positive.
```

### Constraints

- `-2³¹ <= n <= 2³¹ - 1`

### Follow-up

Can you solve it without loops or recursion?
