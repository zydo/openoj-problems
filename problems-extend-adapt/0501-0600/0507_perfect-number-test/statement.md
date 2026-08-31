# Perfect Number Test

## Description

Call a positive integer perfect when it equals the sum of its own proper
divisors — every divisor smaller than the number itself, but not the
number. (A divisor of `x` is any integer that splits `x` with no
remainder.)

Given an integer `num`, decide whether it is perfect: return `true` if it
is, `false` otherwise.

### Example 1

```text
Input: num = 496
Output: true
Explanation: 496 = 1 + 2 + 4 + 8 + 16 + 31 + 62 + 124 + 248, the sum of
every proper divisor of 496.
```

### Example 2

```text
Input: num = 100
Output: false
```

### Example 3

```text
Input: num = 8128
Output: true
```

### Constraints

- `num` satisfies `1 <= num <= 10⁸`.
