# Solutions — Growing Interval Union

## Disjoint stored ranges with a running covered total

The union only grows, so the natural store is the union itself: an ordered
list of pairwise-disjoint ranges. `size` never walks it — the object
carries `covered`, the running count of integers in the union, and each
mutation adjusts it by exactly what it removes and re-inserts.

Every `add` must restore disjointness. In a disjoint family ordered by
start the ends come out ordered as well, and that pins the victims down:
a range meeting `[left, right]` has start `<= right` and end `>= left`,
and each condition cuts a contiguous stretch — one prefix of the family
by start, a suffix of that prefix by end. Two binary searches bracket the
run; the run together with the newcomer is replaced by their hull, with
`covered` corrected by subtracting each swallowed range's size and adding
the hull's. Swallowed ranges never return, so total swallowing over the
run is bounded by the number of adds — the follow-up's amortization.

The Python canonical solution keeps `starts` and `ends` as parallel lists
so both boundary searches are plain `bisect` calls over integers, splicing
by slice deletion. The Java one uses a `TreeMap` keyed by start
(`floorEntry` walks the overlapping run from the greatest start downward)
and accumulates coverage in a `long`. Both implement the same algorithm.

**Complexity:** `O(log n)` plus the number of ranges merged per `add`,
`O(1)` per `size`, amortized `O(log n)` per add overall; `O(n)` space.
