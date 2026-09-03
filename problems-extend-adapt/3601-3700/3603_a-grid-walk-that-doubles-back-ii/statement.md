# A Grid Walk That Doubles Back II

## Description

You are given two integers m and n, the row and column counts of a grid,
together with a grid `waitCost` whose entry `waitCost[i][j]` is the price
of pausing on cell `(i, j)`.

Stepping into cell `(i, j)` costs `(i + 1) * (j + 1)`.

The walk opens by entering cell `(0, 0)` as its first move, paying that
cell's entrance cost. From there it alternates between two kinds of moves
— step, pause, step, pause, ...:

- A step goes right or down into an adjacent cell, paying the entered
  cell's entrance cost.
- A pause stays where the walk is and pays that cell's `waitCost`.

The walk stops dead the moment it reaches `(m - 1, n - 1)`: its final act
is a step, and no pause is paid on the destination.

Return the smallest total cost with which the walk can end at
`(m - 1, n - 1)`.

### Example 1

```text
Input: m = 2, n = 2, waitCost = [[1,2],[3,4]]
Output: 9
Explanation: The walk enters (0, 0), paying 1, steps right into (0, 1),
paying (0 + 1) * (1 + 1) = 2, pauses there for waitCost[0][1] = 2, then
steps down into (1, 1), paying (1 + 1) * (1 + 1) = 4. The destination is
reached, so the total is 1 + 2 + 2 + 4 = 9.
```

### Example 2

```text
Input: m = 1, n = 4, waitCost = [[2,0,5,1]]
Output: 15
Explanation: With a single row the walk marches straight right. The four
entrance costs are 1, 2, 3, and 4, and the two pauses on the way cost
waitCost[0][1] = 0 and waitCost[0][2] = 5, for a total of
1 + 2 + 0 + 3 + 5 + 4 = 15.
```

### Example 3

```text
Input: m = 3, n = 3, waitCost = [[4,2,1],[2,3,1],[1,5,2]]
Output: 25
Explanation: The cheapest plan runs along the top row and then down the
right column. Entrance costs sum to 1 + 2 + 3 + 6 + 9 = 21, and the three
pauses on (0, 1), (0, 2), and (1, 2) cost 2 + 1 + 1 = 4, so the total is
25.
```

### Constraints

- `1 <= m, n <= 10⁵`
- `2 <= m * n <= 10⁵`
- `waitCost` consists of m rows, each with exactly n entries
- `0 <= waitCost[i][j] <= 10⁵`

## Hints

### Hint 1

Steps only ever go right or down, so a route is just a monotone
staircase, and its pauses charge `waitCost` once for every cell the
staircase passes through except its two endpoints.

### Hint 2

Absorb each pause into the cell it sits on: the price of traveling
through an interior cell is its entrance cost plus its `waitCost`, while
the start contributes only its entrance and the destination skips its
pause.

### Hint 3

Process the grid row by row and keep a single array of column costs;
each cell takes the cheaper of the neighbor above and the neighbor to
the left, plus its own combined price. The totals grow large, so use a
64-bit integer type.
