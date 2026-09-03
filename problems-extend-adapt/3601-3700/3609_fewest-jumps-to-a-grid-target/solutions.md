# Solutions — Fewest Jumps To A Grid Target

Every jump strictly increases the maximum of the two coordinates, so to
decide how a point was reached we can look at the jump backwards: with
`x > y` the last jump must have raised `x` (raising `y` would have pushed
`y` to at least `x`, contradicting `x > y`). The backward predecessor is
therefore unique, and the fewest number of forward jumps equals the length
of this forced backward chain.

## Work backwards, undoing one forced jump at a time

From `(x, y)` with `x > y`, the last jump either doubled `x` (predecessor
`x / 2`, valid only when `x` is even and `x >= 2y`) or added `y` to `x`
(predecessor `x - y`, valid only when `x < 2y`). The code checks which
regime holds and applies that single step, counting it. When the two
coordinates are equal and the source is not reached, the point can only
have been reached from an axis — `(0, x)` or `(x, 0)` — so the algorithm
steps onto the axis the source lies on and keeps undoing from there.

The chain is the only possible reverse of a valid path, so its length is
the answer; if the chain dips below the source, meets an odd coordinate it
must halve, or hits equal coordinates whose source lies on neither axis,
no path exists and `fewestJumps` returns `-1`. Example 1's chain runs
`(10, 6) → (4, 6) → (4, 2) → (2, 2)`: three steps matching the forward
route `(2, 2) → (4, 2) → (4, 6) → (10, 6)`.

**Complexity:** `O(log(max(tx, ty)))` time, `O(1)` space.
