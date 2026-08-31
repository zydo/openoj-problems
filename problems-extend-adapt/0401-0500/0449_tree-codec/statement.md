# Tree Codec

## Description

A binary search tree must travel through storage or a network and be rebuilt
byte-for-byte. Design an encoder that turns a tree into a string and a decoder
that turns that string back into the original tree.

Implement the `TreeCodec` class:

- `TreeCodec()` creates the codec.
- `String encode(TreeNode root)` converts `root` into a compact string.
- `TreeNode decode(String data)` reconstructs the tree from `data`.

The two methods must round-trip any valid BST exactly. The encoded form is
pinned to a deterministic device: the preorder walk with explicit null
markers — each node contributes its decimal value, each absent child the
letter `x`, the pieces joined by commas. The tree `[2,1,3]` encodes as
`"2,1,x,x,3,x,x"` and the empty tree as `"x"`. Both methods are judged exactly
against this format.

### Example 1

```text
Input:
["TreeCodec", "encode", "decode"]
[[], [[5,3,7,2,4]], ["5,3,2,x,x,4,x,x,7,x,x"]]
Output: [null, "5,3,2,x,x,4,x,x,7,x,x", [5,3,7,2,4]]
Explanation: The preorder walk visits 5, then 3's subtree (2, then 4), then
7, writing an x for each absent child.
```

### Example 2

```text
Input:
["TreeCodec", "encode", "decode"]
[[], [[]], ["x"]]
Output: [null, "x", []]
Explanation: The empty tree is a single x.
```

### Constraints

- The tree holds between `0` and `10⁴` nodes.
- `0 <= Node.val <= 10⁴`
- Every input tree is a valid binary search tree.
