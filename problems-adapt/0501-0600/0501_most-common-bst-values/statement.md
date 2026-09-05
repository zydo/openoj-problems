# Most Common BST Values

## Description

You are given the `root` of a binary search tree (BST) that may store the
same value more than once. Report every value that occurs most often — the
tree's mode(s).

A BST here follows the usual rule, extended to tolerate ties:

- Every node in a left subtree holds a key no greater than its parent's.
- Every node in a right subtree holds a key no less than its parent's.
- Both subtrees are themselves valid BSTs under this rule.

There may be several values tied for the highest count. LeetCode's original
version of this task accepts any order for such ties, but this judge
compares your returned array exactly, so list tied modes in ascending
order — that's still the same set of values LeetCode would accept, just
pinned to one canonical arrangement.

### Example 1

![diagram](figures/501-1.svg)

```text
Input: root = [1,null,2,2]
Output: [2]
```

Node `2` appears twice and node `1` appears once, so `2` is the sole mode.

### Example 2

```text
Input: root = [5,3,7,3,null]
Output: [3]
```

Value `3` labels two nodes while `5` and `7` each label one, so `3` alone
is the mode.

### Example 3

```text
Input: root = [-1,-2,0,-2,null,null,null]
Output: [-2]
```

Negative keys work the same way: `-2` appears twice, everything else once,
so `-2` is returned.

### Constraints

- The tree holds between `1` and `10⁴` nodes.
- Every node value fits in `[-10⁵, 10⁵]`.

### Follow-up

Can you find every mode using no extra storage beyond the traversal
itself? (The call stack a recursive walk would use doesn't count against
that budget — but note that a sufficiently unbalanced tree could still
make recursion risky in practice.)
