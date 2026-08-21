# Solutions — Recency Cache

## Hash Map plus Doubly Linked Recency List

Two demands pull in different directions: find a key instantly, and maintain an
ordering in which any entry can jump to the front and the last one can be
dropped, both in constant time. No single classic container gives you both, so
`RecencyCache` runs two structures over the same entries — a **doubly linked
list** threaded through them, freshest beside the head sentinel and stalest
beside the tail sentinel, and a **hash map** from key to the node holding it.

`get` follows the map to a node, unlinks it from its two neighbours, and
relinks it at the fresh end: four pointer writes, no matter how large the cache
is. `put` on a key already present does the same move and overwrites the value.
`put` on a new key inserts a node at the fresh end, after making room if the map
has reached `capacity` — the node just before the tail sentinel is the stalest,
and the key stored *in that node* is what tells the map which entry to forget.
That is why nodes carry their own key: the list hands back a node, and the map
needs a key.

The head and tail sentinels are what keep the edges branch-free. An empty
cache, a cache holding one entry, and discarding the final entry all run the
same unlink-relink pair with no null checks on neighbours.

Both canonical solutions implement exactly this. Across the limit of
`2 * 10⁵` operations, each costing a fixed number of map lookups and pointer
writes, the workload stays far inside the time budget.

**Complexity:** `O(1)` average time per `get`/`put`, `O(capacity)` space.
