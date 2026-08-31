# Longest Constant-Value Path

## Description

You are given the `root` of a binary tree. Find the length of the
longest path along which every node holds the same value. The path may
start and end anywhere in the tree — it does not need to pass through
`root` — but it must be a connected chain of parent-child edges.

Report the path's length as the number of edges it crosses, not the
number of nodes on it.

### Example 1

![diagram](figures/687-1.svg)

```text
Input: root = [5,4,5,1,1,null,5]
Output: 2
Explanation: The two nodes valued 5 down the right side, together with
the root, form a two-edge chain of matching value.
```

### Example 2

![diagram](figures/687-2.svg)

```text
Input: root = [1,4,5,4,4,null,5]
Output: 2
Explanation: The root's left child (value 4) and its own two children
(also value 4) form a two-edge bend, the longest run of matching
values in the tree.
```

### Constraints

- The tree holds between `0` and `10⁴` nodes.
- Every node value satisfies `-1000 <= Node.val <= 1000`.
- The tree's depth never exceeds `1000`.
