# Row-by-Row Maximum

## Description

You are given the `root` of a binary tree. Sweep it one depth at a
time and, for each row (0-indexed from the root), report the largest
value any node in that row holds. Return the results as an array
ordered from the root's row downward.

### Example 1

![diagram](figures/515-1.svg)

```text
Input: root = [1,3,2,5,3,null,9]
Output: [1,3,9]
```

### Example 2

```text
Input: root = [5,-3,8,-9,-1,7,10]
Output: [5,8,10]
```

### Constraints

- The tree contains between `0` and `10⁴` nodes.
- `-2³¹ <= Node.val <= 2³¹ - 1`
