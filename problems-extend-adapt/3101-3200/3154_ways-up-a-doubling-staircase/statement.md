# Ways Up A Doubling Staircase

## Description

A staircase has infinitely many stairs, numbered upward from 0.

A climber stands on stair 1 holding a leap counter that starts at 0, and
performs any number of moves of two kinds:

- Step down from stair `i` to stair `i - 1`. This move may never be
  taken twice in a row, and it is forbidden while standing on stair 0.
- Leap up `2^leap` stairs, then increase `leap` by one, so every leap
  covers twice the ground of the one before it.

Count the distinct ways to end on stair `k`. Two ways differ when their
move sequences differ, and a climber who reaches stair `k`, wanders off,
and comes back contributes once for each arrival.

### Example 1

```text
Input: k = 3
Output: 3
Explanation: Stair 3 needs the leaps +1 and +2 plus exactly one
down-step, and that step can occupy any of the three gaps around the
leaps:
- down, +1, +2: 1 -> 0 -> 1 -> 3
- +1, down, +2: 1 -> 2 -> 1 -> 3
- +1, +2, down: 1 -> 2 -> 4 -> 3
```

### Example 2

```text
Input: k = 2
Output: 4
Explanation: One route simply leaps +1 and lands on stair 2. The other
three take both leaps and weave two down-steps through two of the three
gaps around them.
```

### Example 3

```text
Input: k = 10
Output: 0
Explanation: With `x` leaps the highest stair touched is `2^x`, and at
most `x + 1` down-steps fit between them, so `x` leaps can only land on
stairs `2^x - (x + 1)` through `2^x`. Three leaps cover stairs 4
through 8 and four cover 11 through 16 — stair 10 falls into the crack
and is unreachable.
```

### Constraints

- `0 <= k <= 10⁹`

## Hints

### Hint 1

The leaps contribute a fixed total of `2^x - 1` above the start, so any
route with `x` leaps and `y` down-steps ends on stair `2^x - y` no
matter how the moves interleave.

### Hint 2

Down-steps may never sit together, so the `y` down-steps of a route must
occupy distinct gaps among the `x + 1` slots around the `x` leaps.

### Hint 3

Picking which gaps hold the down-steps is the entire count: `C(x + 1,
y)` routes per `x`. Sum the binomials over the few `x` with
`0 <= 2^x - k <= x + 1`.
