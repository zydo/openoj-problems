# Solutions — Range Majority Queries

## Voting Segment Tree plus Position-List Binary Search

The quota guarantee — `2 * threshold > right - left + 1` — carries the whole
design: a qualifying value occupies strictly more than half the stretch, so
at most one answer can exist. The query therefore decomposes into proposing
that one candidate and then counting it exactly.

Proposing is Boyer-Moore voting arranged as a tree. A segment-tree node
stores `(candidate, surplus)` for its range — the survivor of pairing off
unequal neighbours — and two such pairs merge in constant time: matching
candidates pool their surpluses, mismatched ones cancel and the heavier
survives with the difference, a perfect tie leaving `(0, 0)`, harmless
because `arr[i] >= 1` makes `0` a non-value. The key invariant is that no
sequence of cancellations eliminates a strict majority, so whenever an
answer exists the fold over the `O(log n)` covering nodes returns it.

The fold's one failure mode is a stretch with no strict majority, where the
survivor is arbitrary — verification catches that. Construction also builds,
per value, the sorted list of positions where it occurs; occurrences inside
`[left, right]` are then `lowerBound(right + 1) - lowerBound(left)`, two
binary searches (`bisect_left` in Python; hand-rolled in Java, the lists
being boxed). Meeting the quota returns the candidate, otherwise nothing
qualifies and the answer is `-1` — as in `[3, 8, 3, 8]`, where the vote
surfaces some survivor but neither value occurs three times.

Randomised sampling is a legitimate alternative — draw indices in the range
and a true majority is hit more often than not — but the tree is
deterministic, which exact judging prefers, and answers every query in
`O(log² n)` worst case rather than with high probability.

**Complexity:** `O(n)` construction (`O(n log n)` in Java, boxed position
lists), `O(log n)` nodes folded per query plus `O(log n)` per binary search,
`O(n)` space.
