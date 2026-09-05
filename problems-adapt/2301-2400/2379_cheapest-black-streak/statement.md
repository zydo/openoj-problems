# Cheapest Black Streak

## Description

A row of blocks is given as a string `blocks`, where each character is
`'W'` (white) or `'B'` (black). Repainting is the one allowed move: pick
a white block and turn it black. Black blocks never change.

Given a target length `k`, find the smallest number of repaints that
produces some run of `k` consecutive black blocks somewhere in the row,
and return that count.

### Example 1

```text
Input: blocks = "BBWWWBBB", k = 5
Output: 2
Explanation: The run spanning positions 3 through 7, "WWBBB", needs only
its two leading whites repainted to become "BBBBB". No length-5 window
costs less, so the answer is 2.
```

### Example 2

```text
Input: blocks = "WBWBWBWB", k = 3
Output: 1
Explanation: Every window of 3 consecutive blocks holds exactly one
white, so any candidate run costs a single repaint.
```

### Example 3

```text
Input: blocks = "BBBB", k = 4
Output: 0
Explanation: The whole row is already one black streak of the requested
length — nothing to repaint.
```

### Constraints

- `n == blocks.length`
- `1 <= n <= 100`
- `blocks[i]` is either `'W'` or `'B'`.
- `1 <= k <= n`

## Hints

### Hint 1

A repainted white is the only cost, so a fixed window of `k` blocks costs
exactly however many whites it contains.

### Hint 2

Every possible placement of the streak is a window of `k` neighboring
positions; the cheapest streak is the window holding the fewest whites.

### Hint 3

Slide the window one step at a time: the entering block may raise the
white count and the leaving block may lower it, so no window ever needs
recounting from scratch.
