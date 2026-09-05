# Grid Victory Tracker

## Description

Two players alternately place marks on an `n × n` grid. Player identifiers are
`1` and `2`. Every requested cell is empty, every placement is valid, and no
placements occur after someone wins. A player wins by filling an entire row,
column, main diagonal, or anti-diagonal with their marks.

Implement the `GridVictoryTracker` class:

- `GridVictoryTracker(int n)` creates an empty board of side length `n`.
- `int placeMark(int row, int col, int player)` records one mark. Return the
  winning player's identifier if this placement completes a line; otherwise
  return `0`.

### Example 1

```text
Input:
["GridVictoryTracker", "placeMark", "placeMark", "placeMark", "placeMark", "placeMark", "placeMark", "placeMark"]
[[4], [0,1,1], [0,0,2], [1,1,1], [0,2,2], [2,1,1], [2,2,2], [3,1,1]]
Output: [null, 0, 0, 0, 0, 0, 0, 1]
Explanation: Player 1's last mark completes column 1.
```

### Constraints

- `2 <= n <= 100`
- `player` is either `1` or `2`.
- `0 <= row, col < n`
- Different calls always name different cells.
- At most `n²` calls are made to `placeMark`.

### Follow-up

Can each placement be processed in `O(1)` time without storing the full grid?

## Hints

### Hint 1

Only the row, column, and possible diagonals through the new cell can become a
winning line.

### Hint 2

Maintain per-player counters for every row and column, plus one counter for
each diagonal.
