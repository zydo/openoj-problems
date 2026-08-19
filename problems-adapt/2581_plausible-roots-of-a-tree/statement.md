# Plausible Roots of a Tree

## Description

You are given an undirected tree on `n` nodes numbered `0` to `n - 1`, as an
array `edges` of `n - 1` pairs. You are also given an array `guesses` of
directed pairs: each guess `[u, v]` claims that `u` is the parent of `v` once
the tree is rooted somewhere. Every guess names an actual edge of the tree,
and no guess repeats.

A guess comes true for a given root exactly when its direction matches the
rooted tree: `u` is `v`'s parent when all edges point away from the root.
Finally you are given an integer `k`.

Count the nodes that could serve as the root with **at least `k`** true
guesses. Return that count, or `0` if no node qualifies.

### Example 1

```text
Input: edges = [[0,2],[1,2],[2,3]], guesses = [[2,0],[2,1],[3,2]], k = 2
Output: 2
Explanation: Node 2 sits at the center with 0, 1 and 3 around it. Rooted at
3, every edge points the guessed way and all 3 guesses hold; rooted at 2, the
two outward guesses hold. Rooted at 0 or at 1, only one guess survives. Two
roots reach k = 2.
```

### Example 2

```text
Input: edges = [[0,1],[1,2]], guesses = [[0,1],[2,1]], k = 1
Output: 2
Explanation: Each guess claims node 1 is somebody's child. Rooted at an
end, exactly the guess naming that end comes true. Rooted at the middle
node, both edges point away from 1, so both guesses fail. Two roots qualify.
```

### Example 3

```text
Input: edges = [[0,1],[1,2]], guesses = [[1,0],[2,1]], k = 0
Output: 3
Explanation: With k = 0 even a root whose guesses all fail qualifies, so all
three nodes count.
```

### Constraints

- `edges.length == n - 1`
- `2 <= n <= 10⁵`
- `1 <= guesses.length <= 10⁵`
- `0 <= aᵢ, bᵢ, uⱼ, vⱼ <= n - 1`
- `aᵢ != bᵢ`
- `uⱼ != vⱼ`
- `edges` forms a valid tree
- every guess is an edge of the tree, and `guesses` has no duplicates
- `0 <= k <= guesses.length`

## Hints

### Hint 1

Fixing one root makes the check cheap: one traversal records every node's
parent, and a guess is true exactly when the recorded direction matches it.

### Hint 2

Repeating that per root is quadratic. Notice what changes when the root
slides across a single edge from `p` to `u`: only that edge reverses.

### Hint 3

The reversal costs at most one true guess either way: `(p, u)` stops being
true and `(u, p)` becomes true; every other edge keeps its direction.

### Hint 4

Store the guesses in a hash set for direction checks, count the true guesses
for one fixed root, then walk the tree once, carrying the count across each
edge and tallying the nodes whose count reaches `k`.
