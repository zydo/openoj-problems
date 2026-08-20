# Solutions — Encode and Decode a Tree

## Breadth-First Encoding With Gap Markers

Whatever text you emit, the tree is recoverable only from a rendering that
accounts for *absent* children, not just present ones. The encoding chosen
here gives every child slot of every real node one token — its value, or
`#` when the slot is empty — and skips nothing else: a marker has no
children, so it opens no further slots. That is why even a trimmed token
sequence determines one tree. Since the judge checks only that the decode
of the encode reproduces the original tree, this whole format is a free
choice; preorder-with-markers or a bracketed layout would serve as well.

`serialize` runs a breadth-first walk whose frontier deliberately includes
empty slots. Each real node emits its value and pushes both of its child
slots; each empty slot emits `#` and pushes nothing. Once the walk ends, the
run of markers that accrued at the tail is dropped — they described slots
that would have led nowhere. For the Example 1 tree the string is
`4,2,7,#,3,6,9`: the `#` is the missing left child of `2`, and `3` rides in
the right slot. The empty tree encodes as the empty string.

`deserialize` mirrors the walk. The string splits on commas; a queue of
nodes still owing children pulls tokens off the front two at a time, and
each non-marker token becomes a child that joins the queue in turn. One
node, `n` tokens, one pass — no recursion anywhere, so the deepest legal
chain (`10⁴` nodes) is as safe as a shallow bushy tree.

**Complexity:** `O(n)` time and `O(n)` space per direction for `n` nodes.
