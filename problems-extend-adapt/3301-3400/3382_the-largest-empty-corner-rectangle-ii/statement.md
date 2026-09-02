# The Largest Empty Corner Rectangle II

## Description

There are `n` points on an endless plane, handed to you as two arrays:
`(xCoord[i], yCoord[i])` places the `i`th point.

Again the hunt is for the largest rectangle that satisfies all of these
at once:

- Its four corners are four of the given points.
- Its sides run parallel to the axes.
- No other given point falls inside it or on its boundary.

Return that largest area, or `-1` when no rectangle qualifies.

### Example 1

![diagram](figures/3382-1.svg)

```text
Input: xCoord = [1,1,3,3], yCoord = [1,3,1,3]
Output: 4
Explanation: The four points are the corners of a rectangle, and no
fifth point exists to spoil it, so the best area is 2 x 2 = 4.
```

### Example 2

![diagram](figures/3382-2.svg)

```text
Input: xCoord = [1,1,3,3,2], yCoord = [1,3,1,3,2]
Output: -1
Explanation: The only four-corner rectangle here is the same 2 x 2 one,
but the point `[2,2]` sits dead inside it, so no rectangle qualifies.
```

### Example 3

![diagram](figures/3382-3.svg)

```text
Input: xCoord = [1,1,3,3,1,3], yCoord = [1,3,1,3,2,2]
Output: 2
Explanation: The points [1,3], [1,2], [3,2], [3,3] outline a 1 x 2
rectangle that stays empty. The strip [1,1], [1,2], [3,1], [3,2] is
equally good, but the full 2 x 2 frame is blocked by the midpoints.
```

### Constraints

- `1 <= xCoord.length == yCoord.length <= 2 * 10⁵`
- `0 <= xCoord[i], yCoord[i] <= 8 * 10⁷`
- All the given points are distinct.

## Hints

### Hint 1

Sort the points into columns by x; any valid rectangle is decided by a
vertical edge — two same-x points with no third point between them.

### Hint 2

Walk consecutive y-pairs within each column: for a pair `(y1, y2)`, the
partner edge is the nearest column to the right that owns any point
with y in `[y1, y2]`.

### Hint 3

A min segment tree over the compressed y-axis answers "nearest such
column" in logarithmic time.

### Hint 4

The partner completes a rectangle exactly when it holds `y1` and `y2`
and nothing else in the closed range — both corners present, nothing
inside, nothing on the border.
