# Equalize Tree Coins

## Description

Every node of a binary tree holds some number of coins, and the tree holds as
many coins as it has nodes. A single move takes one coin from a node and puts
it on a node joined to it by an edge — either downward to a child or upward to
a parent.

Given the `root` of such a tree, return the fewest moves that leave exactly one
coin on every node.

### Example 1

```text
Input: root = [1,2,0]
Output: 2
Explanation: The left child gives up a coin to the root, which passes a coin
down to the right child. Two coins each travel one edge.
```

### Example 2

```text
Input: root = [2,0,3,0,0]
Output: 7
Explanation: The right child sits on three coins, keeps one and passes two up.
The empty left branch needs three, so three coins cross the root's left edge and
two of them travel one edge further to the grandchildren: 2 + 3 + 1 + 1.
```

### Example 3

```text
Input: root = [0,1,3,null,null,1,0]
Output: 2
Explanation: The left child is already settled and never touches a coin. On the
right, one coin drops from the pile of three to the empty grandchild, and one
more rises to the root.
```

### Constraints

- The tree contains `n` nodes, with `1 <= n <= 100`.
- Each `Node.val` is between `0` and `n`.
- The values add up to `n`.

## Hints

### Hint 1

Counting individual moves is awkward because a coin may travel a long way.
Count the traffic on each edge instead: the answer is the sum over edges of the
number of coins that cross them.

### Hint 2

For any subtree, the traffic on the edge above it is forced. If the subtree
covers `s` nodes and starts with `c` coins, then `c - s` coins have to leave it
(or `s - c` have to enter), and no arrangement can do it with fewer crossings.

### Hint 3

A post-order walk returns `c - s` for each subtree — the node's own value plus
what both children returned, minus the one coin the node keeps. Add the
absolute value of each child's return to a running total as you come back up.
