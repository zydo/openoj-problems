# Solutions — Fewest Mismatches After Free Swaps

## Union-Find Components with Multiset Matching

The permitted trades cut the positions into groups: along a connected group of
transpositions you can park the values in any order whatsoever (transpositions
over a connected graph generate the whole symmetric group on its nodes), while
no value can ever cross into another group. The mismatch minimum therefore
splits group by group: set the values `source` holds in the group against the
values `target` wants there, and every wanted value that the group cannot
supply marks one position that stays wrong.

The implementation grows a disjoint-set forest over the positions with path
halving, joining the ends of each permitted trade. A second sweep buckets every
position under its root. For each bucket it tallies the held values with a
`Counter`, then reads the bucket's positions: when `target[i]` still has an
available count it pairs off (the count ticks down), else the answer climbs by
one. Pairing greedily in place is sound because only how many of each value
matter, never which position supplies it. In the all-trades example
`[5,5,3,1]` vs `[5,3,3,1]`, the single bucket holds two 5s and one 3 but is
asked for one 5 and two 3s — one 5 goes unpaired and the answer is 1.

Each unpaired wanted value adds exactly one, and the bucket sums give the
global minimum: no trade repairs a mismatch between groups, and inside a group
every repairable mismatch gets repaired. Singleton groups — positions named by
no trade — fall out of the same loop, reproducing the no-trade baseline of
plain position-by-position comparison.

**Complexity:** `O((n + S) α(n))` time, `O(n)` space.
