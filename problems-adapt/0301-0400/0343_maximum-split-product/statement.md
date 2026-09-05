# Maximum Split Product

## Description

Given an integer `n`, divide it into a sum of at least two positive
integers. Among all valid divisions, find the largest possible product of
the parts and return that product.

### Example 1

```text
Input: n = 8
Output: 18
Explanation: Splitting 8 as 3 + 3 + 2 produces 3 × 3 × 2 = 18.
```

### Example 2

```text
Input: n = 15
Output: 243
Explanation: The split 3 + 3 + 3 + 3 + 3 has product 3⁵ = 243.
```

### Example 3

```text
Input: n = 4
Output: 4
Explanation: One optimal division is 2 + 2, whose product is 4.
```

### Constraints

- `2 <= n <= 58`

## Hints

### Hint 1

For each total from 2 through `n`, consider every possible first positive
part of a split and reuse the best product already found for the remainder.

### Hint 2

For a remainder, compare leaving it as one final part against splitting it
again; this preserves the requirement that the original total use at least
two parts.
