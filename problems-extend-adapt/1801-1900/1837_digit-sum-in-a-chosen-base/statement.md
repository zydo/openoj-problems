# Digit Sum In A Chosen Base

## Description

You are given a base-10 integer `n` and a base `k`. Rewrite `n` in base
`k` and add up its digits — each digit taken at face value as an ordinary
number — and return that sum.

### Example 1

```text
Input: n = 57, k = 4
Output: 6
Explanation: In base 4 the value 57 is written 321, and 3 + 2 + 1 = 6.
```

### Example 2

```text
Input: n = 100, k = 5
Output: 4
Explanation: In base 5 the value 100 is written 400, whose digits add to
4.
```

### Example 3

```text
Input: n = 29, k = 2
Output: 4
Explanation: In binary, 29 is 11101; the bits sum to 1 + 1 + 1 + 0 + 1 =
4.
```

### Constraints

- `1 <= n <= 100`
- `2 <= k <= 10`

## Hints

### Hint 1

Peel `n` apart one base-`k` digit at a time: `n % k` is the next digit,
then divide `n` by `k` and repeat.
