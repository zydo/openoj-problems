# Solutions — Largest Forward Gain

## Minimum prior value

Sweep left to right while remembering the smallest value that appeared at a
strictly earlier index. Before the current element joins that running
minimum, test it against the stored value; whenever it is bigger, the
difference is a legitimate candidate whose indices satisfy `i < j` by
construction.

Only strict increases update the answer, so equal pairs never count.
Refresh the minimum after the candidate check to preserve the
earlier-index invariant, and with the answer seeded at `-1` it stays `-1`
precisely when no valid pair exists.

**Complexity:** `O(n)` time and `O(1)` space.
