# Grid Walk Homecoming

## Description

A drone starts at position `(0, 0)` on a flat grid. You are given a
string `moves` describing the sequence of moves it makes, where
`moves[i]` is its `i`-th move. Every move is one of `'U'` (up), `'D'`
(down), `'L'` (left), or `'R'` (right), and each move covers the exact
same distance.

Return `true` if the drone is back at `(0, 0)` after making every move in
`moves`, or `false` otherwise. Only the sequence of moves matters — the
drone's heading at any point along the way is irrelevant to how far each
letter moves it.

### Example 1

```text
Input: moves = "LURD"
Output: true
Explanation: Left and right cancel, and up and down cancel, so the drone
ends exactly where it began.
```

### Example 2

```text
Input: moves = "RRDD"
Output: false
Explanation: The drone moves two steps right and two steps down, landing
away from the origin with nothing to cancel either offset.
```

### Constraints

- `1 <= moves.length <= 2 * 10^4`
- `moves` consists only of the characters `'U'`, `'D'`, `'L'`, and `'R'`.
