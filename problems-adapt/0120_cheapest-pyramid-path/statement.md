# Cheapest Pyramid Path

## Description

`rows` describes a pyramid of numbers: the first entry holds one number, and
every entry after holds one more number than the entry above, so row `k` has
`k + 1` numbers. Start at the single number at the apex. On each step down to
the next row you may keep your column or take one step right — from column `i`
of one row you may move to column `i` or `i + 1` of the next. Every number you
land on is added to your total.

Return the smallest total of any such descent from the apex to the bottom row.

### Example 1

```text
Input: rows = [[7],[-2,9],[3,-5,4],[6,2,-1,8]]
Output: -1
Explanation: The pyramid looks like:
    7
   -2 9
  3 -5 4
 6 2 -1 8
Going 7 -> -2 -> -5 -> -1 totals -1, and no other descent is cheaper.
Values may be negative.
```

### Example 2

```text
Input: rows = [[3],[8,1]]
Output: 4
Explanation: Two descents exist: 3 + 8 = 11 and 3 + 1 = 4.
```

### Example 3

```text
Input: rows = [[-4]]
Output: -4
Explanation: The top row is the bottom row, so the total is the lone value.
```

### Constraints

- `1 <= rows.length <= 200`
- `rows[0].length == 1`
- `rows[i].length == rows[i - 1].length + 1`
- `-10^4 <= rows[i][j] <= 10^4`

Follow up: can you do it with only `O(n)` extra space, where `n` is the
number of rows?

## Hints

### Hint 1

Reason from the bottom. A cell on the last row ends its path immediately, so
its best total is its own value — a fact you know without any search.

### Hint 2

Move up a row: a cell's best total is its own value plus the smaller best
total of the two cells it can step to. Every row's answers rest only on the
row beneath.

### Hint 3

Because each row consults only the row below, one array of row-length —
overwritten as you climb — is all the bookkeeping you need.
