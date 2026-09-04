# Tidy the Digit Sum

## Description

You are given a positive integer `n` and a positive integer `target`.

An integer is called _tidy_ when the sum of its decimal digits is at most
`target`. You may add any non-negative integer `x` to `n`; return the
smallest such `x` for which `n + x` is tidy.

The inputs are chosen so that a tidy value is always reachable.

### Example 1

```text
Input: n = 24, target = 5
Output: 6
Explanation: The digit sum of 24 is 2 + 4 = 6, which exceeds 5. Adding 6
carries the number up to 30, whose digit sum 3 + 0 = 3 is within the
limit. Every smaller addend leaves a number from 24 through 29, all with
digit sums above 5.
```

### Example 2

```text
Input: n = 109, target = 3
Output: 1
Explanation: The digit sum of 109 is 1 + 0 + 9 = 10, above 3. Adding 1
rounds the number to 110, whose digit sum 1 + 1 + 0 = 2 fits within the
limit.
```

### Example 3

```text
Input: n = 58, target = 4
Output: 42
Explanation: The digit sum of 58 is 13. Rounding up to 60 gives digit sum
6, which is still above 4, so the number is rounded once more to 100,
whose digit sum is 1. The added amount is 100 - 58 = 42.
```

### Constraints

- `1 <= n <= 10¹²`
- `1 <= target <= 150`
- A tidy `n + x` is guaranteed to exist.

## Hints

### Hint 1

Increasing a digit in place never lowers the digit sum; only a carry from
rounding a suffix upward can.

### Hint 2

Try rounding `n` up to the next multiple of 10, then 100, then 1000, and
so on, stopping at the first rounded value whose digit sum is at most
`target`.
