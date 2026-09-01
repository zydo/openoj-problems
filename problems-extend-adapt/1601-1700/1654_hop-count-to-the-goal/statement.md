# Hop Count to the Goal

## Description

A tiny robot stands at position `0` on an endless number line and wants
to reach the flag at position `x`. It moves only by two fixed kinds of
hop:

- a **forward hop** of exactly `a` units, or
- a **backward hop** of exactly `b` units.

Two restrictions apply. The robot may never take backward hops twice in
a row — every backward hop needs a forward hop after (or before) it —
and it may never land on a cell listed in `forbidden`. Positions left of
`0` are also out of bounds, though hopping past the flag to the right
and coming back is perfectly legal.

Given the distinct array `forbidden` and the integers `a`, `b`, and `x`,
return the fewest hops that put the robot on `x`, or `-1` if `x` can
never be reached. Position `x` itself is guaranteed not to be forbidden.

### Example 1

```text
Input: forbidden = [5, 12], a = 4, b = 1, x = 8
Output: 2
Explanation: Two forward hops suffice: 0 -> 4 -> 8.
```

### Example 2

```text
Input: forbidden = [10], a = 6, b = 3, x = 9
Output: 3
Explanation: The robot overshoots and steps back once:
0 -> 6 -> 12 -> 9.
```

### Example 3

```text
Input: forbidden = [3], a = 5, b = 2, x = 1
Output: -1
Explanation: Forward hops land on multiples of 5 and the only positions
a backward hop can add end in 3 or 8, so the robot can never stand on
position 1.
```

### Example 4

```text
Input: forbidden = [2, 4], a = 3, b = 1, x = 6
Output: 2
Explanation: A plain pair of forward hops works: 0 -> 3 -> 6.
```

### Constraints

- `1 <= forbidden.length <= 1000`
- `1 <= a, b, forbidden[i] <= 2000`
- `0 <= x <= 2000`
- All values in `forbidden` are distinct.
- Position `x` is not forbidden.

## Hints

### Hint 1

Model each standing point as a graph node and hop candidates as edges;
a breadth-first search then finds the minimum hop count.

### Hint 2

The "no two backward hops in a row" rule disappears if each search state
remembers whether the previous hop was a backward one — search over
(position, last-hop) pairs instead of bare positions.

### Hint 3

The search never needs to stray above `max(x, max(forbidden)) + a + b`:
anything higher can only be useful after one more forward hop plus one
backward hop, and states beyond that bound can be pruned safely.
