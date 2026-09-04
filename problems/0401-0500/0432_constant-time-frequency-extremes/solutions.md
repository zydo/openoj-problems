# Solutions — Constant-Time Frequency Extremes

## Ordered Count Buckets

Keep one bucket for every count currently in use. Buckets form a doubly linked
list in increasing count order, and each bucket owns a linked collection of
the keys at that count. A hash map sends a key directly to its key node and
therefore to its bucket.

Increasing or decreasing changes a count by exactly one. The destination is
thus either the neighboring bucket or a new bucket inserted at that exact
position. Move the key node, then unlink its old bucket if it became empty.
Dropping from count one removes the key entirely.

Sentinels at both ends make insertion and deletion uniform. The first live
bucket contains a lowest-frequency key and the last live bucket contains a
highest-frequency key, so both queries need only one pointer traversal. With
no live bucket, both queries return the empty string.

**Complexity:** `O(1)` average time per operation and `O(n)` space for `n`
stored keys.
