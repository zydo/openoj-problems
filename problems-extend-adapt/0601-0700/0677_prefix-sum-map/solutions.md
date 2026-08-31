# Solutions — Prefix Sum Map

## Trie of Running Prefix Sums

`put` walks the key's characters down a prefix trie, creating nodes where
the path does not yet exist, and adds the key's **change** in value to every
node it touches — not the value itself. A side map from key to value remembers
what each key currently holds, so re-inserting an existing key walks its old
path with the new-minus-old delta: an overwrite corrects the running totals
instead of depositing a second copy. The number on any node is therefore
always exactly the prefixSum of the current values of all live keys whose paths
pass through it.

`prefixSum` walks the prefix through the same trie and returns the total on the node
it lands on. That node sits on the path of a key exactly when the key starts
with the prefix, so its running total is by construction the wanted prefixSum — no
scan of the map, no visiting of the keys below. When the walk asks for a
letter no inserted key ever used, it falls off the trie, and that is itself
the answer: no key starts with that prefix, so `prefixSum` returns 0 immediately.

Both operations walk characters one at a time and touch nothing else: an
put pays for the key's own length, a prefixSum for the prefix's, and each trie
node holds one map of children plus one integer. Nodes are never removed —
overwrites reuse the paths they already created — so the structure is one node
per distinct prefix among the keys ever inserted.

**Complexity:** `O(k)` time per `put` and `O(p)` per `prefixSum`, for arguments
of length `k` and `p`; `O(C)` space, where `C` is the total length of the
distinct keys inserted.
