# The Kth Closest Obstacle So Far

## Description

Obstacles appear one at a time on an infinite plane. You are given a
positive integer `k` and a sequence `queries`; each `queries[i] = [x, y]`
places a fresh obstacle at `(x, y)` — the coordinate is guaranteed to be
unoccupied when that query arrives — and immediately asks how far the
kth closest obstacle sits from the origin, where distance means
`|x| + |y|`. Return the array `results` with `results[i]` equal to that
kth-nearest distance after query `i`, or `-1` while fewer than `k`
obstacles exist.

### Example 1

```text
Input: queries = [[2,2],[-1,3],[4,0],[0,-5]], k = 3
Output: [-1,-1,4,4]
Explanation: After the first two placements fewer than three obstacles
exist. The placed obstacles then sit at distances 4, 4, 4, and 5, so the
third closest is 4 from the third query onward — the distance-5 obstacle
never breaks into the three closest.
```

### Example 2

```text
Input: queries = [[3,-1],[0,0],[-2,2]], k = 1
Output: [4, 0, 0]
Explanation: The obstacles land at distances 4, 0, and 4; once the
origin obstacle appears it stays the closest.
```

### Example 3

```text
Input: queries = [[1,1],[2,2],[3,3],[4,4],[-3,3]], k = 2
Output: [-1,4,4,4,4]
Explanation: The diagonal placements sit at distances 2, 4, 6, and 8,
and the final obstacle at distance 6 is too far to enter the two
closest.
```

### Constraints

- `1 <= queries.length <= 2 * 10⁵`
- All `queries[i]` are distinct.
- `-10⁹ <= queries[i][0], queries[i][1] <= 10⁹`
- `1 <= k <= 10⁵`

## Hints

### Hint 1

The obstacle set only grows. An obstacle that falls outside the current
k closest can never matter again — later answers only move outward.

### Hint 2

So a max-heap holding exactly the k smallest distances seen so far is
enough: its top is always the current kth nearest.

### Hint 3

For each new distance, push it while the heap is short of k; otherwise
swap it in only when it beats the heap's top.
