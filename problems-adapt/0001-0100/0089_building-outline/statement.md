# Building Outline

## Description

A row of rectangular buildings stands on flat ground at height `0`. Building
`i` is given as `buildings[i] = [left, right, height]`, occupying the strip of
ground from `left` to `right` and rising to `height`.

Seen from far away the buildings merge into one silhouette. Describe the top
edge of that silhouette as a list of **corner points** `[[x1,y1],[x2,y2],…]`,
ordered by `x`. Each corner point marks the left end of a horizontal run of
the outline; the final point always has height `0` and sits where the
rightmost building stops. Stretches of bare ground between buildings belong to
the outline too.

The description must be minimal: never emit a point that continues the height
already in force. If three consecutive runs all sit at height `5`, the outline
records one run, not three.

### Example 1

```text
Input: buildings = [[1,6,8],[4,9,12],[11,14,6]]
Output: [[1,8],[4,12],[9,0],[11,6],[14,0]]
Explanation: The outline climbs to 8 at x = 1, and to 12 at x = 4 where the
taller building begins. The first building ends at 6 but changes nothing —
its neighbour is taller and still standing. At 9 the ground reappears, until
the last building lifts the outline to 6 from 11 to 14.
```

### Example 2

```text
Input: buildings = [[3,7,5],[7,10,5]]
Output: [[3,5],[10,0]]
Explanation: Two buildings of equal height meet exactly at x = 7. The
silhouette is one unbroken run, so no point is recorded at the join.
```

### Example 3

```text
Input: buildings = [[2,5,9]]
Output: [[2,9],[5,0]]
Explanation: A single building: one point where it rises, one where it ends.
```

### Constraints

- `1 <= buildings.length <= 10^4`
- `0 <= left_i < right_i <= 2^31 - 1`
- `1 <= height_i <= 2^31 - 1`
- `buildings` is sorted by `left_i` in non-decreasing order.

## Hints

### Hint 1

The outline can only change height where some building starts or stops, so
only those x coordinates are worth examining. Sort those events and walk them
left to right.

### Hint 2

At any position the visible height is the tallest building currently covering
it. So the walk needs a collection it can add a height to, remove a height
from, and query for its maximum.

### Hint 3

Removing an arbitrary element from a heap is awkward; it is easier to leave
stale entries in place and discard them lazily when they surface at the top
and their building has already ended. Emit a point only when the maximum after
processing all events at this x differs from the maximum before.
