# Crossing The Opening Grid I

## Description

A dungeon floor is laid out as an `n x m` grid of rooms. You begin in the
top-left room `(0, 0)` at time `t = 0`, and the way out is the bottom-right
room `(n - 1, m - 1)`.

Room `i`, `j` stays locked until time `moveTime[i][j]`: you may step into
it only once the clock has reached that value. Stepping between two
adjacent rooms takes exactly one second — two rooms are adjacent when they
share a wall, horizontally or vertically — and standing still in an
already-open room costs nothing.

Return the earliest moment at which you can be standing in the exit room.

### Example 1

```text
Input: moveTime = [[3,0],[0,3]]
Output: 4
Explanation: Step right into room (0, 1), which is already open,
arriving at t = 1. Room (1, 1) stays locked until t = 3; leaving (0, 1)
at that moment lands you in (1, 1) at t = 4.
```

### Example 2

```text
Input: moveTime = [[0,5],[5,0]]
Output: 7
Explanation: Both neighbors of the start are locked until t = 5. Step
right at t = 5 and arrive at t = 6, then step down and arrive at t = 7.
```

### Example 3

```text
Input: moveTime = [[0,2,0],[4,0,1]]
Output: 5
Explanation: Room (0, 1) only opens at t = 2, so the first step lands at
t = 3. Room (0, 2) is already open, so the next step lands at t = 4, and
a final step down reaches the exit at t = 5.
```

### Constraints

- `2 <= n == moveTime.length <= 50`
- `2 <= m == moveTime[i].length <= 50`
- `0 <= moveTime[i][j] <= 10⁹`

## Hints

### Hint 1

Treat each room's earliest possible arrival as a value to settle, and
note that leaving a room later never makes the next move cheaper —
delaying only pushes you toward the target room's opening time.
