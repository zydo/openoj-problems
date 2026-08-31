# Binary Image Alignment

## Description

Two `n x n` binary matrices, `img1` and `img2`, represent images whose cells
are `0` or `1`. You may translate one image any whole number of cells left,
right, up, or down, without rotating it. A `1` that moves beyond the matrix
boundary disappears.

For a placement, its score is the number of positions where both images have
a `1`. Return the largest score achievable by a translation.

### Example 1

![diagram](figures/835-1.svg)

![diagram](figures/835-2.svg)

![diagram](figures/835-3.svg)

```text
Input: img1 = [[1,1,0],[0,1,0],[0,1,0]], img2 = [[0,0,0],[0,1,1],[0,0,1]]
Output: 3
Explanation: Moving `img1` one cell right and one cell down aligns three
positions containing 1.
```

### Example 2

```text
Input: img1 = [[1,0],[0,1]], img2 = [[1,0],[0,1]]
Output: 2
Explanation: With no translation, both 1-cells already align.
```

### Example 3

```text
Input: img1 = [[0,0],[0,0]], img2 = [[1,0],[0,1]]
Output: 0
Explanation: The first image has no 1-cells to align.
```

### Constraints

- `n == img1.length == img1[i].length`
- `n == img2.length == img2[i].length`
- `1 <= n <= 30`
- Every entry of `img1` and `img2` is either `0` or `1`.
