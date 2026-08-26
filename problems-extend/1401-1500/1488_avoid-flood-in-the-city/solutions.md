# Solutions

Every approach pairs a bookkeeping structure for lake state with a way to
find, when a full lake rains again, some dry day between the two rains.
The presented solution keeps unused dry days in a sorted list and spends
the first one after the previous rain; a heap of "deadline" lakes or a
union-find skip structure reaches the same asymptotics by other routes,
so the sorted-list form is the one we keep.

## Spend the Earliest Dry Day After Each Previous Rain

Record `last[lake]`, the last day it rained over that lake, and keep every
unused dry-day index in a sorted structure. On rain over an empty lake,
mark it filled. On rain over a filled lake, binary-search the smallest
dry-day index after `last[lake]`; if none exists before today, no valid
answer exists — return the empty array. Otherwise assign that dry day to
this lake (write the lake number there), remove the day from the
structure, and update `last`. Dry days never needed stay in the structure
and are answered with lake `1` at the end. Each day does one search and
one removal.

**Complexity:** `O(n log n)` time for the searches and removals, `O(n)`
space for the structures.
