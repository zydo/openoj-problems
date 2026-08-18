# Uniform Point From Rectangles

## Description

You are given axis-aligned rectangles `rects`, where
`rects[i] = [ai, bi, xi, yi]` means rectangle `i` has its bottom-left corner
at `(ai, bi)` and its top-right corner at `(xi, yi)`. No two rectangles
overlap. Both corner coordinates and the edges themselves count as covered —
every point on a rectangle's boundary belongs to it.

Design a sampler that returns a random integer point `[u, v]` covered by one
of the rectangles, such that every covered integer point is equally likely
on each draw.

Implement the `Solution` class:

- `Solution(int[][] rects)` — initializes the sampler with the rectangles.
- `int[] drawPoint()` — returns one uniformly random covered integer point.

### Statistical judging

A single draw proves nothing, so `drawPoint` is checked statistically rather
than against one fixed answer. The judge runs the sampler tens of thousands
of times, requires each returned point to belong to some rectangle, and
compares how often every point came back against its ideal share
`1 / total` — `total` being how many integer points the rectangles cover
altogether. Wider rectangles therefore come up proportionally more often
than narrow ones.

Listing the covered points exhaustively only works while the region stays
small, so the judged configurations are capped near 100 covered integer
points, with as many as ~150000 draws per case. That cap is a judging
convenience, not a property of the method: weighting each rectangle by its
cell count and spreading uniformly within it is size-independent reasoning,
and the bounds further down admit coordinates an enumeration could never
reach.

### Example 1

```text
Input:
["Solution", "drawPoint", "drawPoint", "drawPoint"]
[[[[-3,-1,-2,2],[0,0,3,3]]], [], [], []]
Output: [null, [-2,1], [3,3], [0,1]]
Explanation: The 2x4 rectangle covers 8 integer points and the 4x4 rectangle
covers 16, so a draw lands in the larger rectangle twice as often — every
one of the 24 covered points has probability exactly 1/24.
```

### Example 2

```text
Input:
["Solution", "drawPoint", "drawPoint"]
[[[[1,1,2,2],[3,1,6,2]]], [], []]
Output: [null, [5,2], [1,1]]
Explanation: The two rectangles cover 4 and 8 points, so each draw comes from
the wider one with probability 2/3; inside a rectangle, all points are even.
```

### Constraints

- `1 <= rects.length <= 100`
- `rects[i].length == 4`
- `-10⁹ <= ai < xi <= 10⁹`
- `-10⁹ <= bi < yi <= 10⁹`
- `xi - ai <= 2000` and `yi - bi <= 2000`
- no two rectangles overlap
- `drawPoint` is called at most `10⁴` times

## Hints

### Hint 1

Uniform over all covered points factors into two easier choices. Which
distribution over the rectangles makes "choose a rectangle, then a point
inside it" come out uniform overall?

### Hint 2

Number each rectangle's cells as one contiguous run in a single long
sequence: `P[i+1] = P[i] + (xi - ai + 1) * (yi - bi + 1)`. One uniform
integer in `[0, total)` picks the run — and the prefix array is sorted, so
binary search finds it.

### Hint 3

Decode the chosen cell inside its rectangle by row-major indexing: with
`w = xi - ai + 1` and `offset = cell - P[i]`, the point is
`(ai + offset % w, bi + offset / w)`. The decode is reversible, so it is a
bijection and the inner draw is genuinely uniform over the cells.
