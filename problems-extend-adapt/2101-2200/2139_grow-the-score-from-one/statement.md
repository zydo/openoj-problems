# Grow the Score from One

## Description

A scorekeeping game starts with the number `1`, and you want it to end at
exactly `target`. Each move changes the current number `x` in one of two
ways:

- Step up: replace `x` with `x + 1`.
- Double: replace `x` with `2 * x`.

Stepping up is unlimited, but doubling may be used at most `maxDoubles`
times in total. Return the smallest number of moves that reaches `target`
from the starting `1`.

### Example 1

```text
Input: target = 21, maxDoubles = 2
Output: 7
Explanation: Step up four times to reach 5, double to 10, double to 20,
then step up once more. That is 4 + 1 + 1 + 1 = 7 moves, and no sequence
gets there faster with only two doublings available.
```

### Example 2

```text
Input: target = 100, maxDoubles = 3
Output: 15
Explanation: Step up eleven times to 12, then double to 24, step to 25,
and double twice more through 50 to 100 — 15 moves in all.
```

### Example 3

```text
Input: target = 6, maxDoubles = 0
Output: 5
Explanation: With doubling off the table, the only option is stepping up
five times from 1 to 6.
```

### Constraints

- `1 <= target <= 10^9`
- `0 <= maxDoubles <= 100`

## Hints

### Hint 1

Trace the journey in reverse instead: start at `target` and try to get
back down to `1`.

### Hint 2

Work greedily from that end. Whenever the current value is odd, its last
forward move cannot have been a double, so a step is forced; when it is
even and a double is still available, undoing a double removes the most
value for a single move.

### Hint 3

After the allowed doubles run out, only steps remain — the leftover gap
to `1` can be counted in one leap rather than simulated.
