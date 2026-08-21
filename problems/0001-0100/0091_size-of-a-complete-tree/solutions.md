# Solutions — Size Of A Complete Tree

## Height-Probe Recursion

Only the bottom level of a complete tree can be short of nodes, and the
missing ones are all on the right. Everything above is full, and that regular
part is countable without looking at it: if the run of left links from a node
and the run of right links from the same node have the same length `d`, the
subtree under that node is a perfect tree, and a perfect tree of depth `d`
holds exactly `2^d - 1` nodes. Two spine walks replace a full traversal.

So the count for a node starts by walking both spines (an iterative slide down
`left` pointers, then down `right` pointers). Matching lengths return
`(1 << d) - 1` on the spot. Mismatched lengths mean the bottom level breaks
off inside this subtree, and the method falls back to
`1 + treeSize(left) + treeSize(right)` — the shape question is just asked
again one level down.

Why this stays cheap: at any node whose spines disagree, the raggedness of the
bottom level must fall entirely inside one child — a complete tree's missing
nodes sit against the right edge, so one child's last level is either wholly
present or wholly absent, making that child perfect and resolvable in closed
form. Only the other child recurses. The recursion is therefore at most
`log n` deep, and each level pays `O(log n)` for its two spine walks. An empty
root answers 0 without either walk.

**Complexity:** `O(log^2 n)` time, `O(log n)` space.
