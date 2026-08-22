# Solutions — Equal-Mean Bipartition

## Meet-in-the-middle subset sums

Suppose a proper selection contains `count` elements. If it and its complement
have equal means, each mean equals the mean of the full array. The selected sum
must therefore be `total * count / n`. We only need to examine counts that make
this quantity integral.

There are too many subsets to enumerate directly when `n = 30`. Divide the
array near its midpoint instead. For each half, enumerate every subset and
store its sum in a set indexed by the subset's size. Neither half contains more
than 15 elements, so each enumeration has at most `2^15` masks.

For every candidate total size from `1` through `n - 1`, try each feasible
division of that size between the two halves. If a left sum is `x`, a matching
right subset must have sum `required - x`; a hash-set lookup tests that in
constant expected time. Excluding sizes zero and `n` guarantees that both
resulting groups contain at least one element.

This search is complete because every possible selection decomposes uniquely
into one subset from the left half and one from the right. Conversely, any pair
found by the lookup has both the required size and sum, so its mean equals the
full-array mean and its complement has that mean as well.

**Complexity:** `O(n · 2^(n/2))` time and `O(2^(n/2))` space.
