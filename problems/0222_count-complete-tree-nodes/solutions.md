# Solutions — Count Complete Tree Nodes

## Height-Probe Recursion

A complete binary tree is only ragged at the bottom: every level except possibly the last is full. That structure makes an entire subtree countable in closed form — a subtree whose leftmost path and rightmost path from the root have the same depth `d` is a perfect tree holding exactly `2^d - 1` nodes, with no per-node traversal needed.

The algorithm probes both spine depths from the current root (an iterative walk down `left` or `right` pointers). Equal depths mean the subtree is perfect, so the count is returned directly as `(1 << depth) - 1`. Unequal depths mean the last level breaks off somewhere inside, and the count falls back to `1 + count(left) + count(right)`, recursing into both children.

The key property keeping this sublinear is that whenever the heights differ, at least one of the two child subtrees must itself be perfect (the missing bottom nodes of a complete tree are all packed against the right side, so one child's last level is entirely present or entirely absent). Hence at each recursion level only one child spawns further work, the recursion is at most `log n` levels deep, and each level spends `O(log n)` on its two depth probes. An empty root returns 0 as the base case.

**Complexity:** `O(log^2 n)` time, `O(log n)` space.
