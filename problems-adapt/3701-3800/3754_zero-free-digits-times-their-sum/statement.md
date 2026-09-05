# Zero-Free Digits Times Their Sum

## Description

You are given a non-negative integer `n`.

Erase every `0` from the decimal representation of `n` and read the
surviving digits, in their original left-to-right order, as a single
integer `x`. If no digit survives — because `n` itself is `0`, or all of
its digits are `0` — then `x` is `0`.

Let `sum` be the sum of the digits of `x`. Return the value of `x * sum`.

### Example 1

```text
Input: n = 2400081
Output: 37215
Explanation: Stripping the zeros leaves the digits 2, 4, 8 and 1, so
x = 2481 and sum = 2 + 4 + 8 + 1 = 15. The answer is
x * sum = 2481 * 15 = 37215.
```

### Example 2

```text
Input: n = 506
Output: 616
Explanation: The surviving digits form x = 56 and sum = 5 + 6 = 11, so
the answer is x * sum = 56 * 11 = 616.
```

### Example 3

```text
Input: n = 2000000
Output: 4
Explanation: Only the digit 2 survives, so x = 2 and sum = 2. The
answer is x * sum = 2 * 2 = 4.
```

### Constraints

- `0 <= n <= 10⁹`

## Hints

### Hint 1

Walk the digits once (repeated `n % 10` and `n //= 10`, or a pass over
the string): pack each nonzero digit into `x` and add it to `sum` in the
same sweep, then multiply the two results.
