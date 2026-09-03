# Every Node's Right-Hand Neighbor

## Description

You are given the `root` of a perfect binary tree: every interior node has
exactly two children and every leaf sits on the same level. Each node
carries, besides its value and its two child pointers, one spare `next`
slot. Your job is to fill that slot in everywhere: a node's `next` should
name its immediate neighbor on the same level, the node just to its right.
The rightmost node of every level has no such neighbor, so its `next`
stays empty.

Every `next` slot begins as empty. Once the wiring is done, following
`next` links from any level's first node walks that entire level left to
right.

The judge reads the tree back through those `next` links: the returned
value is the level-by-level sequence traced from the root, with a single
`null` separator between adjacent levels and nothing after the last one.

### Example 1

![diagram](figures/116-1.svg)

```text
Input: root = [1,2,3,4,5,6,7]
Output: [1,null,2,3,null,4,5,6,7]
Explanation: Level by level, each node now points at the node on its
right: 2 points at 3, 4 points at 5, 5 points at 6, 6 points at 7, while
1, 3, and 7 close their levels and keep their `next` slots empty.
```

### Example 2

```text
Input: root = [5,9,13]
Output: [5,null,9,13]
Explanation: One interior level exists, and its two nodes get linked:
9's `next` names 13. The root and 13 close their levels.
```

### Example 3

```text
Input: root = [10,4,16,2,8,12,20]
Output: [10,null,4,16,null,2,8,12,20]
Explanation: Both interior levels end up threaded — 4 points at 16, then
2 points at 8, 8 points at 12, and 12 points at 20 — so reading any level
is just a `next` walk.
```

### Constraints

- The tree holds between `0` and `2¹² − 1` nodes.
- `-1000 <= Node.val <= 1000`

### Follow-up

- Only constant extra space is allowed.
- A recursive solution is acceptable — implicit stack space does not
  count against the constant-space requirement.

## Hints

### Hint 1

Perfection is the whole trick. Because every parent has both children,
the two children of one parent are already neighbors, and the left child
of a parent sits beside the right child of the very next parent in the
level above. So an already-threaded level doubles as a linked list that
lets you wire the level below it — no queue, no depth-first bookkeeping.
