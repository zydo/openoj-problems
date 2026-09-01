# Solutions — Design A ScoreTable

## One map of scores, sorted on demand

The call profile settles the data-structure choice: up to a thousand calls,
a hundred distinct players at most mattering at once, and `topScores(count)` needing
the count largest scores. A plain map from player id to score makes `recordScore`
and `reset` single hash operations, and `topScores` simply sorts the current score
values — descending — and sums the first `count`. A thousand players' worth of
values sorts in microseconds, far under any limit, so the heavier ordered
structures (a sorted multiset maintained incrementally, or a bucket count of
the 1..100 score range for constant-time `topScores`) buy nothing at these bounds.

`reset` removes the entry rather than storing a zero: the statement erases
the player from the leaderboard, so a later `topScores(count)` must not see a zero
competing for a topScores slot, and `count <= current player count` stays meaningful.

Sum type note: with `1000` players capped at `100` per call, repeated
`recordScore` calls on one player can push a score to `100 * 1000 = 10⁵` and a
`topScores` sum past `10⁸` — inside 32 bits, but the method still returns a 64-bit
integer so no port ever has to think about the ceiling.

**Complexity:** `O(1)` per `recordScore`/`reset`; `O(p log p)` per `topScores` for
`p` tracked players; `O(p)` space.
