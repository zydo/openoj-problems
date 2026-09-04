# Smallest OR With One Pick Per Row

## Description

You are given an `m x n` integer matrix `grid`.

Pick exactly one number from every row. Return the smallest value the
bitwise OR of the `m` picked numbers can take.

### Example 1

```text
Input: grid = [[2,3],[4,5]]
Output: 6
Explanation: Take 2 from the first row and 4 from the second; the OR is
2 | 4 = 6, and no other combination of picks is smaller.
```

### Example 2

```text
Input: grid = [[8,7],[3,4]]
Output: 7
Explanation: Take 7 from the first row and 3 from the second; the OR is
7 | 3 = 7. (Taking 4 instead of 3 keeps the OR at 7 as well.)
```

### Example 3

```text
Input: grid = [[12,10,13]]
Output: 10
Explanation: There is a single row, so the best pick is simply its
smallest value, 10.
```

### Constraints

- `1 <= m == grid.length <= 10⁵`
- `1 <= n == grid[i].length <= 10⁵`
- `m * n <= 10⁵`
- `1 <= grid[i][j] <= 10⁵`

## Hints

### Hint 1

Decide the answer bit by bit, starting from the most significant.

### Hint 2

A bit can stay out of the OR exactly when every row owns at least one
number that leaves the bits excluded so far unset.

### Hint 3

Collect the bits that cannot be avoided; what remains is the smallest OR
achievable.
