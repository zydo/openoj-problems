# Ancestors On Square Terms

## Description

A rooted tree hangs on two length-`n` arrays. Node `0` is the root and
`parent[0] = -1`; for every other node `i`, `parent[i]` names its immediate
parent. Alongside, `nums[i]` is the positive integer pinned to node `i`.

The ancestors of a node are the nodes met on the climb from it to the root,
the node itself left out. An ancestor `a` of node `i` is on square terms
with it when the product `nums[i] * nums[a]` is a perfect square, and `t_i`
counts how many of node `i`'s ancestors are.

Report `t_1 + t_2 + ... + t_{n-1}` — the total over every node except the
root, which has no ancestors to speak of.

### Example 1

```text
Input: parent = [-1,0,0,0], nums = [2,8,18,4]
Output: 2
Explanation: The three non-root nodes all hang straight off the root.
For node 1 the only ancestor product is 8 * 2 = 16, a perfect square, so
t_1 = 1; for node 2 it is 18 * 2 = 36, also square, so t_2 = 1; for
node 3 it is 4 * 2 = 8, not a square, so t_3 = 0. The total is 1 + 1 + 0
= 2.
```

### Example 2

```text
Input: parent = [-1,0,0,2,2], nums = [6,1,24,6,3]
Output: 3
Explanation: Node 1's lone climb gives 1 * 6 = 6, not square: t_1 = 0.
Node 2's gives 24 * 6 = 144 = 12², so t_2 = 1. Node 3 climbs over both
node 2 and the root: 6 * 24 = 144 and 6 * 6 = 36 are both squares, so
t_3 = 2. Node 4 finds 3 * 24 = 72 and 3 * 6 = 18, neither square:
t_4 = 0. The total is 0 + 1 + 2 + 0 = 3.
```

### Example 3

```text
Input: parent = [-1], nums = [5]
Output: 0
Explanation: The tree holds only the root, and the root has no
ancestors, so the total is 0.
```

### Constraints

- `1 <= n <= 10⁵`
- `n == parent.length == nums.length`
- `parent[0] == -1`
- `0 <= parent[i] <= n - 1` for all `i` in `[1, n - 1]`
- `1 <= nums[i] <= 10⁵`
- The input is generated such that `parent` represents a valid tree rooted
  at node `0`.

## Hints

### Hint 1

A product of two positive integers lands on a perfect square exactly when
the two values reduce to the same square-free residue — what is left after
every prime's even power is stripped away.

### Hint 2

Work out each value's residue up front; a smallest-prime-factor table up to
the largest value turns every reduction into a few divisions.

### Hint 3

Descend the tree from the root, carrying a tally of the residues currently
present on the path from the root to the node at hand.

### Hint 4

A node's own count is then just the tally recorded under its residue at
the moment it is entered.

### Hint 5

Back out of the tally when a subtree is finished, so it always describes
exactly the current path and nothing more.
