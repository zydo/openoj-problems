# Filling Ladder Gaps

## Description

A ladder is described by a strictly increasing array `rungs` giving the
heights of the rungs that are already installed. You start on the floor at
height `0` and want to end up holding the last rung.

From wherever you stand — floor or rung — your next move may only be to the
next higher rung, and only when that rung lies at most `dist` above you.
Rungs can be bolted on at any positive integer height that is not already
occupied.

Return the smallest number of rungs that must be added so the whole ladder
can be climbed up to its final rung.

### Example 1

```text
Input: rungs = [2,4,8,16], dist = 3
Output: 3
Explanation: the jump from 4 to 8 needs one extra rung (at 7), and the
jump from 8 to 16 needs two more (at 11 and 14), giving 3 additions in
total.
```

### Example 2

```text
Input: rungs = [1,2,3,4], dist = 5
Output: 0
Explanation: every hop is well within reach, so nothing has to be added.
```

### Example 3

```text
Input: rungs = [7], dist = 2
Output: 3
Explanation: even the first rung is out of reach from the floor; rungs at
heights 2, 4, and 6 make the climb 0 → 2 → 4 → 6 → 7 possible.
```

### Constraints

- `1 <= rungs.length <= 10⁵`
- `1 <= rungs[i] <= 10⁹`
- `1 <= dist <= 10⁹`
- `rungs` is strictly increasing.

## Hints

### Hint 1

Inserted rungs never let you skip an existing rung, so the ladder is just
a chain of independent gaps that can be handled left to right.

### Hint 2

A gap of width `g` to the next existing rung is bridged cheapest by
`ceil(g / dist) - 1` new rungs, each bolted as high as the current
position allows.

### Hint 3

The ceiling `ceil(g / dist)` falls out of integer division
`(g + dist - 1) / dist`, so no per-rung simulation is needed.
