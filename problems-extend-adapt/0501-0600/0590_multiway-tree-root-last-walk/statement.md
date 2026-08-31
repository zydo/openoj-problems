# Multiway Tree Root-Last Walk

## Description

You are given the root of a multiway (n-ary) tree, where a node may have
any number of children rather than the usual two. Visit every node in
postorder — all of a node's descendants before the node itself — and
return the values in that order.

The tree arrives serialized as its level-order traversal, with a `null`
marker closing each group of children so the boundaries between siblings
are unambiguous (see the examples).

### Example 1

![diagram](figures/590-1.svg)

```text
Input: root = [1,null,3,2,4,null,5,6]
Output: [5,6,3,2,4,1]
```

### Example 2

![diagram](figures/590-2.svg)

```text
Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
Output: [2,6,14,11,7,3,12,8,4,13,9,10,5,1]
```

### Constraints

- The tree holds between `0` and `10⁴` nodes.
- `0 <= Node.val <= 10⁴`
- The tree's height never exceeds `1000`.

### Follow up

The recursive walk is straightforward — can you write it iteratively
instead?
