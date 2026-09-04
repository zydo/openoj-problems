# Multiway Tree Root-First Walk

## Description

You are given the root of a multiway (n-ary) tree, where a node may have
any number of children rather than the usual two. Visit every node in
preorder — a node before any of its descendants — and return the values
in that order.

The tree arrives serialized as its level-order traversal, with a `null`
marker closing each group of children so the boundaries between siblings
are unambiguous (see the examples).

### Example 1

![diagram](figures/589-1.svg)

```text
Input: root = [1,null,3,2,4,null,5,6]
Output: [1,3,5,6,2,4]
```

### Example 2

![diagram](figures/589-2.svg)

```text
Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
Output: [1,2,3,6,7,11,14,4,8,12,5,9,13,10]
```

### Constraints

- The tree holds between `0` and `10⁴` nodes.
- `0 <= Node.val <= 10⁴`
- The tree's height never exceeds `1000`.

### Follow up

The recursive walk is straightforward — can you write it iteratively
instead?
