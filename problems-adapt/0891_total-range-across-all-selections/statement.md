# Total Range Across All Selections

## Description

For every non-empty selection of positions from integer array `values`, define
its range as its maximum selected value minus its minimum selected value.

Return the sum of these ranges over all non-empty position selections, modulo
`10^9 + 7`. Equal values at different positions are selected independently.

### Example 1

```text
Input: values = [4,1,7]
Output: 18
```

### Example 2

```text
Input: values = [5,5,8,10]
Output: 41
```

### Constraints

- `1 <= values.length <= 10^5`
- `1 <= values[i] <= 10^5`

## Hints

### Hint 1

Sort the values; only the minimum and maximum of each selection affect its
range.

### Hint 2

At sorted index `i`, the value is a maximum for `2^i` position selections and
a minimum for `2^(n - 1 - i)` selections.

### Hint 3

Sum each value's maximum contribution minus its minimum contribution modulo
`10^9 + 7`.
