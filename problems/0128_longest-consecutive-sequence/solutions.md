# Solutions — Longest Consecutive Sequence

## Sequence-Start Walking in a Hash Set

Dump all numbers into a hash set, which collapses duplicates and makes membership an O(1) test. A number can be the start of a consecutive run only when `value - 1` is absent from the set — every maximal run has exactly one such start — so walking upward from each start (value, value + 1, value + 2, ...) measures that run's full length without sorting anything.

The guard `value - 1 not in values` is what makes the nested loop linear. The inner walk runs only from true sequence starts, so each member of each run is stepped over once inside some walk and inspected once more by the outer loop: every element is touched at most twice overall, despite the algorithm's appearance.

An empty array leaves the set empty and returns 0. Duplicates cannot inflate any count because the set keeps one copy, and negative values intermix freely since only plus-or-minus-one arithmetic is involved.

**Complexity:** `O(n)` time, `O(n)` space.
