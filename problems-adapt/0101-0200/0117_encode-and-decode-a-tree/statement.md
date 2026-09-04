# Encode and Decode a Tree

## Description

Write a pair of routines that move a binary tree into a string and back:
the first turns any tree into one piece of text, the second turns that text
into the same tree again — same shape, same values, same positions.

Implement the `TreeCodec` class:

- `String serialize(TreeNode root)` — render the tree `root` as a single
  string of your choosing.
- `TreeNode deserialize(String data)` — rebuild from `data` the tree it was
  rendered from.

**No particular string format is demanded.** The judge hands the tree to
`serialize`, passes the string that comes back — unmodified — into your own
`deserialize`, and compares the resulting tree with the original. Any
encoding that makes this round trip faithful is fine: a level-order listing,
a preorder walk with explicit gaps, a bracketed layout, whatever you devise.
The string itself is never inspected. A tree with no nodes must survive the
round trip as a tree with no nodes.

### Example 1

```text
Input:
["TreeCodec", "serialize", "deserialize"]
[[], [[4, 2, 7, null, 3, 6, 9]], [<the text serialize produced>]]
Output: [null, <any string>, [4, 2, 7, null, 3, 6, 9]]
Explanation:
TreeCodec codec = new TreeCodec();
String data = codec.serialize(root); // your encoding, whatever it is
codec.deserialize(data);             // rebuilds exactly this tree
```

### Example 2

```text
Input:
["TreeCodec", "serialize", "deserialize"]
[[], [[]], [<the text serialize produced>]]
Output: [null, <any string>, []]
Explanation: An empty tree encodes to something and decodes back to an
empty tree.
```

### Constraints

- The tree has between `0` and `10⁴` nodes.
- `-1000 <= Node.val <= 1000`.

### Follow-up

One workable encoding reads the tree breadth-first. A depth-first encoding —
say, preorder with explicit gap markers — also determines the tree uniquely;
would its strings come out shorter or longer than the breadth-first ones on
trees whose lower levels are mostly empty?

## Hints

### Hint 1

A rendering pins the tree down only if it also says where children are
_missing_. Reserve a marker token for an empty child slot and give every
child position of every real node exactly one token; the missing positions
of marker tokens themselves cost nothing, since a marker has no children to
describe.

### Hint 2

Split each direction in two. Encoding: walk the tree by levels, emitting a
value or a marker per slot and enqueuing children only for real nodes.
Decoding: split the string back into tokens, then replay the walk — a queue
of nodes still waiting for children consumes the tokens in order, and a
marker fills a slot without joining the queue.

### Hint 3

Marker tokens for the children of the last real nodes accumulate at the tail
of the sequence; trimming that tail changes nothing about uniqueness and
shortens the string. The empty tree is the one shape with no leading token —
handle it before anything else.
