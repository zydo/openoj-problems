# Solutions — Serialize and Deserialize Binary Tree

## Level-Order Codec with Explicit Null Markers

A tree encoding is only recoverable if it records where every subtree is _absent_, not just where nodes are. The level-order format does exactly that: one slot per child position of every real node, with a marker (`#` here) filling the empty positions. Children of markers never exist, so they occupy no slots — which is why the trimmed sequence still rebuilds the tree uniquely. The judge never inspects the string, only that `deserialize(serialize(root))` returns the same tree, so this format is a choice rather than a requirement — preorder with markers or a parenthesised encoding would pass just as well.

`serialize` walks the tree breadth-first over a frontier that also holds absent children: each real node emits its value and contributes both child slots; each absent slot emits `#` and contributes nothing. Trimming the trailing markers shortens the string without losing recoverability. `deserialize` is the exact mirror: split on commas, then rebuild by consuming tokens as child slots in queue order — a `#` fills the slot without adding to the queue. The empty tree is handled up front as the empty string.

Both directions run iteratively over an explicit queue, so the `10⁴`-node degenerate chains that would overflow a recursive encoder are plain linear passes.

**Complexity:** `O(n)` time and `O(n)` space per call for a tree of `n` nodes.
