# Counting Ones Across Cube Layers

## Description

You are given an `n x n x n` cube of binary cells.

Implement the `LayerCube` class:

- `LayerCube(int n)` initializes the cube with every cell set to `0`.
- `void setCell(int x, int y, int z)` sets the cell at
  `matrix[x][y][z]` to `1`.
- `void unsetCell(int x, int y, int z)` sets the cell at
  `matrix[x][y][z]` back to `0`.
- `int densestLayer()` returns the index `x` whose layer `matrix[x]`
  holds the most `1`s. If several layers tie, return the largest such
  index.

### Example 1

```text
Input:
["LayerCube", "setCell", "densestLayer", "setCell", "densestLayer", "setCell", "densestLayer"]
[[3], [0, 0, 0], [], [2, 2, 0], [], [0, 1, 1], []]
Output: [null, null, 0, null, 2, null, 0]
Explanation:
LayerCube cube = new LayerCube(3); // a 3 x 3 x 3 cube, all cells 0.
cube.setCell(0, 0, 0);   // matrix[0][0][0] becomes 1.
cube.densestLayer();     // 0 — layer 0 holds the only 1 so far.
cube.setCell(2, 2, 0);   // matrix[2][2][0] becomes 1.
cube.densestLayer();     // 2 — layers 0 and 2 tie at one 1; the larger index wins.
cube.setCell(0, 1, 1);   // matrix[0][1][1] becomes 1.
cube.densestLayer();     // 0 — layer 0 now holds two 1s.
```

### Example 2

```text
Input:
["LayerCube", "setCell", "densestLayer", "unsetCell", "densestLayer"]
[[4], [3, 0, 0], [], [3, 0, 0], []]
Output: [null, null, 3, null, 3]
Explanation:
LayerCube cube = new LayerCube(4); // a 4 x 4 x 4 cube, all cells 0.
cube.setCell(3, 0, 0);   // matrix[3][0][0] becomes 1.
cube.densestLayer();     // 3 — layer 3 holds the only 1.
cube.unsetCell(3, 0, 0); // matrix[3][0][0] goes back to 0.
cube.densestLayer();     // 3 — every layer is empty, and 3 is the largest index.
```

### Constraints

- `1 <= n <= 100`
- `0 <= x, y, z < n`
- At most `10⁵` calls in total are made to `setCell` and `unsetCell`.
- At most `10⁴` calls are made to `densestLayer`.

## Hints

### Hint 1

Track how many `1`s each layer currently holds — a layer's whole
contribution to the answer is that one number.

### Hint 2

Keep a structure that can insert, remove, and read back the largest
`(count, index)` pair as counts change.
