# Solutions — Any Repeated Value

Two ways of catching the same collision. The hash set keeps a running
memory of every value that has gone by and stops the instant one shows up
again; the sort gives up on memory entirely and instead rearranges the
array until equal values are forced to stand next to each other, where a
neighbour-to-neighbour scan catches them — linear work with a hash table
traded for log-linear work with comparisons alone.

## Hash Set

Answering "does a value occur twice?" takes nothing more than recollection
of what has already gone by. A left-to-right sweep holds every visited
value in a hash set and tests each arriving element for membership _before_
storing it — the first time the test says yes, that element is a value's
second copy, and the sweep can stop and return true right there.

Testing first and inserting second is what keeps the verdict honest: a
value is never flagged on its own first appearance, only on the repeat. A
clean finish means every element was new when stored, so the array holds
only distinct values and false is right. With average-constant set
operations the pass stays linear across the whole 10⁵-element range.

The early exit makes the favorable case — a repeat near the front —
inspect a handful of elements, while the unfavorable end stores the whole
array before it can certify that no two match.

**Complexity:** `O(n)` time, `O(n)` space.

## Sort Scan

Duplicates hide only because equal values sit far apart. Sorting the
array dissolves that obstacle: it draws equal values together, so the
question "does any value occur twice?" collapses into "do any two
neighbours match?" — a question n-1 comparisons can answer, each looking
one gap to the left.

The sweep itself is a plain scan over a sorted copy. A value's second
copy has nowhere to stand except directly beside its first, so the first
equal neighbour is proof of a repeat, and a clean finish — every gap
holding two different values — is proof that all of them were distinct.
On `[8,3,-1,3]`, sorting yields `[-1,3,3,8]` and the matching `3,3` pair
surfaces immediately.

What the sort costs is the early exit the set enjoys: even when a repeat
sits at the very front of the input, the whole array is sorted before a
single comparison happens. In exchange the scan needs no hashing at all —
comparisons alone do the work, and the only auxiliary memory is the sorted
copy itself. (The Rust port takes the array by value and sorts it in
place, so for it the extra memory is none.)

**Complexity:** `O(n log n)` time, `O(n)` space for the sorted copy.
