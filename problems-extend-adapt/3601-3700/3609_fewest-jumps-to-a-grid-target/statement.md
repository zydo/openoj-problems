# Fewest Jumps To A Grid Target

## Description

Two cells of an unbounded two-dimensional grid are picked out by their
coordinates: a starting cell `(sx, sy)` and a goal cell `(tx, ty)`.

You begin at `(sx, sy)`. Each jump takes the current cell's larger
coordinate, `m = max(x, y)`, as its length, and changes exactly one
coordinate by that amount:

- land on `(x + m, y)`, or
- land on `(x, y + m)`.

Return the fewest jumps that can end on `(tx, ty)`, or `-1` when no
sequence of jumps ever gets there.

### Example 1

```text
Input: sx = 2, sy = 2, tx = 10, ty = 6
Output: 3
Explanation: One shortest route is:
Jump 1: max(2, 2) = 2. Add it to the x-coordinate, going from (2, 2) to (4, 2).
Jump 2: max(4, 2) = 4. Add it to the y-coordinate, going from (4, 2) to (4, 6).
Jump 3: max(4, 6) = 6. Add it to the x-coordinate, going from (4, 6) to (10, 6).
Two jumps can never cover the gap, so 3 is minimal.
```

### Example 2

```text
Input: sx = 0, sy = 3, tx = 6, ty = 6
Output: 2
Explanation: One shortest route is:
Jump 1: max(0, 3) = 3. Add it to the y-coordinate, going from (0, 3) to (0, 6).
Jump 2: max(0, 6) = 6. Add it to the x-coordinate, going from (0, 6) to (6, 6).
```

### Example 3

```text
Input: sx = 3, sy = 1, tx = 7, ty = 5
Output: -1
Explanation: Every reverse chain from (7, 5) dies before reaching (3, 1),
so the goal is unreachable and the answer is -1.
```

### Constraints

- `0 <= sx <= tx <= 10^9`
- `0 <= sy <= ty <= 10^9`

## Hints

### Hint 1

Play the trip in reverse. From `(tx, ty)` ask which single cell could have
been the one before it — whenever the two coordinates differ, that
predecessor is forced.

### Hint 2

Undoing a step with `x > y`: if `x` is at least twice `y`, the previous
cell was `(x / 2, y)` (this requires `x` to be even); otherwise the last
jump added `y` to `x`, so step back to `(x - y, y)`.

### Hint 3

Count the forced undo-steps until you arrive at `(sx, sy)`; answer `-1`
when you fall below the start, are asked to halve an odd coordinate, or
land on equal coordinates while the start sits on neither axis.
