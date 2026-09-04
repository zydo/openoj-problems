# The First Digit-Product Match

## Description

Take an integer's digits and multiply them together; call that its digit
product. For example, the digit product of `23` is `2 * 3 = 6`. Any number
that contains a `0` digit has digit product `0`.

Given two integers `n` and `t`, find the smallest number `m` with `m >= n`
whose digit product is divisible by `t`.

### Example 1

```text
Input: n = 37, t = 5
Output: 40
Explanation: The candidates climb from 37 upward: 3*7 = 21, 3*8 = 24,
3*9 = 27 — none divisible by 5. Then 4*0 = 0, and 0 is divisible by 5, so
the answer is 40.
```

### Example 2

```text
Input: n = 23, t = 4
Output: 24
Explanation: 2*3 = 6 is not divisible by 4, but 2*4 = 8 is, so 24 is the
first match.
```

### Example 3

```text
Input: n = 48, t = 7
Output: 50
Explanation: 4*8 = 32 and 4*9 = 36 both miss, while 5*0 = 0 is divisible
by 7.
```

### Constraints

- `1 <= n <= 100`
- `1 <= t <= 10`

### Hints

- The answer never lies far from `n`: a multiple of `10` is guaranteed to
  appear within a short climb, and its digit product is `0`.
- Check the numbers `n`, `n + 1`, `n + 2`, ... one at a time until one
  qualifies.
