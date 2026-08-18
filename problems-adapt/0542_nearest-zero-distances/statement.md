# Nearest Zero Distances

## Description

You are given an `m x n` grid `mat` whose cells each hold `0` or `1`.
Build a grid of the same shape in which every cell holds its distance to
the nearest cell holding `0`.

Distance is measured in steps between cells that share an edge: each such
step costs `1`.

### Example 1

```text
Input: mat = [[0,1,1,1],[1,1,1,1],[1,1,1,0]]
Output: [[0,1,2,2],[1,2,2,1],[2,2,1,0]]
Explanation: Zeros sit at opposite corners, and the middle of the grid is
two steps from either one.
```

### Example 2

```text
Input: mat = [[0,1,1,1,1]]
Output: [[0,1,2,3,4]]
Explanation: A single row is a plain walk away from its only zero.
```

### Example 3

```text
Input: mat = [[1,1,1],[1,1,0]]
Output: [[3,2,1],[2,1,0]]
Explanation: With one zero in a corner, the distance of a cell is the
number of steps it takes to walk there.
```

### Constraints

- `m == mat.length`
- `n == mat[i].length`
- `1 <= m, n <= 10⁴`
- `1 <= m * n <= 10⁴`
- `mat[i][j]` is either `0` or `1`.
- `mat` contains at least one `0`.

## Hints

### Hint 1

Turn the question around. Instead of asking, separately for every `1`
cell, how far the closest `0` is, let every `0` cell announce itself at
distance `0` and spread outward from all of them at once.

### Hint 2

One queue seeded with every `0` cell is a single breadth-first sweep whose
wavefronts grow one step at a time — so the first wave to reach a cell has
travelled the shortest possible distance.

### Hint 3

A queueless alternative: two passes over the grid (from the top-left
inwards, then from the bottom-right inwards), each time taking one plus
the best of the already-settled neighbors, reach the same numbers.
