# Grammar Table Symbol

## Description

A table of binary rows is generated one row at a time, 1-indexed. Row 1
holds a single `0`. To build each later row, scan the row above symbol by
symbol and expand every `0` into `01` and every `1` into `10`, writing the
results in order.

For instance, with `n = 3` the rows read `0`, then `01`, then `0110`: each
symbol of a row spawns exactly two symbols in the row that follows it.

Given `n` and `k`, return the value of the `k`th symbol (1-indexed) in row
`n`, without generating the full row when `n` is large.

### Example 1

```text
Input: n = 1, k = 1
Output: 0
Explanation: Row 1 is "0", so its 1st symbol is 0.
```

### Example 2

```text
Input: n = 3, k = 4
Output: 0
Explanation: Row 3 is "0110", so its 4th symbol is 0.
```

### Example 3

```text
Input: n = 4, k = 5
Output: 1
Explanation: Row 4 is "01101001", so its 5th symbol is 1.
```

### Constraints

- `1 <= n <= 30`
- `1 <= k <= 2ⁿ⁻¹`

## Hints

### Hint 1

Every symbol of row `n` was produced by expanding exactly one symbol of row
`n - 1`. Work out which position in row `n - 1` is that parent, and how the
expansion rule determines the child's value from the parent's.
