# In-Order Tree Iterator

## Description

You are given the root of a binary search tree. Build an object that hands
out its values one at a time, from smallest to largest, doing only a small
amount of work per step.

Implement the `InOrderTreeIterator` class:

- `InOrderTreeIterator(TreeNode root)` — create the iterator over the tree
  rooted at `root`. Nothing has been handed out yet.
- `boolean hasNext()` — return `true` if a value is still to be handed out.
- `int next()` — hand out the next value in ascending order.

Calls to `next()` are only made while values remain.

The tree reaches your constructor already assembled from its nodes. In the
examples a tree is written as its level-order listing, where `null` stands
for an absent child; children of absent nodes are skipped and trailing
`null`s are dropped.

### Example 1

```text
Input:
["InOrderTreeIterator", "next", "next", "hasNext", "next", "next", "hasNext", "next", "hasNext", "next", "next", "hasNext"]
[[[12, 5, 20, 2, 9, 15, 25]], [], [], [], [], [], [], [], [], [], [], []]
Output: [null, 2, 5, true, 9, 12, true, 15, true, 20, 25, false]
Explanation:
The tree is
      12
     /  \
    5    20
   / \   / \
  2   9 15  25
and its values come out 2, 5, 9, 12, 15, 20, 25. Every left subtree is
drained before its root, and every root before its right subtree.
```

### Example 2

```text
Input:
["InOrderTreeIterator", "hasNext", "next", "next", "next", "next", "hasNext"]
[[[40, 30, null, 20, null, 10]], [], [], [], [], [], []]
Output: [null, true, 10, 20, 30, 40, false]
Explanation: The tree is a left-leaning chain — 40, then 30, then 20, then
10 — so ascending order drains the chain bottom-up: 10 first, 40 last.
```

### Constraints

- The tree holds between `1` and `10⁵` nodes.
- `0 <= Node.val <= 10⁶`, and no two nodes share a value.
- At most `10⁵` calls to `hasNext` and `next` are made in total.

### Follow-up

Can `next()` run in `O(1)` _amortized_ time while the iterator keeps only
`O(h)` memory, `h` being the tree's height?

## Hints

### Hint 1

Flattening the whole tree into a sorted array at construction answers every
query instantly — but it spends `O(n)` memory no matter how few values are
ever requested. An iterator that holds just its position within the tree can
do with a fraction of that.

### Hint 2

Keep a stack holding one root-to-node path: the root and its successive left
children. The top of that stack is by construction the smallest value not
yet handed out, so `hasNext` reduces to checking whether the stack is empty,
and construction is just that initial walk down.

### Hint 3

`next()` pops the top and returns its value — but the values that follow it
live in its right subtree. Before returning, walk that subtree's left spine
onto the stack (walking nothing when there is no right child). Every node is
stacked once and unstacked once, which is why the average cost per call is
constant even when a single call walks a long spine.
