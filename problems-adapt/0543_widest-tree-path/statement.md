# Widest Tree Path

## Description

You are given the `root` of a binary tree. Any two of its nodes are joined
by exactly one path, and the length of that path is the number of edges on
it.

Return the length of the longest path between any two nodes of the tree.
The path does not have to pass through the root.

### Example 1

```text
Input: root = [8,6,9,0,7]
Output: 3
Explanation: Three edges separate 0 from 9 — the path 0, 6, 8, 9. The
twin path 7, 6, 8, 9 is equally long.
```

![The tree [8,6,9,0,7] with the path 0-6-8-9 highlighted.](figures/example-1.svg)

### Example 2

```text
Input: root = [0,-5]
Output: 1
Explanation: One edge joins the two nodes, so the longest path has length
1.
```

### Example 3

```text
Input: root = [6]
Output: 0
Explanation: A lone node has no edges, and a path from it to itself has
length 0.
```

### Constraints

- The number of nodes in the tree is in the range `[1, 10⁴]`.
- `-100 <= Node.val <= 100`

## Hints

### Hint 1

A longest path does not branch: somewhere along it sits a highest node,
with the path descending from there into two different directions.

### Hint 2

At that turning node the path length is the depth of the left side below
it plus the depth of the right side below it, both counted in edges.

### Hint 3

One post-order traversal can measure both: each call returns the depth of
the subtree it finishes, and every node's left-plus-right sum is compared
against the best seen so far.

### Hint 4

The turning node can sit far below the root — the two deepest branches of
the whole tree may meet at some small internal node. Do not stop at the
root's own sum.
