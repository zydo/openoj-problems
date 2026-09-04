# Hierarchy Node Roles

## Description

Table: `ReportingTree`

| Column Name    | Type |
| -------------- | ---- |
| node_id        | int  |
| parent_node_id | int  |

`node_id` is unique. Each row describes a node and its parent in a valid
rooted tree. The root has `parent_node_id` set to `NULL`.

Classify every node as `Root`, `Inner`, or `Leaf`:

- A root has no parent.
- A leaf has a parent but no children.
- An inner node has both a parent and at least one child.

Return `node_id` and `role` in any order.

### Example 1

```text
Input: ReportingTree
node_id  parent_node_id
10       NULL
11       10
12       10
13       11
14       11
15       12

Output:
node_id  role
10       Root
11       Inner
12       Inner
13       Leaf
14       Leaf
15       Leaf
```

Node 10 starts the tree. Nodes 11 and 12 have children, while nodes 13, 14,
and 15 do not.

Write one `SELECT` query returning `node_id` and `role`.

### Constraints

- The rows always describe one valid tree.
- The root is the only row with a null parent identifier.

## Hints

### Hint 1

A node is a leaf when no other row names it as a parent.

### Hint 2

Test for the root before testing for leaves. Exclude null parent values from
any `NOT IN` subquery to avoid SQL's null comparison behavior.
