# Nearest Grid Exit

## Description

You are given an `m x n` grid `maze` whose cells are either open (`'.'`) or
walled (`'+'`), together with the `entrance` you start on, given as
`[entrancerow, entrancecol]`.

Each step moves one cell up, down, left, or right. You may not enter a
walled cell or leave the grid. An *exit* is any open cell on the grid's
border; the entrance itself does not count, even when it sits on the border.

Return the fewest number of steps needed to walk from the entrance to some
exit, or `-1` if no exit can be reached.

### Example 1

```text
Input: maze = [["+","+","+","+","+"],
               ["+",".",".",".","+"],
               ["+",".",".",".","+"],
               ["+",".",".",".","+"],
               ["+","+",".","+","+"]],
       entrance = [2,2]
Output: 2
Explanation: The walled ring leaves a single opening on the bottom border,
so the only reachable exit is the cell below the entrance: down, down.
```

### Example 2

```text
Input: maze = [["+",".","+","+"],
               [".",".",".","."],
               ["+",".","+","+"]],
       entrance = [1,0]
Output: 2
Explanation: The entrance is on the border but is not an exit. The open
cells above and below it, two steps away, are the nearest exits.
```

### Example 3

```text
Input: maze = [[".","+","+"],
               ["+",".","."]],
       entrance = [0,0]
Output: -1
Explanation: Both neighbors of the entrance are walls, so no exit can be
reached even though the grid holds other open border cells.
```

### Constraints

- `1 <= maze.length, maze[i].length <= 100`
- `maze[i][j]` is either `'.'` or `'+'`.
- `entrance.length == 2`
- `0 <= entrancerow < maze.length`
- `0 <= entrancecol < maze[0].length`
- The entrance is always an open cell.

## Hints

### Hint 1

Every step costs the same, so cells are best explored in order of their
distance from where you stand. Which traversal does that?

### Hint 2

Run a breadth-first search from the entrance and stop at the first border
cell it dequeues that is not the entrance itself — its distance is the
answer.
