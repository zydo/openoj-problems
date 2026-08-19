# Leftmost Reachable Point From Two Positions

## Description

You are given a 0-indexed array `heights` of positive integers.

A walker standing at index `i` may step to index `j` when `i < j` and
`heights[i] < heights[j]` — moves go strictly rightward and strictly upward.
Any number of steps may be taken, and a walker may also simply stay where
they are.

You are also given `queries`, where `queries[i] = [ai, bi]` places two
walkers at indices `ai` and `bi`. Return an array `answer` in which
`answer[i]` is the smallest index where the two walkers of query `i` can
stand at the same time, or `-1` if no such index exists.

### Example 1

```text
Input: heights = [3,7,2,5,6,4], queries = [[0,2],[1,3],[2,2],[4,0],[1,5]]
Output: [3,-1,2,4,-1]
Explanation:
- [0,2]: both need a point right of 2 taller than 3; index 3 (height 5) is
  the first, even though neither can stop at index 1.
- [1,3]: nothing after index 3 beats height 7, so they never meet.
- [2,2]: the walkers already share index 2.
- [4,0]: heights[0] = 3 < heights[4] = 6, so the walker at 0 steps straight
  to 4.
- [1,5]: again the height-7 building has no taller successor.
```

### Example 2

```text
Input: heights = [9,2,6,2,10,3], queries = [[0,2],[1,3],[2,4],[0,0],[3,5]]
Output: [4,4,4,0,5]
Explanation: The height-10 building at index 4 resolves the first three
queries — it is the first point right of 2 above 9 for [0,2], above 2 for
the equal pair [1,3], and directly reachable from 2 for [2,4] (6 < 10).
The last query resolves at index 5 since heights[3] = 2 < heights[5] = 3.
```

### Example 3

```text
Input: heights = [4,4,4], queries = [[0,1],[2,0],[1,1]]
Output: [-1,-1,1]
Explanation: Every step must land strictly higher, and nothing outranks 4 to
the right, so two walkers at different indices can never unite. A walker
pair sharing one index needs no move at all.
```

### Constraints

- `1 <= heights.length <= 5 * 10^4`
- `1 <= heights[i] <= 10^9`
- `1 <= queries.length <= 5 * 10^4`
- `queries[i] = [ai, bi]`
- `0 <= ai, bi <= heights.length - 1`

## Hints

### Hint 1

Order each query's endpoints so `a <= b`. What collapses when `a == b`, or
when `heights[a] < heights[b]`?

### Hint 2

In both of those cases the answer is `b` outright — the walkers either
already coincide or the one at `a` climbs straight to `b`.

### Hint 3

Otherwise no index up to and including `b` works, and both walkers need the
first index `t > b` with `heights[t] > max(heights[a], heights[b])`.

### Hint 4

"First index after a point whose value exceeds a threshold" is a descent
through a max segment tree (or a binary search down a monotonic stack) —
logarithmic per query.
