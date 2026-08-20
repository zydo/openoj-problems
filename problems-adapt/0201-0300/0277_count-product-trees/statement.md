# Count Product Trees

## Description

Every entry of `values` is an integer above `1`, and no entry repeats. Label the
nodes of a binary tree with these entries, drawing on any entry as often as you
please. A node is allowed to be a leaf; otherwise it carries exactly two
children, and then its label has to equal the two child labels multiplied
together.

Left and right are distinguished, so a node whose children read `a` then `b`
gives a tree different from the one whose children read `b` then `a`. Count all
the trees that can be built this way and report the count modulo `10^9 + 7`.

### Example 1

```text
Input: values = [2,3,6]
Output: 5
Explanation: Three trees are single nodes. Two more are rooted at 6, whose
children are 2 and 3 in one order or the other.
```

### Example 2

```text
Input: values = [2,4,8]
Output: 8
Explanation: 2 roots only itself. 4 roots two trees: a bare 4, or a 4 above two
copies of 2. Rooted at 8 there are five: a bare 8, plus a pairing of 2 with 4 in
either order, each of which admits both shapes of the 4 subtree.
```

### Example 3

```text
Input: values = [3,5,7]
Output: 3
Explanation: None of the three is a product of two entries, so nothing beyond
the single nodes can be assembled.
```

### Constraints

- `values` contains from 1 up to 1000 entries.
- Every entry lies in the range 2 through `10^9`.
- The entries are pairwise distinct.

## Hints

### Hint 1

Both factors of an entry are smaller than the entry itself, so processing the
entries in increasing order settles a node's children before the node.

### Hint 2

Count by root label. For an entry `v` write `f(v)` for the number of trees whose
root is labelled `v`. One of them is the bare leaf; the rest choose an ordered
pair of entries `a`, `b` with `a * b == v`, and contribute `f(a) * f(b)`.

### Hint 3

Store the entries in a map from label to running count. Then, while walking the
smaller entries as candidate left factors, the matching right factor is one
lookup away instead of another scan.

### Hint 4

The answer adds `f(v)` over every entry. Reduce modulo `10^9 + 7` as you build,
not only at the end.
