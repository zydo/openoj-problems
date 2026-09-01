# Cell Row Daily Evolution

## Description

A block of eight cells sits in a single row, and each cell is either
occupied (`1`) or empty (`0`). At every tick — think of one tick as one
day — all cells update simultaneously under a single rule:

- A cell whose two neighbors matched on the previous tick (both occupied
  or both empty) becomes occupied.
- Any other cell becomes empty.

The row has no cells beyond its two ends, so the end cells have only one
neighbor each; from the first tick onward both ends are always empty.

You are given the starting row `cells` — `cells[i]` is `1` when cell `i`
is occupied and `0` otherwise — and a number of ticks `n`. Return the row
as it looks after `n` ticks of the rule.

### Example 1

```text
Input: cells = [1,0,1,0,1,0,1,0], n = 3
Output: [0,0,0,1,1,0,0,0]
Explanation: The row ticks once per day:
Day 0: [1, 0, 1, 0, 1, 0, 1, 0]
Day 1: [0, 1, 1, 1, 1, 1, 1, 0]
Day 2: [0, 0, 1, 1, 1, 1, 0, 0]
Day 3: [0, 0, 0, 1, 1, 0, 0, 0]
```

### Example 2

```text
Input: cells = [0,1,1,0,1,1,0,1], n = 1000000000
Output: [0,0,1,1,1,1,1,0]
Explanation: A billion ticks is far too many to replay one by one, but
the row can only take finitely many shapes, so its history falls into a
repeating cycle long before the billionth tick.
```

### Example 3

```text
Input: cells = [0,0,1,1,1,1,0,0], n = 5
Output: [0,0,0,0,0,0,0,0]
Explanation: By the fifth tick the row has gone completely empty. That is
not the end of the story — empty neighbors count as matching, so the
interior refills on the very next tick — but after exactly five ticks the
row is all zeros.
```

### Constraints

- `cells.length == 8`
- `cells[i]` is either `0` or `1`.
- `1 <= n <= 10⁹`
