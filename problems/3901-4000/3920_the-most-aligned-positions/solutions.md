# Solutions — The Most Aligned Positions

An element at original index `i` can only end up aligned if `nums[i] <= i`,
and it then needs exactly `i - nums[i]` removals ahead of it. Elements that
can coexist as aligned form a two-coordinate chain.

## Sort candidates and query a Fenwick maximum

Discard every index with `nums[i] > i`. For two retained aligned elements,
their values must increase strictly, while their required deletion counts
must be non-decreasing. Conversely, those two conditions leave enough original
positions to retain every required element between consecutive aligned
choices.

Sort candidates by value and process equal-value elements as one group. A
Fenwick tree over deletion counts stores the longest chain ending at or below
each count; delaying group updates prevents equal values from chaining. The
largest stored length is the answer.

**Complexity:** `O(n log n)` time, `O(n)` space.
