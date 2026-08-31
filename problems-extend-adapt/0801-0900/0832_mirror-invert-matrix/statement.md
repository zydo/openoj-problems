# Mirror Invert Matrix

## Description

You are given a square `n x n` binary matrix `image`, where every entry is
`0` or `1`. Transform it in two steps: first mirror every row horizontally,
then invert every bit. Mirroring reverses each row, while inversion changes
`0` to `1` and `1` to `0`.

Return the transformed matrix.

### Example 1

```text
Input: image = [[0,1],[1,0]]
Output: [[0,1],[1,0]]
Explanation: Reversing and inverting each row leaves this particular matrix
unchanged.
```

### Example 2

```text
Input: image = [[1,0,0],[0,1,1],[1,1,0]]
Output: [[1,1,0],[0,0,1],[1,0,0]]
```

### Example 3

```text
Input: image = [[0]]
Output: [[1]]
```

### Constraints

- `n == image.length`
- `n == image[i].length`
- `1 <= n <= 20`
- `image[i][j]` is either `0` or `1`.
