# Level-Order Tree Inserter

## Description

A complete binary tree fills every level except possibly the last, and the
last level's nodes sit as far left as possible. Build an inserter that keeps
appending nodes to such a tree without ever breaking that shape.

Implement the `LevelOrderTreeInserter` class:

- `LevelOrderTreeInserter(TreeNode root)` initializes the inserter with the
  root of a complete binary tree.
- `int insert(int v)` attaches a new `TreeNode` whose value is `v` in the
  leftmost open position, so the tree remains complete, and returns the value
  of the new node's parent.
- `TreeNode treeRoot()` returns the root of the tree.

### Example 1

```text
Input:
["LevelOrderTreeInserter", "insert", "insert", "treeRoot"]
[[[1, 2]], [3], [4], []]
Output: [null, 1, 2, [1, 2, 3, 4]]
Explanation: The initial tree is rooted at 1 with a single left child 2.
Inserting 3 places it as 2's left child (parent 1 is returned). Inserting 4
then fills 2's right slot (parent 2 is returned). Level order now reads
[1, 2, 3, 4].
```

### Constraints

- The tree has between `1` and `1000` nodes.
- `0 <= Node.val <= 5000`, and `root` is a complete binary tree.
- `0 <= v <= 5000`
- At most `10⁴` calls are made to `insert` and `treeRoot`.
