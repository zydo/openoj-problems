# Solutions — Nonoverlapping Reservation Book

## Sorted Reservations with Binary-Search Insertion

Store accepted starts in sorted order and keep their ends in a parallel
array. Binary search finds the last accepted slot whose start is no greater
than the candidate's start. This identifies the candidate's insertion
position and its two possible conflicting neighbors.

The preceding slot conflicts only if its end is greater than the candidate's
start. The following slot conflicts only if its start is smaller than the
candidate's end. These strict comparisons allow half-open slots to touch at
an endpoint.

If either comparison finds a conflict, return `false` without modifying the
arrays. Otherwise insert both candidate boundaries at the discovered
position, preserving the ordering invariant.

Python uses `bisect_right` for the neighbor search; Java implements the same
upper-bound search directly.

**Complexity:** `O(log n)` search plus `O(n)` insertion for each accepted
request, with `O(n)` space for `n` reservations.
