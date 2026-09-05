# The Pyramid's Cheapest Descent

## Description

You are given `rows`, a pyramid of numbers: row 0 holds one value, and
each row that follows holds exactly one more value than the row above it,
so the rows widen by a single cell at a time into a triangle.

Walk from the apex down to the bottom row. From the cell at index `i` of
its row, a single step lands either on index `i` or on index `i + 1` of
the next row — the two cells directly beneath it, sharing an edge. Each
cell you touch adds its value to your running total. Of all the apex-to-
bottom walks this shape allows, find the smallest total the walk can
accumulate, and return it.

### Example 1

```text
Input: rows = [[5],[2,9],[8,1,6],[3,7,2,4]]
Output: 10
Explanation: The pyramid looks like:
   5
  2 9
 8 1 6
3 7 2 4
The cheapest descent takes 5 + 2 + 1 + 2 = 10, stepping left from 8's row
into the 1, then cutting right to the 2 in the bottom row.
```

### Example 2

```text
Input: rows = [[3],[-2,5],[4,-1,2]]
Output: 0
Explanation: Negative cells can pay for the trip: dropping through -2 and
then -1 collects 3 + (-2) + (-1) = 0, the least total any walk achieves.
```

### Example 3

```text
Input: rows = [[4]]
Output: 4
Explanation: A pyramid of one cell offers a single descent of one step —
the cell's own value.
```

### Constraints

- The pyramid has between `1` and `200` rows.
- Row `0` holds exactly one value.
- Every row after the first holds exactly one more value than the row
  above it.
- `-10⁴ <= rows[i][j] <= 10⁴`

### Follow-up

Could you manage with only `O(n)` extra space, where `n` counts the rows
of the pyramid?
