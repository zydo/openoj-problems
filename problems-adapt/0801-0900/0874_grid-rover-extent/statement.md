# Grid Rover Extent

## Description

A rover explores the infinite grid of integer points, starting at `(0, 0)`
facing north. It obeys a list of `commands`:

- `-2` turns it 90 degrees left.
- `-1` turns it 90 degrees right.
- `1 <= k <= 9` moves it forward `k` unit steps in the current direction.

Certain points are marked as obstacles. When the rover's next unit step would
enter an obstacle, it stops one step short — remaining on the adjacent point —
and proceeds to the following command.

Return the largest squared distance from the origin that the rover reaches at
any point along its entire path (a point at distance `d` contributes `d²`).
North is the `+Y` direction, east `+X`, south `-Y`, and west `-X`. The origin
may itself hold an obstacle: the rover begins there regardless, but it can
never step back onto that point.

### Example 1

```text
Input: commands = [5,-1,2], obstacles = []
Output: 29
Explanation: Moving north 5 units reaches (0, 5); a right turn and 2 steps
east reach (2, 5). The best point is (2, 5) at 2² + 5² = 29.
```

### Example 2

```text
Input: commands = [3,-1,3,-2,3], obstacles = [[1,3]]
Output: 36
Explanation: Three steps north reach (0, 3). Turning east, the first step is
blocked by the obstacle at (1, 3), so the rover stays at (0, 3). Turning back
north, three more steps reach (0, 6), the furthest point at 6² = 36.
```

### Example 3

```text
Input: commands = [-1,-1,4], obstacles = []
Output: 16
Explanation: Two right turns face the rover south; four steps reach (0, -4),
which is 4² = 16 squared units from the origin.
```

### Constraints

- `1 <= commands.length <= 10⁴`
- Each `commands[i]` is `-2`, `-1`, or an integer in `[1, 9]`.
- `0 <= obstacles.length <= 10⁴`
- Every obstacle satisfies `-3 * 10⁴ <= xᵢ, yᵢ <= 3 * 10⁴`.
- The answer is less than `2³¹`.
