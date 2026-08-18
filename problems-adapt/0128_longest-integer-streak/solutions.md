# Solutions — Longest Integer Streak

## Sequence-Start Walking in a Hash Set

The chains we are measuring are a property of the *set* of values, not of their
positions, and duplicates are irrelevant to them. So the first move is to pour
`nums` into a hash set: repeats collapse, and "is `x` here?" becomes a constant
time question.

With that in hand, the tempting plan — for each value, walk upward as far as
the set allows — looks quadratic, and it would be if every value started a
walk. The fix is a one-line guard. A value `v` can only be the bottom of a
maximal chain when `v - 1` is missing from the set, and every maximal chain has
exactly one such bottom. Restricting walks to those values means each chain is
traversed once in total rather than once per member, so across the whole run
each value is stepped over at most once inside a walk and inspected once by the
outer loop. Linear, despite the nesting.

Measuring is then just counting: from a chain bottom, keep incrementing while
the next value is present, and remember the largest count seen.

Nothing else needs special handling. An empty array yields an empty set and a
best of `0`. In `[-3,9,-2,-1,0,9,1]` the second `9` never survives into the set,
so it cannot inflate anything, and `9` itself is its own chain of length `1`
while `-3` opens the winning chain of `5`. Negative values are no different
from positive ones — the algorithm only ever adds or subtracts one.

**Complexity:** `O(n)` time, `O(n)` space.
