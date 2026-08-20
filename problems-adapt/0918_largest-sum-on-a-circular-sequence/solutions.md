# Solutions — Largest Sum on a Circular Sequence

## Simultaneous Maximum and Minimum Segments

Any valid selection either stays within the displayed array or crosses from
the end to the beginning. Kadane's algorithm gives the best selection of the
first kind.

For the second kind, consider what is not selected. A boundary-crossing
segment leaves out one ordinary contiguous segment, so its sum is the total
array sum minus the smallest ordinary segment sum. Run a minimum version of
Kadane's recurrence alongside the maximum version, then compare the ordinary
maximum with `total - minimum`.

When all values are negative, the minimum segment is the entire array and the
subtraction would represent choosing nothing. Detect this through a negative
ordinary maximum and return that maximum directly.

**Complexity:** `O(n)` time and `O(1)` auxiliary space.
