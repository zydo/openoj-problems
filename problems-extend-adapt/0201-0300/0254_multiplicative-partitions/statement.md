# Multiplicative Partitions

## Description

Any integer greater than `1` can be written as a product of smaller
integers in more than one way — for instance, `18 = 2 x 9 = 3 x 6 = 2 x
3 x 3`.

Given an integer `n`, return every way to write `n` as a product of two
or more factors, where each factor lies in the range `[2, n - 1]`.

For a deterministic answer: list the factors of each combination in
ascending order, and order the combinations themselves by factor count
(fewest factors first), breaking ties in ascending lexicographic order.

### Example 1

```text
Input: n = 1
Output: []
```

### Example 2

```text
Input: n = 18
Output: [[2,9],[3,6],[2,3,3]]
```

### Example 3

```text
Input: n = 29
Output: []
```

### Constraints

- `1 <= n <= 10⁷`

## Hints

### Hint 1

Search for factors starting from `2` and moving upward, only ever
choosing the next factor to be at least as large as the last one you
picked. That ordering rule alone prevents `[2,9]` and `[9,2]` from both
being generated.
