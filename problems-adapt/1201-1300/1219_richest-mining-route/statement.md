# Richest Mining Route

## Description

A mine is laid out as an `m x n` grid; the cell at row `i`, column `j`
holds `grid[i][j]` units of gold, and a value of `0` marks a barren cell.

You pick any gold-bearing cell to start from and walk step by step,
collecting each cell's gold the first time you step into it. The walk
follows these rules:

- Each step moves one cell up, down, left, or right.
- A cell may be entered at most once during the walk.
- Barren cells (`0` gold) may never be entered.
- You may begin and end at any gold-bearing cells you like.

Return the largest amount of gold a single walk can collect.

### Example 1

```text
Input: grid = [[2,0,8],[9,7,0],[0,1,4]]
Output: 23
Explanation: The route 2 -> 9 -> 7 -> 1 -> 4 gathers 23 gold. The cell
with 8 touches no other gold, so no route can add it.
```

### Example 2

```text
Input: grid = [[0,4,0],[0,7,0],[9,6,3],[0,0,0]]
Output: 26
Explanation: The route 9 -> 6 -> 7 -> 4 collects 26 gold.
```

### Constraints

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 15`
- `0 <= grid[i][j] <= 100`
- At most 25 cells hold a positive amount of gold.

## Hints

### Hint 1

With no more than 25 gold cells, trying every possible walk is cheap
enough: start a depth-first search from each gold cell.
