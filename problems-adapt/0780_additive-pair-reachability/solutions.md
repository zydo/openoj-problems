# Solutions — Additive Pair Reachability

## Reverse Euclidean Reduction

Forward exploration branches, but the previous pair is determined by which
goal coordinate is larger. Reverse the operations by reducing the larger
coordinate modulo the smaller one. This combines all consecutive
subtractions that must occur before their ordering changes.

Continue while both goal coordinates remain at least their corresponding
start coordinates. If `goalA == startA`, only the second coordinate can still
be reduced, so reachability requires `goalB - startB` to be a nonnegative
multiple of `startA`. Apply the symmetric test when `goalB == startB`.

If a reduction takes either coordinate below its start without meeting a
terminal condition, forward operations cannot recover it because they only
increase coordinates.

**Complexity:** `O(log(max(goalA, goalB)))` time and `O(1)` space.
