# Crossing The Opening Grid II

## Description

A dungeon floor is laid out as an `n x m` grid of rooms. You begin in the
top-left room `(0, 0)` at time `t = 0`, and the way out is the bottom-right
room `(n - 1, m - 1)`.

Room `i`, `j` stays locked until time `moveTime[i][j]`: a move into it may
begin only once the clock has reached that value. The steps themselves no
longer cost a fixed amount — your first step takes one second, your second
takes two, your third takes one again, and so on, alternating for the whole
journey. Two rooms are adjacent when they share a wall, horizontally or
vertically, and pausing in an open room costs nothing and leaves the
alternation untouched.

Return the earliest moment at which you can be standing in the exit room.

### Example 1

```text
Input: moveTime = [[3,0],[0,3]]
Output: 5
Explanation: Step right into room (0, 1), which is already open — that
first step takes one second, so you arrive at t = 1. Room (1, 1) stays
locked until t = 3, and the second step now costs two seconds, so
leaving at t = 3 lands you in (1, 1) at t = 5.
```

### Example 2

```text
Input: moveTime = [[0,5],[5,0]]
Output: 8
Explanation: Both neighbors of the start are locked until t = 5. The
first step, into room (0, 1), lands at t = 6; the second step costs two
seconds and lands in the exit at t = 8.
```

### Example 3

```text
Input: moveTime = [[0,2,0],[4,0,1]]
Output: 6
Explanation: Room (0, 1) only opens at t = 2, so the one-second first
step lands at t = 3. The two-second second step reaches room (0, 2) at
t = 5, and the final one-second step down arrives at the exit at t = 6.
```

### Constraints

- `2 <= n == moveTime.length <= 750`
- `2 <= m == moveTime[i].length <= 750`
- `0 <= moveTime[i][j] <= 10⁹`

## Hints

### Hint 1

Shortest-path machinery applies, but first pin down what a move costs:
every step flips the parity of `i + j`, so the number of moves already
made is dictated by which room you are standing in.
