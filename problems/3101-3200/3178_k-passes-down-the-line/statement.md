# K Passes Down The Line

## Description

Two positive integers `n` and `k` are given. `n` children, numbered `0`
through `n - 1`, stand side by side from left to right.

Child `0` starts out holding a ball, and the passing direction is toward the
right. Each second, whichever child holds the ball passes it to the adjacent
child in the current direction, and whenever the ball arrives at an end of
the line — child `0` or child `n - 1` — the passing direction flips.

Work out which child is holding the ball after `k` seconds and return that
child's number.

### Example 1

```text
Input: n = 4, k = 5
Output: 1
Explanation: The holder over time is 0, 1, 2, 3 (the right end flips the
direction), 2, 1. Five seconds in, child 1 holds the ball.
```

### Example 2

```text
Input: n = 5, k = 3
Output: 3
Explanation: The ball travels 0 -> 1 -> 2 -> 3, still heading right, so
child 3 has it after three seconds.
```

### Example 3

```text
Input: n = 4, k = 6
Output: 0
Explanation: The holder over time is 0, 1, 2, 3, 2, 1, 0. Six seconds is
exactly one full round trip, and the ball is back where it started.
```

### Constraints

- `2 <= n <= 50`
- `1 <= k <= 50`

## Hints

### Hint 1

After `2 * (n - 1)` seconds the ball is back at child 0 with the direction
reset, so the whole process repeats from there.

### Hint 2

The holder at second `k` therefore equals the holder at second
`k % (2 * (n - 1))`, which is easy to read off directly.
