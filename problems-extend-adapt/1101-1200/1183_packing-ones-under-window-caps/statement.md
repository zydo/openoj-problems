# Packing Ones Under Window Caps

## Description

Fill a `width × height` grid with 0s and 1s so that every square block of
`sideLength × sideLength` cells — anywhere in the grid, aligned however the
block slides — contains at most `maxOnes` ones. What is the largest total
number of ones such a grid can hold?

### Example 1

```text
Input: width = 5, height = 3, sideLength = 2, maxOnes = 2
Output: 10
Explanation: No 2*2 block may hold more than 2 ones. Lighting every cell
of the two even rows (rows 0 and 2) fills 10 cells, and each 2*2 block
covers exactly one even row, so it holds exactly 2 ones.
```

### Example 2

```text
Input: width = 2, height = 2, sideLength = 2, maxOnes = 3
Output: 3
Explanation: The whole grid is one 2*2 block, so at most 3 of its 4 cells
may be ones.
```

### Example 3

```text
Input: width = 4, height = 6, sideLength = 3, maxOnes = 2
Output: 8
```

### Constraints

- `1 <= width, height <= 100`
- `1 <= sideLength <= width, height`
- `0 <= maxOnes <= sideLength * sideLength`

## Hints

### Hint 1

Look for structure the sliding window can never break: cells whose row and
column offsets into the block match behave identically everywhere.

### Hint 2

If cell `(i, j)` may be 1, every cell `(x, y)` with
`x % sideLength == i % sideLength` and `y % sideLength == j % sideLength`
can be switched on too — no block's count grows past what `(i, j)` already
contributed.

### Hint 3

So the real decision is which residue classes `(r % sideLength,
c % sideLength)` to switch on, and each class is worth the number of grid
cells it contains.

### Hint 4

Count the cells in each of the `sideLength²` classes — full blocks plus
any leftover strip — and take the richest `maxOnes` classes.
