# Solutions — Sortable Chunk Count

## Prefix maximum sweep

Because `arr` is a permutation of `0..n - 1`, the sorted target is simply
`[0, 1, ..., n - 1]`, so a chunk sitting at positions `l..r` sorts into place
exactly when it holds precisely the values `l..r` — no other values may
occupy those slots. That turns "where can I cut" into a prefix question: a
boundary after index `i` is legal iff the first `i + 1` elements are exactly
the set `{0..i}`.

Since the elements are distinct and drawn from `0..n - 1`, that set condition
collapses to one comparison: the first `i + 1` elements are `{0..i}` iff
their maximum equals `i`. One left-to-right pass with a running maximum
therefore finds every legal boundary — whenever the running max lands exactly
on the current index, the prefix is self-contained and one chunk ends there.
Cutting at every legal boundary at once is optimal, because consecutive
boundaries carve out chunks that each hold exactly their own value range, so
sorting each chunk and concatenating reproduces the sorted array; and no
partition can use any other position, so the count of legal boundaries is the
answer.

In `[3,2,1,0]` the running max is 3 from the first element and only meets
its index at the last position, so the answer is 1 — any earlier cut would
drag the value 3 into a piece that cannot sort into place, which is what
Example 1 shows. In `[1,2,0,3,5,4]` the running max reaches 2 at index 2,
then 3 lands on its own index, and 5 finally meets index 5, so the pieces
are `[1,2,0]`, `[3]`, `[5,4]` and the answer is 3. Only a counter and the
running maximum are kept, and both stay below `n`, so the narrowest integer
type is enough.

**Complexity:** `O(n)` time, `O(1)` space.
