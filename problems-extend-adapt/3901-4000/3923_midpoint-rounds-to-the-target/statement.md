# Midpoint Rounds To The Target

## Description

You are given a 2D integer array `points`, where `points[i] = [xi, yi, zi]`
is a point in 3D space, and an integer array `target` holding the point you
want to reach.

Round `0` consists of the initial points. Every round `k >= 1` is built all
at once from everything known before it:

- Choose any two different points `a = [x1, y1, z1]` and `b = [x2, y2, z2]`
  among all points produced in rounds `0` through `k - 1`. "Different" means
  their coordinates differ, so a point never pairs with its own coordinates.
- Every such pair contributes the midpoint
  `c = [floor((x1 + x2) / 2), floor((y1 + y2) / 2), floor((z1 + z2) / 2)]`,
  and round `k` is the collection of all of those midpoints.
- Points minted in round `k` become available for pairing from round
  `k + 1` onward.

Return the smallest `k` such that the target is one of the points of rounds
`0` through `k`. If the target is already among the initial points, return
`0`. If it can never be produced, return `-1`.

Note: `floor` means rounding down to the nearest integer.

### Example 1

```text
Input: points = [[0,2,4],[6,0,2]], target = [3,1,3]
Output: 1
Explanation: Round 0 holds just the two initial points. Pairing them gives
the midpoint [3,1,3], so round 1 already contains the target.
```

### Example 2

```text
Input: points = [[0,0,0],[6,0,6]], target = [1,0,1]
Output: 2
Explanation: Round 1 contains [3,0,3], the midpoint of the initial pair.
Round 2 pairs [0,0,0] with [3,0,3] and produces [1,0,1], so the smallest k
is 2.
```

### Example 3

```text
Input: points = [[1,1,4],[6,0,2]], target = [1,1,4]
Output: 0
Explanation: The target is itself one of the initial points, so no round is
needed.
```

### Example 4

```text
Input: points = [[2,5,1]], target = [0,0,0]
Output: -1
Explanation: Producing a new point always requires two different points to
pair, and only one point will ever exist. The target is unreachable, so the
answer is -1.
```

### Constraints

- `1 <= points.length <= 20`
- `points[i] = [xi, yi, zi]`
- `0 <= xi, yi, zi <= 6`
- `target.length == 3`
- `0 <= target[i] <= 6`
- The initial points are all different from one another.
