# Solutions — First Day in Every Cell

## Linear DP on first-entry days

Cells are met in order: cell `i + 1` is entered only right after an
even-counted occupation of cell `i`, so when cell `i` is first entered,
every cell below it carries an even count. Write `f[i]` for the day cell
`i` is first occupied; the answer wanted is `f[n - 1]`. The walk is fully
determined by `nextVisit`, so these days can be built one cell at a time.

Take the first arrival at cell `i - 1`, on day `f[i - 1]`. That makes its
count odd, and the next day the jump sends the walker to
`j = nextVisit[i - 1]`. At that instant cells `0 .. i - 2` all hold even
counts while cell `j` holds an odd one — the very configuration of day
`f[j] + 1`, one day after `j` was first occupied. What the walker does
inside cells `0 .. i - 2` depends only on those counts, so the replay
burns exactly the `f[i - 1] - f[j] - 1` days the original climb from that
state back to cell `i - 1` burned. This second arrival makes the count of
`i - 1` even, and the following day the walker steps into cell `i`.
Adding the pieces:

`f[i] = 2 * f[i - 1] - f[j] + 2`, taken modulo `10^9 + 7` (with one final
reduction keeping the difference non-negative).

A self-jump — `j = i - 1` — needs no special case: the formula collapses
to `f[i - 1] + 2`, which is exactly one visit, one bounce within the cell,
one step right. The anchor is `f[0] = 0`, since cell 0 is occupied on day 0.

Concretely, for `nextVisit = [0,0,1,2]`: `f[1] = 2·0 - 0 + 2 = 2` (the
walker needs the two passes over cell 0 before stepping into cell 1 on day
2), `f[2] = 2·2 - f[0] + 2 = 6` (cell 1's first occupation bounces to
cell 0, replaying days 1–2 before returning), and
`f[3] = 2·6 - f[1] + 2 = 12` — the jump from cell 2 to cell 1 replays the
segment between their first occupations, matching the walk shown in the
statement.

**Complexity:** `O(n)` time, `O(n)` space.
