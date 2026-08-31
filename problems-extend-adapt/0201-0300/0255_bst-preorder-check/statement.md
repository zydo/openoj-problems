# BST Preorder Check

## Description

You are given an array `preorder` of distinct integers. Determine whether
it could be the sequence produced by a preorder walk (visit the root,
then the left subtree, then the right subtree) of some binary search
tree, and return `true` or `false` accordingly.

### Example 1

![diagram](figures/255-1.svg)

```text
Input: preorder = [5,2,1,3,6]
Output: true
```

The tree pictured above has this exact preorder walk, so it is a valid
sequence.

### Example 2

```text
Input: preorder = [4,2,6,1,5]
Output: false
```

No binary search tree produces this order: after visiting `6`, every
later value must exceed `4` (right subtree of the root), but `1` does
not.

### Constraints

- `1 <= preorder.length <= 10⁴`
- `1 <= preorder[i] <= 10⁴`
- All the elements of `preorder` are unique.

### Follow-up

Could you do it using only constant space complexity?
