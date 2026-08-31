# Equal Split Point

## Description

Given a positive integer `n`, find the split point `x` such that:

- The sum of all integers from `1` to `x` inclusively equals the sum of all
  integers from `x` to `n` inclusively.

Return the split point `x`. If no such integer exists, return `-1`. It is
guaranteed that at most one split point exists for a given input.

### Example 1

```text
Input: n = 49
Output: 35
Explanation: 35 is the split point since 1 + 2 + ... + 35 = 630 and
35 + 36 + ... + 49 = 630.
```

### Example 2

```text
Input: n = 288
Output: 204
Explanation: 204 is the split point since the two ranges both sum to 20910.
```

### Example 3

```text
Input: n = 5
Output: -1
Explanation: No integer x satisfies the equality.
```

### Example 4

```text
Input: n = 2
Output: -1
Explanation: Summing 1 alone gives 1 while summing 1 and 2 gives 3, so no
split point exists.
```

### Constraints

- `1 <= n <= 1000`

## Hints

### Hint 1

Both ranges have closed-form sums: `1 + 2 + ... + x = x(x+1)/2`.

### Hint 2

Setting the two closed forms equal cancels the linear terms and reduces the
condition to a single perfect-square test.

### Hint 3

The split point exists exactly when the total sum `n(n+1)/2` is a perfect
square, and the split point is then its square root.
