# Solutions — Size Of A Complete Tree

Two answers to the same question at opposite ends of the effort scale. One
refuses to look at what arithmetic can count for it: probe the two spines of
a subtree, and a perfect shape is tallied in closed form, so the ragged bottom
level is the only part ever traversed. The other is the floor beneath — walk
every node once and add one per visit, spending no thought on the shape at
all.

## Height Probe Recursion

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

Why this stays cheap: at any node whose spines disagree, the raggedness of
the bottom level must fall entirely inside one child — a complete tree's
missing nodes sit against the right edge, so one child's last level is either
wholly present or wholly absent, making that child perfect and resolvable in
closed form. Only the other child recurses. The recursion is therefore at most
`log n` deep, and each level pays `O(log n)` for its two spine walks. An empty
root answers 0 without either walk.

**Complexity:** `O(log^2 n)` time, `O(log n)` space.

## Full Traversal

The honest baseline: a complete tree is still a tree, and counting a tree's
nodes needs no property beyond connectivity. Walk it and add one per node
visited; when the walk ends, the tally is the answer. Nothing here reads the
completeness — the same code counts a scarecrow of a tree — and that
indifference is exactly what makes it hard to get wrong.

The walk is iterative, so no language's call stack is spent. It follows the
classic two-gear pattern: an inner loop runs down a left spine, counting and
stacking each node as it descends, and when the spine bottoms out the outer
gear pops the most recent unturned node and takes its right link — which is
the entrance to the next left spine. Every node is pushed exactly once (on
the way into its subtree) and popped exactly once (on the way out), so the
count is simply the number of pushes. Example 1's tree: the descent counts
7, 4, 2 in one go, the pop at 2 leads to nothing, and the right turns pick
up 8, then 9, 5 — six in all. An empty root never enters the loop.

The stack never holds more than one node per level — on a complete tree of
`n` nodes that is `O(log n)` — but the visits are the whole tree, `n` of
them. That is the trade the two methods embody: the traversal is linear in
what it examines, the probe method is polylogarithmic because the shape
guarantee lets it examine almost nothing.

**Complexity:** `O(n)` time, `O(log n)` space.
