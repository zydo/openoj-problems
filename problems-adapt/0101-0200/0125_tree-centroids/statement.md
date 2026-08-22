# Tree Centroids

## Description

You are given a tree with `n` nodes labelled `0` to `n - 1`, described by its
`n - 1` edges, where `edges[i] = [a_i, b_i]` joins `a_i` and `b_i` in both
directions.

Root the tree at whichever node you like. The *height* of that rooted tree is
the number of edges on the longest downward path from the root to a leaf.

Some roots make the height as small as it can be. Return the labels of all of
them, in any order. (These nodes are the tree's *centroids* — the name for the
middle of a tree, of which there are always one or two.)

### Example 1

```text
Input: n = 7, edges = [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6]]
Output: [3]
Explanation: The tree is a straight path 0 - 1 - 2 - 3 - 4 - 5 - 6. Rooted at
3, the farthest node is three edges away in either direction. Any other root
leaves a longer side.
```

### Example 2

```text
Input: n = 6, edges = [[2,0],[2,1],[2,3],[3,4],[3,5]]
Output: [2,3]
Explanation: Nodes 2 and 3 sit astride the tree: rooting at either leaves
nothing more than two edges away, and both do it, so both are centroids.
```

### Example 3

```text
Input: n = 2, edges = [[0,1]]
Output: [0,1]
Explanation: Two nodes, one edge — neither can beat the other, both are
centroids.
```

### Constraints

- `1 <= n <= 2 * 10^4`
- `edges.length == n - 1`
- `0 <= a_i, b_i < n`
- `a_i != b_i`, and each pair of endpoints appears at most once.
- The input is a tree.

## Hints

### Hint 1

How small can the answer list be, and how large? A tree's middle is either a
single node or a pair of neighbours — never three.

### Hint 2

The best root sits halfway along the tree's longest path, which suggests
working inward from the ends rather than testing every node as a root.

### Hint 3

Shed the outside layer first: every node with a single neighbour is a leaf,
and no leaf can be the middle of anything.

### Hint 4

Remove all current leaves at once, updating neighbour counts as you go, and
repeat on what is left. Stop when one node or two neighbouring nodes remain —
they are the centroids.
