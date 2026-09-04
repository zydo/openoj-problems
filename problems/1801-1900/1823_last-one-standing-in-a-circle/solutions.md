# Solutions — Last One Standing In A Circle

## Simulation with Index Arithmetic

Hold the surviving friends in a list arranged as the circle, plus an index
`idx` into it marking where the next count begins. A count of `k` clockwise
that includes the starting friend touches down at exactly
`(idx + k - 1) % len(friends)`: the `- 1` is there because the starting friend
is itself counted, and the modulo supplies the wrap — including rounds where
`k` exceeds the circle size and friends get counted repeatedly.

Removing that friend is a `pop`, and the bookkeeping needs nothing further:
the friend immediately clockwise of the removed one slides into the vacated
slot, so the unchanged `idx` already marks the start the rules demand for the
next count. After `n - 1` rounds one friend remains, and that is the winner.

![Five friends in a circle with k = 3: counting arrows land on friends 3, 1, 5 and 2 in order — each crossed out as they leave — leaving friend 4 alone in the circle as the winner. The final count wraps the two remaining friends and lands back where it started.](figures/solution-circle-count.svg)

`idx = 0` at the outset encodes the rule that the first count starts at
friend 1. With `n` capped at 500, the `O(len)` tail-shift each `pop` performs
is immaterial. (The Josephus recurrence `f(n, k) = (f(n-1, k) + k) % n` would
compute the winner in `O(n)` time and `O(1)` space, but the direct simulation
is the canonical solution here.)

**Complexity:** `O(n²)` time, `O(n)` space.
