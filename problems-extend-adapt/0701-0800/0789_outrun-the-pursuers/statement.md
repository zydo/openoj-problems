# Outrun the Pursuers

## Description

You are moving across an infinite 2-D grid, starting at `[0, 0]`, trying to
reach `target = [xtarget, ytarget]`. A number of pursuers start at the
positions listed in `ghosts`, where `ghosts[i] = [xi, yi]` is the `i`th
pursuer's starting square. Every coordinate is an integer.

Every turn, you and every pursuer independently move one unit along a
cardinal direction (north, east, south, or west), or stay put; all moves
for the turn resolve at once.

You succeed only if you can occupy the target strictly before every
pursuer does. Arriving at any square — including the target — at the exact
same turn as a pursuer counts as a capture, not a success.

Return `true` if you can guarantee reaching the target no matter how the
pursuers move, and `false` otherwise.

### Example 1

```text
Input: ghosts = [[3,0],[0,5]], target = [0,2]
Output: true
Explanation: You reach (0, 2) in 2 turns. The pursuer at (3, 0) needs 5
turns to reach it, and the one at (0, 5) needs 3, so both arrive too late.
```

### Example 2

```text
Input: ghosts = [[2,0]], target = [3,0]
Output: false
Explanation: The pursuer at (2, 0) sits between you and (3, 0) and reaches
it in a single turn — the same turn you would.
```

### Example 3

```text
Input: ghosts = [[4,0]], target = [2,0]
Output: false
Explanation: You and the pursuer at (4, 0) both reach (2, 0) after exactly
2 turns, which counts as a capture, not a successful arrival.
```

### Constraints

- `1 <= ghosts.length <= 100`
- `ghosts[i].length == 2`
- `-10⁴ <= xi, yi <= 10⁴`
- There can be multiple pursuers at the same location.
- `target.length == 2`
- `-10⁴ <= xtarget, ytarget <= 10⁴`
