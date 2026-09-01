# Trapped in a Million-Square Grid

## Description

A square grid of a million by a million cells covers the plane; cell
`(x, y)` occupies column `x` and row `y`. A walker stands on the cell
`source = [sx, sy]` and wants to arrive at `target = [tx, ty]`.

Certain cells are sealed off: each `blocked[i] = [xi, yi]` names one cell
the walker may never enter. Per move the walker steps to an adjacent cell
— up, down, left, or right — provided that cell is open and still inside
the grid.

Decide whether some sequence of such steps can carry the walker from
`source` all the way to `target`.

### Example 1

```text
Input: blocked = [[0,1],[1,0],[2,0]], source = [0,0], target = [0,4]
Output: false
Explanation: The three sealed cells wall the source into the corner of
the grid: both in-grid neighbors of (0, 0) are closed, so the walker
cannot move at all.
```

### Example 2

```text
Input: blocked = [[100,100]], source = [0,0], target = [999999,999999]
Output: true
Explanation: One sealed cell cannot fence in either endpoint, so a path
across the grid exists.
```

### Example 3

```text
Input: blocked = [[1,1],[1,2],[2,1]], source = [2,2], target = [0,0]
Output: true
Explanation: The sealed cells crowd the source but leave it two open
sides, so it is not enclosed and can still get anywhere.
```

### Constraints

- `0 <= blocked.length <= 200`
- `blocked[i].length == 2`
- `0 <= xi, yi < 10^6`
- `source.length == target.length == 2`
- `0 <= sx, sy, tx, ty < 10^6`
- `source != target`
- Neither `source` nor `target` names a sealed cell.

## Hints

### Hint 1

Getting stuck takes a genuine wall: either the source or the target would
have to be fenced in completely.

### Hint 2

How many open cells can a fence built from the entire sealed-cell budget
possibly enclose?
