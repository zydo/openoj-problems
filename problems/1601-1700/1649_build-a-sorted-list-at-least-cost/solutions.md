# Solutions — Build a Sorted List at Least Cost

## Binary indexed tree

Placing a value `x` costs the lesser of two counts over everything placed
before it — the entries strictly below `x` and the entries strictly above.
Both counts shift with every placement, so what is wanted is a running
structure that counts by prefix and updates by point: a Fenwick tree keyed
by value.

Size the tree to the largest value `m` that will arrive. When `x` arrives,
`query(x - 1)` is the number of placed entries below `x`, and
`count - query(x)` is the number above (`query(x)` sweeps in equal entries,
and `count` tallies everything placed so far). The smaller of the two joins
the total, reduced modulo `10⁹ + 7` as it goes; then `update(x)` logs the
arrival and `count` advances.

Every tree operation climbs the lowbit ladder in `O(log m)`, so a full pass
over the arrivals costs one such climb pair each. Values start at 1, so
`query(x - 1)` never reaches the phantom index 0. Repeated values need no
special casing — they land in neither count, so copies of a value place for
free relative to one another. In the arrival stream `[7,2,7,1,3,6,2]`, the
second 7 pays nothing, while the 3 and the 6, both bound for the crowded
middle, pay 2 apiece.

**Complexity:** `O(n log m)` time, `O(m)` space, where `m` is the largest
arriving value.
