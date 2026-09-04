# The Highest Number Within Reach

## Description

You are given two integers, `num` and `t`. A starting value `x` is
_within reach_ when it can be steered to exactly `num` by repeating this
paired move at most `t` times:

- Nudge `x` up or down by 1, and at the same instant nudge `num` up or
  down by 1 — the two directions are chosen independently.

Both numbers shift on every move, one unit each, so the distance
between them changes as they travel. Return the largest starting value
of `x` that is within reach.

### Example 1

```text
Input: num = 7, t = 3
Output: 13
Explanation: Step `x` down one unit while stepping `num` up one unit,
three times: the pair travels (13, 7) → (12, 8) → (11, 9) → (10, 10)
and meets exactly. A higher start leaves a gap above 6, and three moves
close at most 6.
```

### Example 2

```text
Input: num = 10, t = 4
Output: 18
Explanation: Four moves at the full closing rate cover 8 units of gap:
(18, 10) → (17, 11) → (16, 12) → (15, 13) → (14, 14).
```

### Constraints

- `1 <= num <= 50`
- `1 <= t <= 50`

### Hint 1

Track the gap `x - num` instead of the two values separately. A single
move can shrink that gap by 2, hold it steady, or grow it by 2 — and
nothing in between — so no mixing of directions closes more than 2
units per move.

### Hint 2

To push the highest legal start as far up as possible, spend every one
of the `t` moves at that full rate: `x` steps down while `num` steps
up, closing `2 * t` units in total. Using fewer moves only shrinks the
reachable span.
