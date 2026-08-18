# Rolling Ball Maze Distance

## Description

A maze is an `m x n` grid of open cells (`0`) and walls (`1`), and its border
is solid wall all the way around. A ball sits in one open cell, and once it
starts moving in one of the four directions it keeps rolling until the next
cell would be a wall (or the border) — only there can it halt and pick a new
direction. It cannot stop anywhere else, and it never enters a wall.

Given the `maze`, the ball's `start = [row, col]`, and a
`destination = [row, col]`, return the smallest number of cells the ball can
travel so that it comes to rest exactly on the destination cell. Cells rolled
through mid-motion count toward the distance, the starting cell does not, and
the destination only counts when the ball halts on it — passing over it does
not. If the ball can never stop there, return `-1`.

### Example 1

```text
Input: maze = [[0,0,1,1,0],[0,1,1,0,0],[0,0,0,1,1],[1,0,0,0,0]], start = [0,0], destination = [3,4]
Output: 7
Explanation: Rolling down halts at (2,0) after 2 cells — the wall at (3,0)
stops it. Then right halts at (2,2) against the wall at (2,3), another 2.
Down stops at (3,2) at the border after 1 more, and right rolls 2 cells to
rest on (3,4). Total: 2 + 2 + 1 + 2 = 7.
```

### Example 2

```text
Input: maze = [[0,0,0,0,0]], start = [0,0], destination = [0,2]
Output: -1
Explanation: The corridor has no interior walls, so every roll goes border to
border. The ball passes over (0,2) but only ever halts on (0,0) and (0,4),
never on the destination.
```

### Example 3

```text
Input: maze = [[0,0,0],[1,1,0],[0,0,0]], start = [0,0], destination = [2,2]
Output: 4
Explanation: Rolling right stops at (0,2) against the border (2 cells), and
rolling down from there stops at (2,2) against the bottom border (2 cells).
```

### Constraints

- `m == maze.length`
- `n == maze[i].length`
- `1 <= m, n <= 100`
- `maze[i][j]` is `0` or `1`
- `start.length == 2` and `destination.length == 2`
- `0 <= row components < m` and `0 <= col components < n`
- the start and the destination are open cells and differ from each other
- the maze holds at least 2 open cells

## Hints

### Hint 1

The ball can only be steered where it rests, so the search graph's nodes are
halting cells. From each one, simulate the four rolls: where does each halt,
and what does it cost?

### Hint 2

Rolls cover different numbers of cells, so the edges carry different weights
— a plain breadth-first search is the wrong tool here. Which algorithm fits
a graph with varying edge weights?

### Hint 3

Keep the best known distance per halting cell, throw away heap entries that
are no longer the best for their cell, and return `-1` if the destination
never comes off the heap.
