# Search Tree Suffix Sums

## Description

You are given the `root` of a binary search tree — a tree in which every node's
left subtree holds only smaller keys and its right subtree only larger keys.

Rewrite the tree so that each node's key becomes the sum of its own key and
every key in the tree larger than it. The shape of the tree must not change;
only the stored values do.

Return the rewritten tree's `root`.

### Example 1

```text
Input: root = [10,4,20,1,7,15,30,null,null,null,8,null,null,null,35]
Output: [110,129,85,130,125,100,65,null,null,null,118,null,null,null,35]
Explanation: The keys above 10 total 100, so the root becomes 110. The largest
key, 35, keeps nothing above it and stays 35.
```

### Example 2

```text
Input: root = [2,null,5]
Output: [7,null,5]
Explanation: 2 has only 5 above it and becomes 7; 5 is the largest key and
stays 5.
```

### Example 3

```text
Input: root = [40,20,null,10,null]
Output: [40,60,null,70]
Explanation: A left-leaning chain: 40 stays 40, 20 becomes 60, and 10 becomes
70.
```

### Constraints

- The tree has between `1` and `100` nodes.
- `0 <= Node.val <= 100`
- All values in the tree are unique.

## Hints

### Hint 1

Which traversal of a search tree produces the keys in ascending order?

### Hint 2

Running that traversal backwards — right subtree, node, left subtree — yields
the keys from largest to smallest.

### Hint 3

Carry the running total of keys visited so far and store it into each node the
moment you reach it.
