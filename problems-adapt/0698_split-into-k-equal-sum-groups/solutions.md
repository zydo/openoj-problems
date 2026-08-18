# Solutions — Split Into K Equal-Sum Groups

## Bitmask Search With Memoization

The share is fixed before any searching happens: each group must carry
`total / k`. That gives two rejections that cost nothing — a total that is not
a multiple of `k`, and a single entry heavier than the share, which no group
could ever absorb. Past those, the search builds the groups in sequence. A
state is the set of entries already placed, held as a bitmask, plus `curr`, how
far the group currently being filled has got. From a state the search tries
each unplaced entry that still fits under the share; reaching the share exactly
means the group is sealed, so the search continues from the same mask with
`curr` reset to zero. A mask with every bit set means every entry found a home,
and the answer is `true`. Placing the heavy entries first — the array is sorted
downwards up front — is pure pruning: the hard placements happen while the
tree is still narrow.

A plain search re-derives the same partial deal once per ordering of the
choices that produced it, which is where the time goes. Memoizing on
`(mask, curr)` removes that. The pairing is cheaper than it looks: the sealed
groups are all exactly full, so `curr` is the sum of the placed entries reduced
modulo the share, and each mask therefore reaches the search with a single
`curr`. That caps the table at `2^n` live states, each doing at most `n`
placement attempts, with the `curr + value <= share` test discarding the rest.

At `n <= 16` the table tops out at 65,536 entries, and the promise that no
value repeats more than four times keeps duplicate-heavy arrays from stalling
the pruning. `k = 1` falls out of the same code: the share equals the total,
one group swallows everything, and the divisibility test always passes.

Take `nums = [7,3,6,2,5,4,3]` with `k = 3`:

1. The entries total 30 and `30 / 3 = 10` is the share; sorted downwards the
   entries are 7, 6, 5, 4, 3, 3, 2.
2. The first group takes 7, then 3 — `curr` lands on 10, the group seals, and
   the search recurses with `curr = 0`.
3. The second group takes 6 and 4; the third takes 5, 3 and 2. Each lands on 10
   the same way.
4. All seven bits are set, the full-mask test fires, and the answer is `true`.

**Complexity:** `O(n · 2^n)` time, `O(2^n)` space.
