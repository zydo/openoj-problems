# The Litter Sweep

## Description

A sweeping robot works across `hall`, a grid handed to you as `m` strings
of `n` characters each — `hall[i][j]` is the tile where row `i` meets
column `j`. Every tile is one of five things:

- `'S'` — the tile where the robot starts.
- `'L'` — a piece of litter the robot must pick up (the tile turns into
  ordinary floor once its litter is gone).
- `'R'` — a charging pad; arriving on one refills the battery to full no
  matter how drained it was, and pads never stop working.
- `'X'` — a blocked tile the robot can never enter.
- `'.'` — open floor.

`battery` is the robot's full charge, and it rolls out of `'S'` holding
exactly that much. Every move onto one of the four neighboring tiles
costs one unit of charge, and a move is legal only when the robot can pay
for it — save that a move onto a charging pad is always allowed, since
the pad refills the battery the moment the robot arrives.

Return the fewest moves that pick up every piece of litter, or `-1` if
some piece can never be collected.

### Example 1

```text
Input: hall = ["S.L", ".X.", "..L"], battery = 4
Output: 4
Explanation:
Four moves — right, right, down, down — sweep both pieces: the second
right step picks up the litter at (0, 2), and the second down step picks
up the piece at (2, 2). The battery drains to exactly 0 on that last
arrival, which is still a legal move.
```

### Example 2

```text
Input: hall = ["S..", "XR.", "L.."], battery = 2
Output: 4
Explanation:
The straight route south is walled off by the blocked tile at (1, 0),
and two units of charge cannot pay for any long detour. Instead: right
to (0, 1), down onto the pad at (1, 1) — the battery tops back up to 2 —
then down to (2, 1) and left onto the litter at (2, 0).
```

### Example 3

```text
Input: hall = ["SX.", "XL."], battery = 7
Output: -1
Explanation:
Both tiles next to the start are blocked, so the robot never leaves its
corner, and the litter is never reached.
```

### Constraints

- `1 <= m == hall.length <= 20`
- `1 <= n == hall[i].length <= 20`
- `hall[i][j]` is one of `'S'`, `'L'`, `'R'`, `'X'`, or `'.'`
- `1 <= battery <= 50`
- `hall` contains exactly one `'S'`.
- `hall` contains at most 10 `'L'` tiles.

## Hints

### Hint 1

Every move costs the same, so search breadth-first in layers. The state
a visit needs is its tile, the set of litter already collected, and the
charge left in the battery.

### Hint 2

Holding more charge is never worse: for each tile and litter set only the
largest battery level seen so far matters, and an arrival that does not
beat it can be dropped.
