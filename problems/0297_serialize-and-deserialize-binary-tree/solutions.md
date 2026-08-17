# Solutions — Serialize and Deserialize Binary Tree

## Level-Order Codec with Explicit Null Markers

A tree encoding is only recoverable if it records where every subtree is _absent_, not just where nodes are. The level-order format does exactly that: one slot per child position of every real node, with a marker (`null` in the string form, `100001` in the array form) filling the empty positions. Children of markers never exist, so they occupy no slots — which is why the trimmed sequence still rebuilds the tree uniquely.

`serialize` first rebuilds the tree from the marker array, then walks it breadth-first with a queue that also holds nulls: each dequeued node emits its value and enqueues both children; each dequeued null emits `null` and enqueues nothing. Trimming the trailing `null` tokens produces the canonical string. `deserialize` is the exact mirror: split the string on commas, rebuild the tree by consuming tokens as child slots in queue order — a `null` token fills the slot without adding to the queue — and walk the finished tree back to the marker array with the same trailing trim. The empty tree is handled up front as the empty string / empty array.

Both directions run iteratively over an explicit queue, so the `10⁴`-node degenerate chains that would overflow a recursive encoder are plain linear passes.

**Complexity:** `O(n)` time and `O(n)` space per call for a tree of `n` nodes.
