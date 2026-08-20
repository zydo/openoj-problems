# Kth Ancestor Queries

## Description

A tree of `n` nodes numbered `0` to `n - 1` arrives as a parent array:
`parent[i]` names the parent of node `i`. Node `0` is the root and
`parent[0] == -1`.

The kth ancestor of a node is the node reached after climbing `k` edges
toward the root. One step up lands on the parent, two steps on the
grandparent; asking for zero steps returns the node itself.

Implement the `AncestorFinder` class:

- `AncestorFinder(int n, int[] parent)` prepares the query structure over
  the described tree.
- `int kthAncestor(int node, int k)` returns the kth ancestor of `node`, or
  `-1` when the climb runs past the root before `k` edges are consumed.

### Example 1

```text
Input:
["AncestorFinder", "kthAncestor", "kthAncestor", "kthAncestor", "kthAncestor"]
[[8, [-1, 0, 0, 1, 2, 2, 4, 4]], [3, 2], [6, 1], [7, 3], [5, 3]]
Output: [null, 0, 4, 0, -1]
Explanation:
Node 3 sits under 1 under 0, so two steps up land on the root.
Node 6 climbs straight to its parent 4.
Node 7 needs three edges: 7 to 4, 4 to 2, 2 to 0.
Node 5 is only two edges deep (5 to 2 to 0), so a third step leaves the
tree and the answer is -1.
```

### Example 2

```text
Input:
["AncestorFinder", "kthAncestor", "kthAncestor", "kthAncestor", "kthAncestor"]
[[6, [-1, 0, 1, 2, 3, 4]], [5, 0], [5, 1], [5, 5], [5, 6]]
Output: [null, 5, 4, 0, -1]
Explanation:
The nodes form one chain 0-1-2-3-4-5. Zero steps returns the node itself;
five steps reach the root; a sixth overshoots it.
```

### Constraints

- `1 <= n <= 50,000`
- `parent.length == n`
- `parent[0] == -1`
- `0 <= parent[i] < i` for every `0 < i < n`
- `0 <= node < n`
- `0 <= k <= n`
- At most `50,000` calls will be made to `kthAncestor`.

## Hints

### Hint 1

Climbing edge by edge spends `k` steps per query, and a chain-shaped tree
puts the root about `n` edges away — combine that with the query budget and
the naive walk is orders of magnitude too slow. The constructor is where
the work belongs.

### Hint 2

Storing every ancestor of every node is too much memory, but a doubling
schedule fits: for each node keep its 2⁰-th, 2¹-th, 2²-th, … ancestor.
Those `n log n` entries fill row by row, each row composing the one below
with itself — two jumps of 2ʲ⁻¹ add up to one jump of 2ʲ.

### Hint 3

Every `k` decomposes into distinct powers of two, so answer a query by
taking one stored jump per set bit of `k`. Let `-1` mark a jump that exits
the tree; composing `-1` with anything stays `-1`, so one sentinel suffices
and no depth bookkeeping is needed.
