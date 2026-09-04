# The Unbeaten Team I

## Description

A tournament features `n` teams numbered `0` through `n - 1`. Its
results reach you as an `n x n` grid: for distinct teams `i` and `j`,
`grid[i][j] == 1` says team `i` is stronger than team `j`, while
`grid[i][j] == 0` says team `j` is stronger than team `i`.

A team is the unbeaten one when no other team in the tournament is
stronger than it.

Return the number of that team.

### Example 1

```text
Input: grid = [[0,1,1],[0,0,1],[0,0,0]]
Output: 0
Explanation: grid[0][1] == 1 makes team 0 stronger than team 1, and
grid[0][2] == 1 makes it stronger than team 2 as well, so no team is
stronger than team 0.
```

### Example 2

```text
Input: grid = [[0,0,0],[1,0,0],[1,1,0]]
Output: 2
Explanation: grid[1][0] == 1 puts team 1 above team 0, and team 2's
row reads 1 against both of them, leaving team 2 at the top.
```

### Example 3

```text
Input: grid = [[0,1,0,1],[0,0,0,0],[1,1,0,1],[0,1,0,0]]
Output: 2
Explanation: Team 2's row holds a 1 against every other team — 0, 1,
and 3 — so it is stronger than all of them and hence unbeaten.
```

### Constraints

- `n == grid.length`
- `n == grid[i].length`
- `2 <= n <= 100`
- `grid[i][j]` is either `0` or `1`.
- `grid[i][i] == 0` for every `i`.
- `grid[i][j] != grid[j][i]` for every `i != j`.
- Whenever team `a` is stronger than team `b` and team `b` is stronger
  than team `c`, team `a` is also stronger than team `c`.

## Hints

### Hint 1

The unbeaten team is stronger than every rival — you never need to sum
a whole row to find it.

### Hint 2

Testing a candidate against one challenger takes a single decided
comparison between those two teams, and a candidate that survives
every challenge must be the answer.
