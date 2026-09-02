# The Tree's Lightest Level

## Description

Every node of a binary tree sits on a level: the root is level 1, and
each child lives one level below its parent.

Given the `root` of such a tree, where every node carries a value, find
the level whose values add up to the smallest total. If several levels
tie for the smallest sum, answer with the shallowest of them.

### Example 1

![diagram](figures/3157-1.svg)

```text
Input: root = [50,6,2,30,80,7]
Output: 2
Explanation: The three levels sum to 50, 8 and 117, so level 2 is by
far the lightest.
```

### Example 2

![diagram](figures/3157-2.svg)

```text
Input: root = [36,17,10,null,null,24]
Output: 3
Explanation: The sums run 36, 27 and 24 — strictly decreasing, so the
deepest level wins.
```

### Example 3

![diagram](figures/3157-3.svg)

```text
Input: root = [5,null,5,null,5]
Output: 1
Explanation: All three levels sum to 5, and the tie goes to the
topmost level.
```

### Constraints

- The tree holds between `1` and `10⁵` nodes.
- `1 <= Node.val <= 10⁹`

## Hints

### Hint 1

Sweep the tree once and keep a running total per level — entry `i` of
that list is the sum of all values on level `i`.

### Hint 2

The answer is the first index holding the smallest value in that list;
scanning left to right resolves every tie toward the shallowest level
on its own.
