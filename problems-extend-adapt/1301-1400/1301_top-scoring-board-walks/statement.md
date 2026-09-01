# Top-Scoring Board Walks

## Description

A square board of single characters has its start cell `'S'` in the
bottom right corner and its exit cell `'E'` in the top left corner.
Every other cell either holds a digit `'1'` through `'9'` worth that
many points, or is a blocked cell `'X'`.

You walk from `'S'` to `'E'`. Each step lands on the cell directly
above, directly to the left, or diagonally up-left, and may never land
on an `'X'` or leave the board. A walk's score is the total of the
points printed on the digit cells it visits; `'S'` and `'E'` are worth
nothing.

Return exactly two values: the highest score any walk can achieve, and
the number of distinct walks that achieve it, taken modulo `10^9 + 7`.
When nothing can reach the exit, return `[0, 0]`.

### Example 1

```text
Input: board = ["E34","75X","22S"]
Output: [14,1]
Explanation: The best walk moves diagonally onto '5', steps left onto
'7', then enters the exit: 5 + 7 = 14, and no other walk matches it.
```

### Example 2

```text
Input: board = ["E9","9S"]
Output: [9,2]
Explanation: The exit can be entered from below or from the right, and
either approach collects one '9', so two walks tie with score 9.
```

### Example 3

```text
Input: board = ["EXX","XXX","XXS"]
Output: [0,0]
Explanation: Blocked cells seal off the exit completely, so it is
unreachable and both reported values are 0.
```

### Constraints

- `2 <= board.length == board[i].length <= 100`

### Follow-up

The two reported values need different overflow treatment: the score
fits comfortably in a machine integer, while the count must be reduced
modulo `10^9 + 7`. Why does the score never need reducing?

## Hints

### Hint 1

Every allowed move strictly decreases row plus column, so a walk can
never revisit a cell. Sweep the cells in that order and record the best
score with which each cell can be reached.

### Hint 2

Keep a second table counting the walks that realize each cell's best
score: a cell's count is the sum of the counts of exactly those
predecessors that achieve the optimum.
