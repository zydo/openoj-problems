# Preorder Tree Stream Check

## Description

A binary tree can be written as a comma-separated preorder stream: write a
node's integer value, then its left subtree, then its right subtree. Use
`#` wherever a child is absent. For example, the tree shown below produces
`"9,3,4,#,#,1,#,#,2,#,6,#,#"`.

![diagram](figures/331-1.svg)

Given a string `preorder` in this format, return `true` exactly when it can
represent a complete binary tree. Each token is guaranteed to be either an
integer or `#`, and the input never has malformed separators such as two
commas in a row.

Do not reconstruct the tree.

### Example 1

```text
Input: preorder = "2,7,#,#,8,#,#"
Output: true
```

### Example 2

```text
Input: preorder = "3,#"
Output: false
```

### Example 3

```text
Input: preorder = "#"
Output: true
```

### Constraints

- `1 <= preorder.length <= 10⁴`
- `preorder` consists of integers in the range `[0, 100]` and `'#'`
  separated by commas `','`.
