# Cheapest Route with Express Roads

## Description

You begin at an integer point `start = [startX, startY]` on the plane and
want to reach the point `target = [targetX, targetY]`.

Traveling on foot between any two points `(x1, y1)` and `(x2, y2)` costs
their Manhattan distance, `|x2 - x1| + |y2 - y1|`.

The array `specialRoads` describes express roads that undercut that price:
`specialRoads[i] = [x1i, y1i, x2i, y2i, costi]` is a one-way express road
from `(x1i, y1i)` to `(x2i, y2i)` whose ride costs `costi` no matter how far
it spans. Any road may be taken any number of times.

Return the smallest total cost of a journey from the start point to the
target point.

### Example 1

```text
Input: start = [2,3], target = [7,8], specialRoads =
[[2,3,6,8,3],[6,7,7,8,1],[5,5,6,8,2]]
Output: 4
Explanation: The start point is itself the tail of specialRoads[0], so ride
it to (6,8) for the cost 3, then walk to (7,8) for |7 - 6| + |8 - 8| = 1.
The total is 3 + 1 = 4.
```

### Example 2

```text
Input: start = [1,2], target = [4,6], specialRoads =
[[4,6,1,2,9],[2,5,3,6,7],[1,1,2,2,1]]
Output: 7
Explanation: Walking straight across costs |4 - 1| + |6 - 2| = 7, and no
express road improves on that: specialRoads[0] points the wrong way, and
boarding either of the other two costs more walking than it saves.
```

### Example 3

```text
Input: start = [1,1], target = [9,9], specialRoads =
[[1,1,5,5,4],[5,5,9,9,4],[9,9,1,1,1],[3,3,8,2,2]]
Output: 8
Explanation: Ride specialRoads[0] from the start point to (5,5) for the
cost 4, then specialRoads[1] from (5,5) to (9,9) for another 4 — a total of
8. Walking the whole way would cost |9 - 1| + |9 - 1| = 16.
```

### Constraints

- `start.length == target.length == 2`
- `1 <= startX <= targetX <= 10⁵`
- `1 <= startY <= targetY <= 10⁵`
- `1 <= specialRoads.length <= 200`
- `specialRoads[i].length == 5`
- `startX <= x1i, x2i <= targetX`
- `startY <= y1i, y2i <= targetY`
- `1 <= costi <= 10⁵`

## Hints

### Hint 1

An optimal journey only ever needs to set down at the start, at the target,
or at the tail or head of some express road — pausing anywhere else is never
cheaper than striding straight through that point.

### Hint 2

Treat each of those points as a node: join every ordered pair with a walking
edge priced at Manhattan distance, and give each express road one extra
directed edge priced at its own cost.

### Hint 3

The task is now a single-source shortest-path computation over at most a few
hundred nodes.
