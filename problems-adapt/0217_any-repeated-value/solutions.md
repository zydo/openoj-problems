# Solutions — Any Repeated Value

## Hash Set Membership

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
