# Same Sum For Every Assignment

## Description

An arithmetic expression can be drawn as a special binary tree: every
node has either no children or exactly two, leaves stand for variables,
and the two-child nodes stand for operators — here the only operator is
`+`. Each tree therefore spells out some sum of its leaf variables, in
whatever grouping its shape implies.

Two such trees count as matching when they evaluate to the same number
under every possible way of assigning values to the variables.

You receive the roots of two trees, `root1` and `root2`. Report whether
the two match.

Because this judge's `TreeNode` stores an integer, the original symbols
are encoded numerically:

- A leaf's variable — a lowercase letter `'a'`-`'z'` — is stored as its
  zero-based alphabet position `ord(letter) - ord('a')`, so the stored
  value lies in `[0, 25]` (`'a'` is `0`, ..., `'z'` is `25`).
- A `+` operator node stores the sentinel `-1`, safely outside the leaf
  range, so a node's kind is never ambiguous.

### Example 1

```text
Input: root1 = [6], root2 = [6]
Output: true
Explanation: Both trees are the lone leaf 'g'. No matter what value g
takes, the two sides stay equal.
```

### Example 2

![diagram](figures/1612-1.svg)

```text
Input: root1 = [-1,0,-1,null,null,1,2], root2 = [-1,-1,0,1,2]
Output: true
Explanation: Decoded, root1 is a + (b + c) and root2 is (b + c) + a. The
groupings differ, but both sides total the same thing for any values of
a, b, and c.
```

### Example 3

![diagram](figures/1612-2.svg)

```text
Input: root1 = [-1,0,-1,null,null,1,2], root2 = [-1,-1,0,1,3]
Output: false
Explanation: Decoded, root1 is a + (b + c) and root2 is (b + d) + a. The
variable multisets {a, b, c} and {a, b, d} disagree, so setting c and d
apart splits the two sums.
```

### Constraints

- Both trees hold the same odd number of nodes, between `1` and `4999`.
- A node's stored value is `-1` (an operator) or an integer in
  `[0, 25]` (a leaf variable).
- Each input tree is a valid expression tree of the shape described:
  nodes with `-1` always have exactly two children, and nodes with a
  value in `[0, 25]` always have none.

### Follow up

Suppose `-` (subtraction) joins `+` as a legal operator. Which part of
your approach survives, and what breaks?
