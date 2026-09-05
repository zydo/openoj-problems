# Capture The Enclosed Regions

## Description

You are given an `m x n` grid `board` whose cells hold `'X'` or `'O'`.
Capture every region of `'O'` cells that enemy `'X'` cells fully enclose:

- Two cells are **neighbors** when they sit side by side horizontally or
  vertically.
- A **region** is a set of `'O'` cells where every pair is linked, directly
  or through other `'O'` cells, by neighbor steps.
- A region is **enclosed** when not one of its cells lies on the grid's
  outer edge — every way out is blocked by `'X'`.

To capture an enclosed region, flip each of its `'O'` cells to `'X'`. The
flip happens **in place** in `board` itself. The judge here reads only the
value your method gives back, so capture `board` in place and return it —
the returned grid is the captured one.

### Example 1

```text
Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
Explanation: The lone `'O'` on the bottom edge keeps its mark — sitting on
the edge, its region can never be enclosed.
```

![diagram](figures/130-1.svg)

### Example 2

```text
Input: board = [["X","X","X","X"],["X","O","O","X"],["X","O","X","X"],["O","X","X","O"]]
Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["O","X","X","O"]]
Explanation: The three `'O'`s clustered in the middle touch no edge, so
they are captured. The two corner `'O'`s on the bottom edge are on the
border and keep their marks.
```

### Example 3

```text
Input: board = [["X","O","X"],["O","O","X"],["X","X","X"]]
Output: [["X","O","X"],["O","O","X"],["X","X","X"]]
Explanation: All three `'O'` cells form one region that reaches the top
and left edges, so nothing can be captured and the grid comes back
untouched.
```

### Constraints

- `m` is the number of rows and `n` the number of columns of `board`.
- `1 <= m, n <= 200`
- Every cell of `board` is `'X'` or `'O'`.
