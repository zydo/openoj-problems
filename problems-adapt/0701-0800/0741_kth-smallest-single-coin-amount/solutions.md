# Solutions — Kth Smallest Single-Coin Amount

## Binary search on the answer with inclusion-exclusion

Reachable amounts form the union of the multiples of each denomination, so
"how many reachable amounts are at most x" is answered by inclusion–exclusion
over the denominations: every non-empty subset S contributes the multiples of
lcm(S), added for odd |S| and subtracted for even |S|. That count never
decreases as x grows, which makes the wanted amount the least x whose count
reaches k — a binary search over `[1, k * min(coins)]`, since the k-th
multiple of the smallest denomination is already reachable.

`count_le` enumerates the `2^m` subset masks, growing each lcm one gcd step at
a time and adding `floor(x / l)` with the sign of the subset's parity. Because
fifteen denominations push an lcm far past any useful range almost
immediately, the inner loop bails out the moment the partial lcm exceeds x —
such a subset would contribute `floor(x / l) = 0` anyway — which keeps the
arithmetic small and exact. Overlap between denominations needs no separate
bookkeeping: the alternating signs count an amount reachable through several
denominations exactly once.

The binary search settles on the smallest x whose count reaches k, which is
precisely the element of rank k in the sorted, deduplicated union — in Example
1, the amount 20 appears among the multiples of 4 and of 10 alike, yet the
counting hands it a single rank, so the search lands there for k = 6.

**Complexity:** `O(2^m · m · log(k · min(coins)))` time, `O(m)` space.
