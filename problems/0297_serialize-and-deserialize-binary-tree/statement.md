# Serialize and Deserialize Binary Tree

## Description

Serialization is the process of converting a data structure into a sequence
of symbols so that it can be stored in a file or memory buffer, or sent over
a network link, and later reconstructed faithfully. Design an algorithm to
serialize and deserialize a binary tree.

Implement the `Codec` class:

- `String serialize(int[] root)` Encodes the tree `root` into a single
  string.
- `int[] deserialize(String data)` Decodes the encoded string back into the
  tree, reported in the same array form as `serialize` receives.

The two formats this class works with are fixed so outputs are comparable:

- **Array form** (the parameter of `serialize` and the return of
  `deserialize`): the tree's level-order traversal, where the value `100001`
  marks a missing child. Children of markers are omitted and trailing
  markers are dropped. Node values lie in `[-1000, 1000]`, so the marker can
  never collide with a value. An empty tree is the empty array `[]`.
- **String form** (the return of `serialize` and the parameter of
  `deserialize`): the trimmed level-order tokens joined by single commas,
  where each token is a node value in decimal or the literal `null` for a
  missing child. The empty tree is the empty string `""`.

A correct implementation is one whose round trip preserves the tree exactly:
`deserialize(serialize(root))` equals `root` for every tree, and each method
produces exactly the canonical form described above.

### Example 1

```text
Input:
["Codec", "serialize", "deserialize"]
[[], [[1, 2, 3, 100001, 100001, 4, 5]], ["1,2,3,null,null,4,5"]]
Output: [null, "1,2,3,null,null,4,5", [1, 2, 3, 100001, 100001, 4, 5]]
Explanation:
Codec codec = new Codec();
codec.serialize([1, 2, 3, 100001, 100001, 4, 5]);
// return "1,2,3,null,null,4,5" — node 2 has no children (two null markers)
codec.deserialize("1,2,3,null,null,4,5");
// return [1, 2, 3, 100001, 100001, 4, 5] — the tree is rebuilt exactly
```

### Example 2

```text
Input:
["Codec", "serialize", "deserialize"]
[[], [[]], [""]]
Output: [null, "", []]
Explanation:
The empty tree serializes to the empty string, and the empty string
deserializes back to the empty tree.
```

### Constraints

- The number of nodes in the tree is in the range `[0, 10⁴]`.
- `-1000 <= Node.val <= 1000`.

### Follow-up

The level-order format above is breadth-first. Could you design a
depth-first encoding (for instance preorder with explicit null markers) that
also rebuilds the tree uniquely, and would its strings be shorter or longer
on sparse trees?

## Hints

### Hint 1

A tree is uniquely recoverable only if the encoding says where every subtree
is absent. The level-order array does that with marker slots: reading left
to right and keeping a queue of nodes waiting for children turns the array
back into the tree — each marker fills a slot without adding to the queue.

### Hint 2

Split the work in two: parse the string into the marker array (a plain
token split with `null` translated to the marker), then rebuild the tree
from the array with the queue walk; and conversely, walk the tree in
level order to emit tokens, pushing real children but never the markers'
nonexistent ones.

### Hint 3

Emitting level order needs the same trailing trim both ways: null markers
for the children of the last nodes pile up at the end of the sequence, and
dropping trailing nulls (or markers) is what makes the canonical form
unique. Handle the empty tree up front — it is the one case with no first
token to read.
