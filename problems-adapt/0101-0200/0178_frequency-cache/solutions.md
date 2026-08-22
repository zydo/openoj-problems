# Solutions — Frequency Cache

## Count buckets on a linked list, an LRU list inside each bucket

This cache keeps two orderings alive at once: the use count decides *which
group* a key belongs to, and the use order decides *who leaves first* within
a group. The `FrequencyCache` gives each ordering its own linked structure.
The outer doubly linked list holds **count buckets in increasing count
order**, so the first real bucket is always the lowest count present. Each
bucket wraps an inner doubly linked list of its keys in use order, least
recent next to the head sentinel. A hash map from key to node completes the
picture and makes `get` a single jump.

Every use — a `get` hit, a value-replacing `put`, or a fresh insert — flows
through one `bump` routine: unlink the node from its bucket, inspect the
neighbouring bucket, and either reuse it (its count is exactly one more) or
create it in that very spot; then relink the node at the tail, the
most-recent end. A bucket that empties is unlinked at once, which is what
keeps "first bucket = lowest count" true with no scanning for the minimum.
Fresh keys always enter a count-1 bucket, created at the front when the
current first bucket already holds a higher count.

Eviction therefore reads two pointers: the first bucket, and the node after
its head sentinel — the least-used key, least recently used among equals.
The node's own `key` field tells the map which entry to forget. Example 2
walks both rules: with `{2, 4, 6}` all at one use, the put of `8` discards 2
(stalest of the tied trio), and after `4` climbs to two uses, the put of
`10` finds `6` alone at the bottom.

**Complexity:** `O(1)` average time per `get`/`put`, `O(capacity)` space.
