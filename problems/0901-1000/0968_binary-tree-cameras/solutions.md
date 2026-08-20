# Solutions — Binary Tree Cameras

## Post-Order Greedy with Three States

A camera covers its own node, its parent, and its children, so a camera on a leaf wastes one of its three coverage slots on a nonexistent child. The greedy therefore works bottom-up: the parent of any uncovered node should be the one to place a camera. A post-order DFS classifies each subtree with three states — 0 = the subtree's root is not covered, 1 = it has a camera, 2 = it is covered without a camera — and a null child reports state 2 so that leaves correctly start out uncovered and push the first camera one level up.

At each node the children's states decide everything: if either child is uncovered (0), this node must place a camera to watch it, returning 1; otherwise, if either child has a camera (1), this node is already watched, returning 2; with both children merely covered (2), the node itself is uncovered and returns 0, delegating coverage upward. Cameras thus land exactly on parents of uncovered nodes and are pushed as high as they stay useful, which is optimal because every placement forced by an uncovered child is unavoidable — skipping it would leave a node unmonitored.

![root = [0, 0, null, 0, 0]: the leaves' parent hosts the one camera that covers the whole tree.](figures/solution-camera-tree.svg)

After the traversal, the root may itself have ended in state 0, with no parent above it to help, so one final camera is added there. Each node is visited exactly once and the counter is a nonlocal updated during the DFS, so the whole computation is a single linear traversal with recursion depth bounded by the tree height `h`.

**Complexity:** `O(n)` time, `O(h)` space.
