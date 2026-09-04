# Consecutive Run Count

## Description

For a positive integer `n`, a valid representation is a sequence of one or
more consecutive positive integers whose total is `n`. Return how many
distinct valid representations `n` has.

### Example 1

```text
Input: n = 8
Output: 1
Explanation: The only representation is the one-term sequence 8.
```

### Example 2

```text
Input: n = 21
Output: 4
Explanation: The representations are 21, 10 + 11, 6 + 7 + 8, and
1 + 2 + 3 + 4 + 5 + 6.
```

### Example 3

```text
Input: n = 32
Output: 1
Explanation: No sequence with two or more consecutive positive terms sums
to 32.
```

### Constraints

- `1 <= n <= 10⁹`
