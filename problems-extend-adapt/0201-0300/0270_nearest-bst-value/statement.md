# Nearest BST Value

## Description

You are given the `root` of a binary search tree and a floating-point
`target` value. Return the value stored in the tree that is closest to
`target`. If two stored values are tied for closest, return the smaller
one.

### Example 1

![diagram](figures/270-1.svg)

```text
Input: root = [4,2,5,1,3], target = 3.714286
Output: 4
```

### Example 2

```text
Input: root = [1], target = 4.428571
Output: 1
```

### Constraints

- The number of nodes in the tree is in the range `[1, 10⁴]`.
- `0 <= Node.val <= 10⁹`
- `-10⁹ <= target <= 10⁹`
