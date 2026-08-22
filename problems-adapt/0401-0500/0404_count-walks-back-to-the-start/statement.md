# Count Walks Back to the Start

## Description

A marker sits at cell `0` of a line of `width` cells, indexed `0` through
`width - 1`.

Each move takes one of three forms: step one cell left, step one cell right,
or hold still. The marker must stay on the line at every moment.

Given the integers `steps` and `width`, count the move sequences of length
exactly `steps` that leave the marker back at cell `0`. Two sequences differ
whenever any single move differs. Return the count modulo `10⁹ + 7`, since it
can be very large.

### Example 1

```text
Input: steps = 4, width = 3
Output: 9
Explanation: The nine walks are
Hold Hold Hold Hold
Right Left Hold Hold
Right Hold Left Hold
Right Hold Hold Left
Hold Right Left Hold
Hold Right Hold Left
Hold Hold Right Left
Right Right Left Left
Right Left Right Left
```

### Example 2

```text
Input: steps = 3, width = 1
Output: 1
Explanation: The line has one cell, so every move must be a hold.
```

### Example 3

```text
Input: steps = 6, width = 50
Output: 51
Explanation: Six moves can reach at most cell 6, so the unused cells to the
right never enter the count.
```

### Constraints

- `1 <= steps <= 500`
- `1 <= width <= 10⁶`

## Hints

### Hint 1

After `k` moves, all you ever need to know is how many walks end at each
cell. One move later, a cell is reached by holding there, or by stepping in
from either neighbor.

### Hint 2

No walk of `steps` moves ever visits a cell beyond `steps`, however wide the
line is. Cap the table at `min(width, steps + 1)` cells and the line's size
stops mattering.
