# Solutions — Count Three-Block Subsequences

## Three-Counter Linear DP

A three-block subsequence is assembled stage by stage — a block of `0`s, then
a block of `1`s, then a block of `2`s — so track, for each prefix of `nums`,
three counts modulo `10⁹ + 7`: `f0` for non-empty all-zero subsequences, `f1`
for those that have zeros followed by at least one one, and `f2` for finished
ones. Scanning one element updates exactly one counter, and each finished
subsequence is reached by exactly one sequence of choices, so `f2` after the
last element is the answer.

Every transition is a doubling plus an inflow. Seeing a `0`, each existing
all-zero subsequence either swallows it or skips it, and the lone element
starts a new one: `f0 = 2·f0 + 1`. Seeing a `1`, the zeros-then-ones count
doubles the same way, and appending this `1` to any of the `f0` all-zero
subsequences promotes them — the block of `1`s is then guaranteed non-empty.
Seeing a `2` does the same one stage later: `f2 = 2·f2 + f1`. Values that
arrive too early are harmless: a leading `1` multiplies `f1` by two and adds
`f0 = 0`, contributing nothing, which is exactly why `[1,2,0,1,2]` yields 1 —
only the trailing `0`, `1`, `2` in order can complete the shape.

Runs of equal values need no separate handling — doubling alone covers them,
since each fresh copy extends or is skipped by every subsequence already
counted. In `[0,0,1,2,2]` the two leading zeros take `f0` from 0 to 1 to 3,
the `1` sets `f1 = 3`, and the two trailing twos finish at `3 → 3·2 + 3 = 9`,
matching the count taken directly from the choices of indices. The counts
grow exponentially in reality, so the modulus is applied at every step.

**Complexity:** `O(n)` time, `O(1)` space.
