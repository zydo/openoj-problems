# First Day in Every Cell

## Description

A row holds `n` cells numbered `0` to `n - 1`, and days are numbered from
`0`. Each day you occupy exactly one cell, beginning with cell `0` on day
`0`. An array `nextVisit` of length `n` steers the walk:

- The day you occupy cell `i`, count how many times you have occupied cell
  `i` up to and including today.
- If that count is odd, tomorrow you occupy cell `nextVisit[i]`, which never
  lies beyond cell `i` (`0 <= nextVisit[i] <= i`).
- If that count is even, tomorrow you occupy cell `(i + 1) mod n`.

Return the label of the first day by which you have occupied every cell at
least once. That day is guaranteed to arrive, but it can be astronomically
far away, so report it modulo `10^9 + 7`.

### Example 1

```text
Input: nextVisit = [0,1,1]
Output: 4
Explanation: You occupy cells 0, 0, 1, 1, 2, ... over the days. Day 4 is
the first day spent in cell 2, and cells 0 and 1 were occupied earlier.
```

### Example 2

```text
Input: nextVisit = [0,1,2,1]
Output: 6
Explanation: You occupy cells 0, 0, 1, 1, 2, 2, 3, ... over the days. Each
odd occupation jumps within the same cell; each even occupation steps right.
```

### Example 3

```text
Input: nextVisit = [0,0,1,2]
Output: 12
Explanation: You occupy cells 0, 0, 1, 0, 0, 1, 2, 1, 0, 0, 1, 2, 3, ...
The jump from cell 1 back to cell 0 forces a long replay before cell 3 is
finally reached on day 12.
```

### Constraints

- `n == nextVisit.length`
- `2 <= n <= 10⁵`
- `0 <= nextVisit[i] <= i`

## Hints

### Hint 1

The only way into cell `i + 1` is the day after an even-counted occupation
of cell `i`. The first time you reach cell `i + 1`, what can be said about
the counts of every cell below it?

### Hint 2

After an odd occupation of cell `i` you are thrown back to
`j = nextVisit[i] <= i`. Getting from that moment back to cell `i` — this
time with an even count — costs a fixed number of days.

### Hint 3

The trip back from `j` to `i` replays a stretch of the walk that already
happened once, from an identical configuration. Let a table remember how
many days each such stretch took, and the whole answer becomes one pass.
