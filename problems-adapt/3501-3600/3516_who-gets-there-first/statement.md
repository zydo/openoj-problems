# Who Gets There First

## Description

Three people stand on a number line at positions `x`, `y`, and `z`:

- Person 1 stands at `x`.
- Person 2 stands at `y`.
- Person 3 stands at `z` and stays put.

At the same moment, Person 1 and Person 2 set off toward Person 3, walking
at exactly the same speed.

Who gets there first? Return `1` if Person 1 arrives before Person 2, `2`
if Person 2 arrives before Person 1, or `0` if they arrive at the same
moment.

### Example 1

```text
Input: x = 9, y = 3, z = 6
Output: 0
Explanation: Person 1 covers |9 - 6| = 3 units while Person 2 covers
|3 - 6| = 3 units. They step onto position 6 at the same instant.
```

### Example 2

```text
Input: x = 5, y = 19, z = 8
Output: 1
Explanation: Person 1 needs |5 - 8| = 3 units and Person 2 needs
|19 - 8| = 11 units, so Person 1 arrives first.
```

### Example 3

```text
Input: x = 20, y = 5, z = 12
Output: 2
Explanation: Person 1 needs |20 - 12| = 8 units and Person 2 needs
|5 - 12| = 7 units, so Person 2 arrives first.
```

### Constraints

- `1 <= x, y, z <= 100`

## Hints

### Hint 1

Equal speeds turn the race into a pure distance contest — nobody can gain
ground mid-walk, so the finish order is decided by how far each walker has
to travel.

### Hint 2

Person 3 never moves, so the two travel distances are `|x - z|` and
`|y - z|`. The shorter distance wins; two equal distances are their own
answer.
