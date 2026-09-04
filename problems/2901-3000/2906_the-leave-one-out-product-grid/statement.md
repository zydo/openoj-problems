# The Leave-One-Out Product Grid

## Description

You are given a 0-indexed `n x m` integer matrix `grid`. Build a result
matrix `p` of the same shape where every cell holds the product of _all_
the other cells:

- `p[i][j]` is the product of every element of `grid` except
  `grid[i][j]` itself, taken modulo `12345`.

Return the resulting matrix.

### Example 1

```text
Input: grid = [[2,3],[5,7]]
Output: [[105,70],[42,30]]
Explanation: Leaving out 2 multiplies the rest: 3 * 5 * 7 = 105.
Leaving out 3 gives 2 * 5 * 7 = 70, leaving out 5 gives 2 * 3 * 7 = 42,
and leaving out 7 gives 2 * 3 * 5 = 30.
```

### Example 2

```text
Input: grid = [[12345,2],[3,4]]
Output: [[24,0],[0,0]]
Explanation: Only p[0][0] excludes the value 12345, so it is
2 * 3 * 4 = 24. Every other cell's product includes 12345, and a product
divisible by 12345 reduces to 0 modulo 12345 — so the remaining cells
are all 0.
```

### Example 3

```text
Input: grid = [[9,10,11]]
Output: [[110,99,90]]
Explanation: A single row: each cell multiplies its two companions —
10 * 11 = 110, 9 * 11 = 99, and 9 * 10 = 90.
```

### Constraints

- `1 <= n == grid.length <= 10⁵`
- `1 <= m == grid[i].length <= 10⁵`
- `2 <= n * m <= 10⁵`
- `1 <= grid[i][j] <= 10⁹`

## Hints

### Hint 1

Division cannot help here: the modulus 12345 is composite, so a cell
sharing a factor with it has no modular inverse to "divide out" by.

### Hint 2

Read the grid as one flat row-major sequence. The product every cell
wants is (the product of the entries before its position) times (the
product of the entries after it).

### Hint 3

Two linear passes build those prefix and suffix products; reduce modulo
12345 at every multiplication so every intermediate stays small.
