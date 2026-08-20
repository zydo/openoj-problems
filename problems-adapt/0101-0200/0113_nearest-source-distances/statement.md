# Nearest Source Distances

## Description

You are given an `m x n` grid whose cells hold one of three markers:

- `-1` — a blocked cell
- `0` — a source cell
- `2147483647` (`2^31 - 1`) — an open cell; read the value as "distance
  not yet known". Every open cell that can reach a source at all is
  closer to one than this number.

Walking moves between cells that share an edge. Overwrite each open cell
with the length of a shortest walk from it to the nearest source cell.
Open cells that no source can reach keep the value `2147483647`, and
blocked and source cells are never touched. Return the grid.

### Example 1

```text
Input: grid = [[2147483647,2147483647,-1,0],[2147483647,-1,2147483647,2147483647],[0,2147483647,2147483647,-1],[2147483647,2147483647,-1,2147483647]]
Output: [[2,3,-1,0],[1,-1,2,1],[0,1,2,-1],[1,2,-1,2147483647]]
Explanation: Writing `.` for open cells, `#` for blocked cells and `S` for
sources, the grid reads

    .  .  #  S
    .  #  .  .
    S  .  .  #
    .  .  #  .

Most cells are reached from the source in the third row. The bottom-right
cell is walled off on both of its sides, so no walk reaches it and it keeps
the sentinel.
```

### Example 2

```text
Input: grid = [[0,2147483647,2147483647,-1]]
Output: [[0,1,2,-1]]
```

### Example 3

```text
Input: grid = [[2147483647,-1,2147483647],[-1,-1,2147483647],[2147483647,2147483647,0]]
Output: [[2147483647,-1,2],[-1,-1,1],[2,1,0]]
Explanation: The top-left open cell is walled off from the source, so it
keeps its original value.
```

### Constraints

- `grid` has `m` rows of `n` cells each, `1 <= m, n <= 250`
- every cell is `-1`, `0`, or `2147483647`

## Hints

### Hint 1

A breadth-first search from one source gives that source's distances
everywhere. What changes if the queue starts loaded with every source at
once?

### Hint 2

Load all sources before the first step. Layer-by-layer expansion then
guarantees each open cell is first reached along a shortest path, so the
visit itself is the moment to write the distance.

### Hint 3

The sentinel does double duty as the visited mark: an open cell still
holding `2147483647` during the search is unvisited, and cells still
holding it at the end are precisely the unreachable ones.
