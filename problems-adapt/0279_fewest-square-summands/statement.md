# Fewest Square Summands

## Description

A square number is an integer of the form `k * k` with `k` an integer:
`1`, `4`, `9`, `16`, and so on, while `3` and `11` are not.

Given an integer `n`, return the smallest number of square numbers whose
sum is exactly `n`. The same square may be used any number of times.

### Example 1

```text
Input: n = 6
Output: 3
Explanation: 6 = 4 + 1 + 1. No pair of squares reaches 6.
```

### Example 2

```text
Input: n = 20
Output: 2
Explanation: 20 = 16 + 4.
```

### Example 3

```text
Input: n = 15
Output: 4
Explanation: 15 = 9 + 4 + 1 + 1. Three squares can never be enough for
this n, no matter which three you pick.
```

### Constraints

- `1 <= n <= 10^4`

## Hints

### Hint 1

Condition on the last summand: if the decomposition of `n` ends with the
square `s`, everything before it decomposes `n - s`. What recurrence does
that give for the smallest count?

### Hint 2

Only squares not exceeding the current value can be the last summand, so
each value consults roughly `√n` candidates at most.

### Hint 3

The recursion grounds out at zero, which needs no summands at all.

### Hint 4

The same question phrased as a search: start at `n` and walk to `0`,
where each step may subtract any square. The answer is the length of the
shortest such walk.
