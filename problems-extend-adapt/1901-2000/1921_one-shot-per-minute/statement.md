# One Shot per Minute

## Description

Enemy boats are converging on a harbor town. There are `n` of them. At the
start, boat `i` is `dist[i]` kilometers out, and it closes at a steady
`speed[i]` kilometers per minute.

You man the town's single shore cannon. It begins fully charged, and after
every shot it needs one minute to recharge; a charged cannon can fire on at
most one boat per minute — or wait.

The town falls the instant any boat reaches the harbor. A boat that slides
into the harbor at the very moment the cannon finishes recharging counts as
a loss too: the crash lands before a shot can fly.

Return the greatest number of boats you can sink before the town falls, or
`n` if you can clear every boat in time.

### Example 1

```text
Input: dist = [4,2,1], speed = [2,1,1]
Output: 2
Explanation: You sink the 1-km boat at minute 0. A minute later the
remaining boats are 2 km and 1 km out, and you sink the 1-km one. Another
minute later the last boat reaches the harbor exactly as the cannon finishes
recharging, so the run ends with 2 sunk.
```

### Example 2

```text
Input: dist = [6,4,3,5], speed = [1,2,1,1]
Output: 4
Explanation: The boats need 6, 2, 3, and 5 minutes to arrive, so each
minute there is a comfortable target: every boat sinks before any of them
close the distance.
```

### Example 3

```text
Input: dist = [2,2,2,2], speed = [1,1,1,1]
Output: 2
Explanation: You sink one boat per minute for the first two minutes. When
the cannon is charged the third time, two of the remaining boats reach the
harbor at that exact minute, and the town falls with 2 sunk.
```

### Example 4

```text
Input: dist = [9], speed = [4]
Output: 1
Explanation: The lone boat needs 3 minutes to arrive and you fire at
minute 0, so it sinks long before it closes in.
```

### Constraints

- `n == dist.length == speed.length`
- `1 <= n <= 10^5`
- `1 <= dist[i], speed[i] <= 10^5`

## Hints

### Hint 1

Each boat collapses to a single number: the minute it reaches the harbor,
the ceiling of `dist[i] / speed[i]`.

### Hint 2

Sort those arrival minutes. The shot fired at minute `i` lands on the
`i`-th earliest arrival, and it succeeds exactly while that arrival minute
is still strictly greater than `i`.
