# Peak Area Under Moving Pistons

## Description

A vintage engine keeps a row of pistons sliding inside vertical tubes, and
the area under a piston at any instant is simply its current height in the
tube. We are curious how much area the whole row can pile up at its best
moment.

The input describes the starting instant:

- `height` — the tallest point any piston can reach in its tube.
- `positions` — `positions[i]` is piston `i`'s starting height, which is
  also the area sitting under it right now.
- `directions` — `directions[i]` is piston `i`'s current heading, `'U'`
  for climbing and `'D'` for descending.

Time advances in whole seconds. Every second, each piston shifts one unit
along its heading, but a piston that already touches a wall of its tube —
`positions[i] == 0` or `positions[i] == height` — turns around instead of
travelling outward. The turn is instantaneous and happens before any
movement is considered, so a piston resting against an end and pointing
away from it reverses on the spot.

Report the largest value the combined area ever reaches. Count the
starting moment as a candidate, and measure every later candidate after a
whole number of seconds.

### Example 1

```text
Input: height = 4, positions = [2, 2, 2], directions = "UUD"
Output: 8
Explanation: Two seconds pass and the tubes hold [4, 4, 0]: the two
climbers have just met the ceiling while the descender has just met the
floor, and 4 + 4 + 0 = 8 is the best the row ever manages.
```

### Example 2

```text
Input: height = 9, positions = [8, 1, 5], directions = "DUD"
Output: 18
Explanation: The peak is not early — after 14 seconds the pistons stand
at [6, 3, 9], and 6 + 3 + 9 = 18 tops every other instant.
```

### Constraints

- `1 <= height <= 10⁶`
- `1 <= positions.length == directions.length <= 10⁵`
- `0 <= positions[i] <= height`
- `directions[i]` is `'U'` or `'D'`.

## Hints

### Hint 1

Track one running number: in a single second the combined area grows by
the number of climbers and shrinks by the number of descenders.

### Hint 2

That growth rate cannot change on its own — it only moves when some
piston arrives at a wall and reverses, so those arrival times are the
only moments worth examining.

### Hint 3

A piston climbing from `positions[i]` first reaches the ceiling after
`height - positions[i]` seconds; a descender first reaches the floor
after `positions[i]` seconds. Afterwards it returns to a wall every
`height` seconds, so only the first two arrivals can fall inside one
full back-and-forth cycle.

### Hint 4

Sort every arrival time, sweep through them while carrying the running
area and the current rate, and remember the best value seen. The sums
involved can exceed 32 bits, so use wide integers.
