# Enumerate Full Binary Trees

## Description

A full binary tree gives every node either zero children or exactly two
children. Given `n`, return every full binary-tree shape containing exactly
`n` nodes. Each output node has value `0`; trees are represented by their
level-order value lists, with `null` marking absent children.

List the trees in this required order: try possible left-subtree sizes in
ascending order (`1`, `3`, `5`, ...). For each size, combine each left shape
in its established order with every eligible right shape in its established
order, with the left shape varying more slowly.

No full binary tree has an even node count, so return an empty list when `n`
is even.

### Example 1

![diagram](figures/894-1.svg)

```text
Input: n = 7
Output: [[0,0,0,null,null,0,0,null,null,0,0],[0,0,0,null,null,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,null,null,null,null,0,0],[0,0,0,0,0,null,null,0,0]]
Explanation: There are five shapes with seven nodes. The specified split and
pairing order determines the order of these five returned trees.
```

### Example 2

```text
Input: n = 5
Output: [[0,0,0,null,null,0,0],[0,0,0,0,0]]
Explanation: One shape places a three-node full tree on the right of the
root, while the other places it on the left.
```

### Constraints

- `1 <= n <= 20`
