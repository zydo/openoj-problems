# Fewest Points Hitting Every Range Twice

## Description

Each pair `[start, end]` in `ranges` represents every integer from `start`
through `end`, inclusive.

Choose a set of integers such that every range contains at least two chosen
integers. Return the smallest possible number of chosen points.

### Example 1

```text
Input: ranges = [[2,5],[4,7],[6,9]]
Output: 4
Explanation: The set {4, 5, 6, 7} gives every range at least two points.
```

### Example 2

```text
Input: ranges = [[0,4],[1,3],[2,5]]
Output: 2
Explanation: Choosing {2, 3} satisfies all three nested ranges.
```

### Example 3

```text
Input: ranges = [[3,4],[4,6],[6,8]]
Output: 4
Explanation: One optimum is {3, 4, 6, 8}.
```

### Constraints

- `1 <= ranges.length <= 3000`
- `ranges[i].length == 2`
- `0 <= ranges[i][0] < ranges[i][1] <= 10^8`

## Hints

### Hint 1

Process ranges by increasing end. For equal ends, handle the larger start
first.

### Hint 2

The largest available points inside the current range are most likely to
remain useful for later ranges.

### Hint 3

Only the last two chosen points are needed to decide whether the current
range needs zero, one, or two additional points.
