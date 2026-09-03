# Solutions — Strongest Beacon In Reach

Every beacon is judged independently: a beacon matters only when its
Manhattan distance `abs(xi - cx) + abs(yi - cy)` from `center` is at most
`radius`, and among those that matter the answer is the maximum signal
strength, with coordinate-lexicographic order breaking ties. No beacon
interaction exists, so nothing beyond one pass over `beacons` is needed.

## Single Scan with Lexicographic Tie-Break

Walk the beacons once, keeping the current best `[x, y]` and its signal
strength. A beacon first pays the reachability test; if its distance exceeds
`radius` it is skipped before its strength is ever consulted, which is
what keeps an out-of-range beacon with a huge strength from stealing
the answer. An in-range beacon takes over the lead only when it is
strictly better under the combined order: higher strength, or equal
strength with a lexicographically smaller coordinate — `x` first, then
`y` when `x` ties.

Because the scan compares each beacon only against the running best, the
first leader among equal-strength beacons holds the spot exactly until a
lexicographically smaller one appears, so the final `[x, y]` is the
lexicographic minimum over all beacons of maximum reachable strength. When
no beacon passes the reachability test the best stays unset and the
method returns `[-1, -1]`.

Coordinates and radius are non-negative and bounded by `10^5`, so
distances never exceed `2 * 10^5` — every value stays inside 32-bit
integers in every language, and far below the exact-integer range of a
JS `number`.

**Complexity:** `O(n)` time, `O(1)` space.
