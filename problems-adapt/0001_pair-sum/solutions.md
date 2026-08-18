# Solutions — Pair Sum

## Hash map, one pass

Fixing one member of the pair determines the other: if the value at the current
position is `value`, its partner must be `target - value`. That reframes the
search — instead of trying every pair, we ask a single question at each
position, "has the required partner already appeared, and where?" A hash map
keyed by value answers it in expected constant time, so the quadratic scan
collapses to one sweep.

The code walks `nums` with `enumerate`. At each position it computes the
complement and looks it up in `seen` *before* recording the current value. That
order is what enforces the no-self-pairing rule: the current position is not in
the map yet when its own complement is checked, so it cannot match itself, and
the two positions returned are necessarily different.

The moment a complement is found the method returns `[seen[complement], index]`
— the earlier position first. If the sweep ends with no match it returns an
empty list, which the statement's uniqueness guarantee makes unreachable.
Repeated values need no special handling: for `nums = [9, 2, 9, 17]` and
`target = 18`, the first nine is recorded at position 0, and the second nine
finds it there.

**Complexity:** `O(n)` time, `O(n)` space.
