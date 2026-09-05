# Nearest BST Value II

## Description

You are given the `root` of a binary search tree, a floating-point
`target` value, and an integer `k`. Return the `k` values stored in the
tree that are closest to `target`. The input guarantees that exactly one
such set of `k` values exists.

Order the result by increasing distance from `target`; when two values
are equally close, list the smaller one first.

### Example 1

![diagram](figures/272-1.svg)

```text
Input: root = [4,2,5,1,3], target = 3.714286, k = 2
Output: [4,3]
```

### Example 2

```text
Input: root = [1], target = 0.000000, k = 1
Output: [1]
```

### Constraints

- The number of nodes in the tree is `n`.
- `1 <= k <= n <= 10⁴`
- `0 <= Node.val <= 10⁹`
- `-10⁹ <= target <= 10⁹`

### Follow-up

If you may assume the tree is balanced, can you answer in time better than
`O(n)`, where `n` is the total number of nodes?

## Hints

### Hint 1

Consider two helper walks: one that finds the in-order predecessor of a
node, and one that finds its in-order successor.

### Hint 2

The problem becomes much simpler if you imagine each node also holds a
pointer back to its parent.

### Hint 3

Without parent pointers, an explicit stack recording the path from the
root down to the current node serves the same purpose.

### Hint 4

Maintaining two such stacks — one advancing through predecessors, one
through successors — lets you expand outward from `target` in both
directions.
