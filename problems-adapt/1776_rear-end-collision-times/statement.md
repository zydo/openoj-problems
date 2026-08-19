# Rear-End Collision Times

## Description

A one-lane road carries `n` cars, all heading the same way. The array `cars`
describes them, one pair `[position_i, speed_i]` per car:

- `position_i` is the distance, in meters, between the `i`th car and the start
  of the road; positions are strictly increasing.
- `speed_i` is that car's speed in meters per second.

Treat each car as a point. When a faster car draws level with the car ahead,
the two continue as a single fleet at the slower car's original speed — and a
fleet plays the same game as any car when it reaches the traffic in front of
it.

For each car, report the clock time, in seconds, of its first rendezvous with
the traffic immediately ahead of it, collected into an array `answer` indexed
like `cars`; use `-1` when no such moment ever comes. Values within `10⁻⁵` of
the exact ones are accepted.

### Example 1

```text
Input: cars = [[2,3],[5,1],[6,4],[10,2]]
Output: [1.50000,-1.00000,2.00000,-1.00000]
Explanation: The first car closes a 3-meter gap at 2 m/s and reaches the
second car after 1.5 s. The third car closes its 4-meter gap at 2 m/s and
reaches the fourth after 2 s. Nothing catches the third car, which is the
fastest of all.
```

### Example 2

```text
Input: cars = [[1,5],[4,3],[9,1]]
Output: [1.50000,2.50000,-1.00000]
Explanation: The first car gains on the second at 2 m/s and needs 1.5 s; the
second gains on the third at the same rate but starts 5 meters back, so it
needs 2.5 s.
```

### Example 3

```text
Input: cars = [[0,4],[3,3],[4,1]]
Output: [1.33333,0.50000,-1.00000]
Explanation: The second car reaches the third after 0.5 s and the pair then
crawls at 1 m/s. The first car would have needed 3 s to reach the second car
alone, but by then it is long gone; catching the slowed pair takes only 4/3 s
in total.
```

### Constraints

- `1 <= cars.length <= 10⁵`
- `1 <= position_i, speed_i <= 10⁶`
- positions are strictly increasing: `cars[i][0] < cars[i+1][0]`

## Hints

### Hint 1

Merges are a distraction at first: for each car, the only question is which
piece of traffic ahead of it — still moving at its original speed — it draws
level with first.

### Hint 2

Traffic ahead that is at least as fast is unreachable; drop it from
consideration.

### Hint 3

Traffic ahead that someone else reaches sooner is no longer a target for you
either — by the time you arrive, it has slowed. Drop that too.

### Hint 4

Both drops are permanent, so sweep from the last car backwards and keep the
surviving candidates on a stack.
