# N-ary Tree Serializer

## Description

An N-ary tree is a rooted tree in which each node has at most N children.
Design a serialization that converts such a tree into a single string from
which the original tree could be rebuilt.

A serializer is free to invent its own format. This judge pins one
deterministic format so answers can be compared exactly: the standard
level-order encoding. The string is built as follows:

- Start with the root's value, then a `null` marker that closes the root's
  children group.
- Visit nodes in level order. For each node, append the values of its
  children in order, then one `null` marker that closes that node's
  children group.
- When no nodes remain, remove trailing `null` markers.
- Wrap the whole list in square brackets and join the pieces with single
  commas.

For example, a leaf-only root `[5]` serializes as `"[5]"`, and the tree
`[1,null,2,3,null,4]` serializes as `"[1,null,2,3,null,4,null]"`.

Return the serialized string for the given tree root.

### Example 1

```text
Input: root = [1,null,2,3,null,4,null,5]
Output: "[1,null,2,3,null,4,null,5]"
Explanation: Node 2 has child 4 and node 3 has child 5, each group closed
by a null; the trailing group-closing nulls are trimmed.
```

### Example 2

```text
Input: root = [10,null,20,30,null,40]
Output: "[10,null,20,30,null,40]"
Explanation: Root 10 has children 20 and 30, and node 20 has child 40.
```

### Example 3

```text
Input: root = [7]
Output: "[7]"
```

### Constraints

- The number of nodes is in the range `[0, 10⁴]`.
- `0 <= Node.val <= 10⁴`
- The height of the tree is at most `1000`.
- The serializer must be stateless — no class, global, or static storage.
