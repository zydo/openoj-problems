# Nearest Qualifying Room

## Description

You are given `n` rooms as a 2D integer array `rooms`, where
`rooms[i] = [id_i, size_i]` describes the room numbered `id_i` and its
`size_i`. Room numbers are pairwise distinct.

You are also given `k` requests as a 2D array `queries`, where
`queries[j] = [target_j, min_size_j]`. A room **qualifies** for request `j`
when its size is at least `min_size_j`. The answer to request `j` is the
qualifying room whose number is closest to `target_j`, that is, the one
minimizing `|id − target_j|`. When two qualifying rooms are equally close,
the smaller room number wins. When no room qualifies, the answer is `-1`.

Return an array of `k` answers, one per request, in the order given.

### Example 1

```text
Input: rooms = [[4,5],[10,5],[6,2]], queries = [[7,5],[6,6],[10,5]]
Output: [4,-1,10]
Explanation: Request [7,5]: rooms 4 and 10 qualify, both at distance 3
from 7, so the smaller number 4 wins. Request [6,6]: no room reaches size
6, so the answer is -1. Request [10,5]: room 10 qualifies and matches the
target exactly.
```

### Example 2

```text
Input: rooms = [[2,3],[4,1],[6,3],[8,3],[10,2]], queries = [[5,3],[3,2],[9,1]]
Output: [6,2,8]
Explanation: Request [5,3]: rooms 2, 6 and 8 qualify; 6 is nearest at
distance 1. Request [3,2]: rooms 2, 6, 8 and 10 qualify; 2 is nearest.
Request [9,1]: all rooms qualify; 8 and 10 are equidistant from 9, so the
smaller number 8 wins.
```

### Constraints

- `1 <= rooms.length <= 10⁵`
- `1 <= queries.length <= 10⁴`
- `1 <= id_i, target_j <= 10⁷`
- `1 <= size_i, min_size_j <= 10⁷`
- All `id_i` are distinct.

## Hints

### Hint 1

Answered one at a time, every request must re-examine the whole room list
against its size threshold. Is there an order to visit the requests in
which rooms become eligible one way — never ineligible?

### Hint 2

Process requests by falling `min_size` and rooms by falling size, walking a
pointer that inserts each newly eligible room's id into a sorted id list.
Each request then reduces to a closest-value search around its target,
which binary search settles in logarithmic time.
