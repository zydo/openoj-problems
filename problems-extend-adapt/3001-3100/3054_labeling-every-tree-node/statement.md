# Labeling Every Tree Node

## Description

Table: `Nodes`

| Column Name | Type |
| ----------- | ---- |
| node        | int  |
| parent      | int  |

`node` is the column of unique values for this table.
Each row describes one node of a tree: `node` is the node's value and
`parent` is the value of its parent. Exactly one node — the root — has
a null `parent`.

Label every node of the tree with its role. Output one of the
following for each node:

- `Root`: the node is the root.
- `Leaf`: the node has no children.
- `Inner`: the node is neither the root nor a leaf.

Return the result table ordered by node value in ascending order.

Every test case ships its own `dataset`: the statements inside it
populate `Nodes` before your query executes. The result format is in
the following examples.

### Example 1

```text
Input:
Nodes table:
+------+--------+
| node | parent |
+------+--------+
| 20   | 10     |
| 40   | 20     |
| 50   | 20     |
| 30   | 10     |
| 60   | 30     |
| 10   | null   |
+------+--------+
Output:
+------+-------+
| node | Type  |
+------+-------+
| 10   | Root  |
| 20   | Inner |
| 30   | Inner |
| 40   | Leaf  |
| 50   | Leaf  |
| 60   | Leaf  |
+------+-------+
Explanation: Node 10 is the root because its parent is null. Nodes 20
and 30 are inner nodes: each has a parent and also appears in some
other row's parent column. Nodes 40, 50, and 60 are leaves — nothing
lists them as a parent.
```

### Example 2

```text
Input:
Nodes table:
+------+--------+
| node | parent |
+------+--------+
| 5    | null   |
+------+--------+
Output:
+------+-------+
| node | Type  |
+------+-------+
| 5    | Root  |
+------+-------+
Explanation: A single-node tree has no second node, so node 5 is both
childless and parentless. The root label wins: it is reported as Root,
not Leaf.
```

Write your solution as a single `SELECT` query returning two columns —
`node` and `Type` — with one row for every node in the `Nodes` table.

## Hints

### Hint 1

A node's label rests on two facts that can be checked separately: it
is the root exactly when its own `parent` is null, and it is a leaf
exactly when no other row's `parent` names it.

### Hint 2

Both facts are tests over the same table, so one `CASE` expression
classifies every row. Order the arms carefully — a single-node tree's
root is childless too, so the root test (`WHEN parent IS NULL`) must
come above the leaf test, with `ELSE` collecting the nodes that are
neither.

### Hint 3

The leaf test hides a NULL trap: `node NOT IN (SELECT parent FROM
Nodes)` never fires, because the root's own row contributes a NULL to
the subquery and `x NOT IN (..., NULL, ...)` is unknown for every x
under three-valued logic. Filter the subquery with
`WHERE parent IS NOT NULL`, or switch to `NOT EXISTS`, which never
compares against a collected NULL.
