# Read The Levels In A Zigzag

## Description

Reading a binary tree one row at a time normally goes left to right on every row. The
zigzag reading flips that: the top row runs left to right, the row beneath it runs
right to left, and every further row keeps alternating direction as you step down.

Given the `root` of a binary tree, return its node values read in that zigzag order —
one list per level, each list ordered by the direction that level demands.

### Example 1

![diagram](figures/103-1.svg)

```text
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]
```

The top row holds just 3. The next row is read right to left, so 20 precedes 9; the
row below that switches back, giving 15 then 7.

### Example 2

```text
Input: root = [7,1,14]
Output: [[7],[14,1]]
```

With only one row below the root, the single flip puts 14 ahead of 1.

### Example 3

```text
Input: root = []
Output: []
```

An empty tree has no levels to read, so the answer is an empty list of lists.

### Example 4

```text
Input: root = [2,7,3,9,8,12,4,6,null,null,5]
Output: [[2],[3,7],[9,8,12,4],[5,6]]
```

Four levels alternate left-to-right, right-to-left, left-to-right, right-to-left —
note the last row, where 5 leads even though 6 is encountered first in the tree: that
row reads right to left, and 5 sits at its right end.

### Constraints

- The tree holds between 0 and 2000 nodes.
- Each node's value lies between -100 and 100, inclusive.
