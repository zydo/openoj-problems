# Solutions — Longest Balanced Bracket Run

Both methods organise the scan around one measurement: how far back the
balanced run ending at the current position reaches. The stack keeps that
run's boundaries on hand — still-open indices in order with a wall at the
bottom — so every closer reads its length straight off the top. The table
arrives at the same lengths by recurrence instead: each closer asks the run
ending just before it where its partner sits, and runs chain together with
no bookkeeping beyond the table itself.

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

## Suffix run-length DP

The run ending at each position has a length, and that one column of lengths
is the whole apparatus — no stack, no walls, nothing maintained alongside
the scan. Let `dp[k]` hold the length of the balanced run ending at index
`k - 1`. Entry `0` grounds the table just off the front of the string, so
even the first character has a "run before it" of length zero to consult.
An opener writes nothing: no run ends on a `(`, so its entry stays zero.

A closer at `i` starts from its predecessor. The run ending at `i - 1` has
length `dp[i]`, so the index `i - 1 - dp[i]` sits immediately to that run's
left, and its occupant decides everything. A `(` there is not a candidate
but the partner — a `(` and a `)` with nothing but balanced material between
them is exactly what being matched means — so the run ending at `i` jumps
the pair: `dp[i + 1] = i - j + 1 + dp[j]`, the pair's own two brackets with
everything they enclose, plus whatever run ends just before the opener. Any
other reading — another `)` at that index, or no index at all because the
run before the closer already starts the string — leaves the closer
unmatched and its entry at zero. The answer is the largest entry the scan
ever writes.

The chaining is where lengths accumulate. In `"(()())"` the closer at
index 2 records 2, the closer at index 4 pairs with the opener at index 3
and adds the run of 2 that ended at index 2 for 4, and the closer at
index 5 sees its predecessor's run reach back to index 1, takes index 0 as
its partner, and records `5 - 0 + 1 = 6` in one step. In `"))(()()"` the
closer at index 4 records 2 and the closer at index 6 pairs with the opener
at index 5 while the run of 2 that ended at index 4 chains on beneath it
for 4; the leading closers never interfere because the one at index 1 finds
another `)` at its deciding index. `"((("` writes nothing but zeros, and an
empty string never enters the loop.

Each position costs a subtraction and, when it closes a pair, one write and
one comparison, and the table of one entry per position plus the grounding
zero is the only storage — the matching structure is recovered from the
table rather than kept beside it.

**Complexity:** `O(n)` time, `O(n)` space.
