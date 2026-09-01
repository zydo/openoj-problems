# Awkward Factorial

## Description

The ordinary factorial multiplies every integer from `n` down to `1`:
`factorial(5) = 5 * 4 * 3 * 2 * 1`.

The awkward factorial walks the same descending sequence of integers but
replaces every multiplication with a fixed rotation of four operations —
multiply `*`, divide `/`, add `+`, subtract `-` — restarting the rotation
after each step:

`awkwardFactorial(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1`

Normal arithmetic precedence still governs the result: every `*` and `/`
is resolved before any `+` or `-`, and consecutive `*`/`/` steps run left
to right. Division truncates toward zero — `10 * 9 / 8` means
`90 / 8 = 11`.

Given `n`, return its awkward factorial.

### Example 1

```text
Input: n = 14
Output: 16
Explanation: 14 * 13 / 12 + 11 - 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1
= 15 + 11 - 11 + 7 - 7 + 3 - 2 = 16.
```

### Example 2

```text
Input: n = 15
Output: 14
Explanation: 15 * 14 / 13 + 12 - 11 * 10 / 9 + 8 - 7 * 6 / 5 + 4 -
3 * 2 / 1 = 16 + 12 - 12 + 8 - 8 + 4 - 6 = 14.
```

### Example 3

```text
Input: n = 21
Output: 23
Explanation: 21 * 20 / 19 + 18 - 17 * 16 / 15 + 14 - 13 * 12 / 11 + 10 -
9 * 8 / 7 + 6 - 5 * 4 / 3 + 2 - 1 = 22 + 18 - 18 + 14 - 14 + 10 - 10 +
6 - 6 + 2 - 1 = 23.
```

### Constraints

- `1 <= n <= 10^4`
