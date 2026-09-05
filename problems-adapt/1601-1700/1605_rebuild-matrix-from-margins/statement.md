# Rebuild Matrix From Margins

## Description

Every entry of a grid of non-negative integers has been erased, but the
totals survive: `rowSum[i]` records what the grid's `i`-th row used to
add up to, and `colSum[j]` records the same for column `j`. (In
bookkeeping, such row and column totals are called a table's margins.)
The totals hang together — the row margins and the column margins sum to
the same grand total — and that is the only promise made.

Fill the grid back in. Construct any matrix of non-negative integers
with `rowSum.length` rows and `colSum.length` columns whose rows total
to `rowSum` and whose columns total to `colSum`. The result does not
have to match the matrix that was erased: every fill-in honoring the
totals is accepted, and return whichever one you construct.

### Example 1

```text
Input: rowSum = [4,5], colSum = [3,6]
Output: [[3,1],[0,5]]
Explanation: The rows read 3 + 1 = 4 and 0 + 5 = 5; the columns read
3 + 0 = 3 and 1 + 5 = 6, so the totals check out. Three other fill-ins —
[[0,4],[3,2]], [[1,3],[2,3]], and [[2,2],[1,4]] — satisfy the same
totals and are just as acceptable.
```

### Example 2

```text
Input: rowSum = [2,0,4], colSum = [1,5]
Output: [[1,1],[0,0],[0,4]]
Explanation: The zero row margin pins the middle row to all zeros, and
the remaining two rows split each column's total: 1 = 1 + 0 and 5 =
1 + 4. The alternative [[0,2],[0,0],[1,3]] works just as well.
```

### Example 3

```text
Input: rowSum = [7], colSum = [3,0,4]
Output: [[3,0,4]]
Explanation: With a single row, the fill-in is forced — that lone row
must hand out exactly `colSum` across its cells, so the matrix is unique.
```

### Constraints

- `1 <= rowSum.length, colSum.length <= 500`
- `0 <= rowSum[i], colSum[j] <= 10⁸`
- `sum(rowSum) == sum(colSum)`

## Hints

### Hint 1

Sweep the cells in row-major order. At each cell only two numbers
matter: what the current row still owes and what the current column
still owes.

### Hint 2

Write `min(rowOwed, colOwed)` into the cell and subtract it from both
totals. The smaller of the two hits zero, permanently settling that row
or column; after at most `rows + columns` settlements everything is
paid off exactly.
