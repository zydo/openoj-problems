# Solutions — Minimum Pairing Distance

## Bitmask DP over Claimed Anchors

What is being searched for is a one-to-one tying of the shorter list into the
longer one, cheapest by summed Manhattan distance. The ceiling of ten anchors is
the hint that carries the algorithm: a subset of ten things is a ten-bit integer,
so the whole subset lattice can be walked directly.

Fix the order in which the points are tied — the given order will do, since
reordering the points cannot change the set of achievable totals. Then a
half-finished tying is described entirely by the set of anchors already claimed:
the number of bits set says how many points have been handled, so no separate
position counter is needed. Write best[mask] for the cheapest total that ties the
leading popcount(mask) points to exactly the anchors of mask.

Masks are swept in increasing numeric order, which is a legal topological order
because turning a bit on always produces a larger integer. Unreachable masks are
skipped. From a reachable mask that has tied k < n points, every free anchor b is
tried, relaxing best[mask | 1 << b] by best[mask] plus the distance from point k
to anchor b. A mask whose bit count has reached n is a complete answer and is
folded into the running minimum instead of being expanded — which is exactly how
surplus anchors take care of themselves, since masks with too many bits are never
built. The distance table is computed once before the sweep so the inner loop is
only arithmetic and lookups.

The saving is large: with n = m = 10 the brute force weighs 10! ≈ 3.6 million
tyings, while the sweep does about 2^10 · 10 ≈ 10 thousand relaxations.

Example 2 shows why a greedy rule fails and the sweep does not. With points
[[0,0],[0,3]] and anchors [[0,2],[0,4]] the distance table reads 2 and 4 for the
first point, 1 and 1 for the second. Grabbing the globally shortest tie first
takes the second point to the first anchor and strands the first point with a
tie of 4. The sweep instead builds both complete masks and reports 3.

**Complexity:** `O(2^m · (m + n))` time and `O(2^m)` space, with m the number of
anchors.
