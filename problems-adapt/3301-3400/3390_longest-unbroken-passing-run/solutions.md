# Solutions — Longest Unbroken Passing Run

## Islands of consecutive successes, sized per club

A club's pass history — every pass whose `from_player` sits on the
club, joined to the receiver's club and marked successful or
intercepted — is one stream ordered by the clock (with `from_player`,
`to_player` as a deterministic tiebreak). Within that stream the
successful passes form islands separated by failures, and a windowed
running count of failures, `SUM(ok = 0) OVER (PARTITION BY club ORDER
BY ... ROWS UNBOUNDED PRECEDING)`, gives every success the number of
failures suffered so far: successes between the same pair of failures
share the count, so it keys the islands exactly. `COUNT(*) OVER
(PARTITION BY club, that key)` then sizes each island — the run length
ending at each success.

The outer query keeps the squad list in charge: `roster` LEFT JOINed to
those sized rows and `MAX(...)` per club picks the longest run, with
`COALESCE` turning the empty join of a never-successful club into `0`.
The result is one row per listed club, ordered by name — the row the
statement's comparison expects, interception passes themselves scoring
for nobody while resetting only the passer's own run.

**Complexity:** `O(P log P)` time, `O(P)` space — `P` passes, sorted
once by the window machinery.
