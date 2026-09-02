# Longest Climb Through A Pinned Point

## Description

You receive `n` distinct points on a grid as `coordinates`, where
`coordinates[i] = [xᵢ, yᵢ]`, together with an index `k` (`0 <= k < n`).
Call `coordinates[k]` the pinned point.

A climb is a sequence of points chosen from `coordinates`,
`(x₁, y₁), (x₂, y₂), ..., (xₘ, yₘ)`, in which every step moves strictly up
and to the right — `xᵢ < xᵢ₊₁` and `yᵢ < yᵢ₊₁` for each consecutive pair.

Return the length of the longest climb that visits the pinned point. The
pinned point counts toward the climb's length, and it may sit anywhere
along the sequence — first, last, or somewhere in the middle.

### Example 1

```text
Input: coordinates = [[4,2],[1,3],[3,5],[6,6],[2,1]], k = 0
Output: 3
Explanation: The pinned point is (4, 2). The climb (2, 1) → (4, 2) →
(6, 6) rises in both coordinates at every step and has length 3.
```

### Example 2

```text
Input: coordinates = [[5,5],[2,9],[3,8],[1,1],[4,7]], k = 3
Output: 2
Explanation: The pinned point is (1, 1), which is already the lowest-left
point on the grid, so nothing can precede it. Extending up and right from
it can add just one more point, for a climb of length 2 such as
(1, 1) → (2, 9).
```

### Example 3

```text
Input: coordinates = [[1,1],[2,4],[2,3],[3,4],[0,0]], k = 0
Output: 4
Explanation: The pinned point is (1, 1). The climb (0, 0) → (1, 1) →
(2, 3) → (3, 4) has length 4; note (2, 4) is unusable inside it because it
shares an x with (2, 3) and both coordinates must grow.
```

### Constraints

- `1 <= n == coordinates.length <= 10⁵`
- `coordinates[i].length == 2`
- `0 <= coordinates[i][0], coordinates[i][1] <= 10⁹`
- Every point in `coordinates` is distinct.
- `0 <= k <= n - 1`

## Hints

### Hint 1

A climb through the pinned point splits into two independent halves:
points strictly below-left of it (both coordinates strictly smaller) can
only precede it, and points strictly above-right can only follow it.

### Hint 2

For one half, sort its points by x ascending, and when x values tie, by y
descending.

### Hint 3

After that sort, the answer for the half is just a longest strictly
increasing subsequence over the y values.

### Hint 4

Compute that subsequence length for the below-left half and for the
above-right half; the final answer is one (the pinned point itself) plus
both results.
