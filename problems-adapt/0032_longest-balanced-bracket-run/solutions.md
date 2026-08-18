# Solutions — Longest Balanced Bracket Run

## Index stack with a sentinel base

The measurement to organise the scan around is not "is this slice balanced?"
but "how far back does the balanced run ending here reach?". Answering that
needs one fact at every position: the location of the nearest wall to the left,
where a wall is a position that no balanced run may cross. A closer with
nothing left to close is such a wall, and so is the imaginary position `-1`
just off the front of the string.

A stack of indices holds this. Seed it with `-1`, then walk `s` once. Each `(`
pushes its own index, so the stack keeps the still-open brackets in order with
the current wall sitting at the bottom. Each `)` pops. If popping empties the
stack, that closer had no partner, and it is installed as the new wall by
pushing its index. Otherwise the popped index was the opener it matched, and
whatever the stack now exposes is the wall for the run ending here — its length
is `i - stack[-1]`, which the scan keeps the maximum of.

The subtlety worth stating is why runs never get split. A bracket only leaves
the stack by being matched, so once a pair closes it stops separating what lies
on either side of it. In `"(()())"` the closer at index 5 pops the opener at
index 0 and re-exposes the seeded `-1`, giving `5 - (-1) = 6` in one reading
rather than three separate measurements of two.

The degenerate inputs need no special handling. `"((("` pushes three times and
never pops, so the best length stays `0`. In `"))(()()"` the first two
characters each empty the stack and reinstall themselves as walls, which is
what confines the answer to the tail; the closers at indices 4 and 6 then
measure `4 - 2 = 2` and `6 - 2 = 4`. An empty string never enters the loop.

Each character does a constant amount of stack work, and the stack grows to at
most one entry per character when the string is all openers.

**Complexity:** `O(n)` time, `O(n)` space.
