# Largest Sum of Non-Adjacent Tree Edges

## Description

You are given a weighted tree on `n` nodes numbered `0` to `n - 1`, rooted at
node `0`. It arrives as a 2D array `edges` of length `n`, where
`edges[i] = [parent, weight]` says that `parent` is the parent of node `i`
and that the edge joining them carries `weight`. The root has no parent, so
`edges[0] = [-1, -1]`.

Pick a set of edges whose weights add up to as much as possible, subject to
one restriction: no two picked edges may share a node — an edge from `a` to
`b` and an edge from `b` to `c` clash at `b` and cannot both be picked.

Choosing no edges at all is legal and scores `0`. Return the largest sum
reachable.

### Example 1

```text
Input: edges = [[-1,-1],[0,4],[0,9],[1,3],[1,5]]
Output: 14
Explanation: Take the edge of weight 9 into node 2 and the edge of weight 5
into node 4; they touch no common node. Taking 9 with 3 instead scores only
12, and every pair involving the edge of weight 4 is blocked by node 0 or
node 1.
```

### Example 2

```text
Input: edges = [[-1,-1],[0,8],[0,-5],[0,6]]
Output: 8
Explanation: All three edges meet at the root, so at most one of them can be
picked, and the heaviest is 8. The negative edge would only lower the total.
```

### Example 3

```text
Input: edges = [[-1,-1],[0,3],[1,-2],[2,7],[3,4]]
Output: 10
Explanation: The tree is a chain 0 - 1 - 2 - 3 - 4. The edges of weight 3
and 7 sit far enough apart to coexist, for 10; the weight-4 edge would clash
with the 7, and the negative edge is never worth taking.
```

### Constraints

- `n == edges.length`
- `1 <= n <= 10⁵`
- `edges[i].length == 2`
- `edges[0] == [-1,-1]`
- `0 <= edges[i][0] <= n - 1` for `i >= 1`
- `edges[i][0] != i`
- `-10⁶ <= edges[i][1] <= 10⁶` for `i >= 1`
- `edges` describes a valid tree

## Hints

### Hint 1

Break the problem at subtrees. The best pick inside a subtree needs one bit
of context from the node above it.

### Hint 2

An edge with negative weight never has to be picked — dropping it can only
help.

### Hint 3

The context bit is whether the edge from this node to its parent has been
picked.

### Hint 4

When that parent edge is not picked, the node may take at most one edge
going down to a child.
