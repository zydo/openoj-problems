# Solutions — Implement Trie (Prefix Tree)

## Fixed-Array Trie

A trie stores words as root-to-node paths: each character of a word selects one child slot of the current node, so words that share a prefix share those nodes and that prefix is stored exactly once. The `Trie` class keeps one node type with two fields — an array of 26 child references indexed by `c - 'a'`, and a boolean `end` flag marking that a complete word terminates at this node.

All three operations are the same walk. `insert` follows the path character by character, allocating a node the first time a slot is empty, and sets `end` on the final node. `search` follows the path without allocating and answers `node != null && node.end`; `startsWith` answers only `node != null`. That flag is the entire difference between the two queries — a prefix that was never inserted as a whole word leads to a live node without the flag, which is why `search("app")` is false while `startsWith("app")` is true after inserting `"apple"`.

The fixed 26-slot array beats a hash map per step here: indexing is a subtraction and an array access with no hashing, at the cost of `26 * pointers` bytes per node. Walking stops the instant a slot is empty, so a mismatching query costs only the length of the shared prefix.

**Complexity:** `O(L)` time per operation for a word or prefix of length `L`, `O(total characters * 26)` space in the worst case.
