# Solutions — Longest Duplicate-Free Concatenation

## Subsets over letter masks

A join is legal exactly when its letters are all distinct, so a candidate is
summarized by _which_ of the 26 letters it contains — never by their order
or grouping. That collapses every string to a 26-bit mask: two strings
coexist in a join precisely when their masks have no bit in common, and the
length of a join is the popcount of its mask. Once the masks exist, the
original strings never need to be read again.

Building the masks also does the pruning. A string with an internal repeat
(Example 2's "moon") gets a sentinel mask and is refused everywhere, since
no placement can repair a duplicate it brings by itself. The search is then
a depth-first walk over the list with a start index that only moves forward:
each call records the popcount of the mask carried so far as a candidate,
then offers every later string whose mask is disjoint from it. The forward
index enumerates every _set_ of strings exactly once rather than every
ordering — the popcount cannot tell orderings apart, so nothing is lost by
skipping them.

Sixteen strings bound the walk at `2^16` subsets before pruning, which is
why plain exhaustion is the right tool; conflicts cut most branches far
above the theoretical bound, as in Example 2 where two of three strings are
eliminated before any branching happens. The empty join seeds the answer at
0, so an input whose strings all repeat letters still returns correctly.

**Complexity:** `O(2^n · n)` time, `O(n)` space.
