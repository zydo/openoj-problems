# Solutions — Top-k Sums Below Each Key

## One ascending sweep with a capped min-heap

Every query's pool is "all cards with strictly smaller keys", and those
pools nest: sort the cards by key, and by the time the sweep arrives at a
key, every smaller key's value has already been offered to the pool. So one
sorted pass replaces `n` independent searches — each query's answer is just
the state of the pool at the moment its key comes up.

The pool itself is a min-heap holding at most `k` values, alongside the sum
of whatever it holds. A newcomer fills an empty slot (sum grows by the
value), evicts the current minimum when it beats it (sum adjusts by the
difference), or is dropped when it loses — after which the heap is the top
`k` of everything offered so far and the running sum is exactly what the
query wants to read.

Ties are the one ordering trap, since the pool condition is strict: cards
sharing a key must not see each other. The sweep therefore works in blocks
of equal keys — first every card in the block reads the pool's current sum
as its answer, and only then do the block's own values enter. Example 2's
all-equal array is the degenerate block: the pool stays empty throughout
and every answer is 0.

![The ascending sweep over nums1 = [4,1,3,5,2] in key blocks: the capped pool and its sum when each block's answers are read, with one ignored newcomer and two evictions.](figures/solution-topk-heap.svg)

Example 1's picture shows all three fates of a newcomer: the values 10 and
15 fill the two slots, the late 5 loses to the minimum and is dropped, and
30 then 45 evict the minimum in turn, ending with the pool [30, 45]. When
fewer than `k` cards qualify, as at Example 3's key-3 card, the heap simply
holds them all and the sum includes every one.

**Complexity:** `O(n log n)` time, `O(n)` space.
