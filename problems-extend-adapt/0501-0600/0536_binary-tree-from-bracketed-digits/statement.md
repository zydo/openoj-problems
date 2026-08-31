# Binary Tree from Bracketed Digits

## Description

Rebuild a binary tree from a string that mixes digits with parentheses.

The string is one integer, optionally followed by up to two parenthesized
groups. The integer is the value of the current node, and each parenthesized
group encloses the same pattern recursively for one child subtree.

When only one group follows the integer, it always describes the left
child — a node can never carry a right child without a left one written
first.

### Example 1

![diagram](figures/536-1.svg)

```text
Input: s = "4(2(3)(1))(6(5))"
Output: [4,2,6,3,1,5]
```

### Example 2

```text
Input: s = "12(8(3))(20)"
Output: [12,8,20,3]
```

### Example 3

```text
Input: s = "-15(7(2)(9))(23(18)(30))"
Output: [-15,7,23,2,9,18,30]
```

### Constraints

- `0 <= s.length <= 3 * 10⁴`
- `s` is made up only of digits, `'('`, `')'`, and `'-'`.
- Every value encoded in the string fits within `2³⁰` in magnitude.
