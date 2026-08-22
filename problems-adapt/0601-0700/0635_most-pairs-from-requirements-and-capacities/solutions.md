# Solutions — Most Pairs From Requirements and Capacities

## Sort and two pointers

Both lists sorted ascending, the greedy writes itself: keep offering the
smallest uncovered requirement the smallest unused capacity. Walk the sorted
lists with pointers `i` and `j` — when `requirements[i] <= capacities[j]` the
pair forms and both pointers advance; otherwise that capacity falls short of
the smallest requirement still standing, and since the requirements only
strengthen from there, the capacity is dead weight: advance `j` alone.

Why the greedy never loses a pair is an exchange argument. Take any optimal
pairing and look at the smallest requirement in play. Whatever capacity it
holds there is at least the smallest usable capacity, so re-pointing it to
that smaller capacity keeps both of its partnerships valid — the optimum can
be rewritten in the greedy's first move without shrinking. The same reasoning
buries an unusable capacity: nothing left can ever claim it.

The sweep ends when either list runs out, which handles unbalanced lengths
without a separate case. For `requirements = [3,6,8]` and
`capacities = [7,2,5,9]`, sorted capacities `[2,5,7,9]` pair as 3-5, 6-7,
8-9 — three pairs, the 2 skipped on the way.

**Complexity:** `O(n log n + m log m)` time, `O(n + m)` space.
