# Solutions — Fewest Points Hitting Every Range Twice

## Greedy by Increasing Right Endpoint

Sort ranges by ascending end, breaking equal ends by descending start. Build
the chosen point set in non-decreasing order. At each range `[start, end]`,
only the final two chosen points can determine whether it is already hit
twice.

If both final points are at least `start`, add nothing. If only the last point
is inside, append `end`. If neither is inside, append `end - 1` and `end`.
These are the latest possible points that satisfy the current range.

The greedy choice is safe because all unprocessed ranges end no earlier than
the current one. Replacing any newly required point with a later point inside
the current range cannot reduce its usefulness to those later ranges. Thus an
optimal solution can always make the same additions.

**Complexity:** `O(m log m)` time and `O(m)` space for `m` ranges.
