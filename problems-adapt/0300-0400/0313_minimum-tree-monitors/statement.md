# Minimum Tree Monitors

## Description

Given the `root` of a binary tree, choose nodes on which to place monitors. A
monitor observes its own node, its parent, and its immediate children.

Return the fewest monitors needed so that every node is observed.

### Example 1

```text
Input: root = [0,0,0,null,0]
Output: 2
Explanation: One monitor can cover the lower leaf and its parent, but a second
monitor is needed to observe the node on the other side of the root.
```

### Example 2

```text
Input: root = [0,null,0,0,0]
Output: 1
Explanation: A monitor on the root's right child observes all four nodes.
```

### Constraints

- The tree contains between `1` and `1000` nodes.
- Every node has value `0`.

## Hints

### Hint 1

Process children before their parent. Only the coverage states at the child
roots are needed to decide what happens next.

### Hint 2

Represent a subtree root as unobserved, holding a monitor, or observed without
a monitor.

### Hint 3

An unobserved child forces a monitor at its parent. Otherwise, a child monitor
observes the current node; if neither condition holds, ask the parent for help.

### Hint 4

The root has no parent, so handle an unobserved root after the traversal.
