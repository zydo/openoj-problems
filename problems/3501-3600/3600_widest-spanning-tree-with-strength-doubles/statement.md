# Widest Spanning Tree With Strength Doubles

## Description

You are given `n` nodes numbered `0` to `n - 1` and a list of edges, where
`edges[i] = [ui, vi, si, musti]` describes the undirected edge between `ui`
and `vi`, whose strength is `si`. The last field is `0` or `1`:

- `musti == 1` marks a **required** edge: every spanning tree you build has to
  contain it, and it can never be doubled.
- `musti == 0` marks an ordinary edge, which may be doubled.

You may perform at most `k` upgrades. One upgrade doubles the strength of an
ordinary edge, and each ordinary edge can be doubled at most once.

A spanning tree is a selection of exactly `n - 1` edges that connects all
nodes without a cycle. Its width is the smallest strength among the selected
edges. Return the largest width of any spanning tree you can arrange, or `-1`
if no valid spanning tree exists.

### Example 1

```text
Input: n = 3, edges = [[0,1,3,1],[1,2,4,0]], k = 1
Output: 3
Explanation: The edge (0,1) is required, so every spanning tree contains its
strength 3. Doubling the edge (1,2) lifts it to 8, but the width is still
capped at 3.
```

### Example 2

```text
Input: n = 4, edges = [[0,1,5,0],[1,2,4,0],[2,3,6,0],[0,3,2,0]], k = 2
Output: 6
Explanation: Pick the edges of strengths 5, 4 and 6, leaving the weak 2 out,
and spend both upgrades on 5 → 10 and 4 → 8. The smallest strength in the
tree is 6.
```

### Example 3

```text
Input: n = 4, edges = [[0,1,4,1],[1,2,4,1],[2,0,4,1],[0,3,5,0]], k = 1
Output: -1
Explanation: The three required edges already close a cycle among nodes 0, 1
and 2, and no spanning tree may contain a cycle, so none exists.
```

### Constraints

- `2 <= n <= 10⁵`
- `1 <= edges.length <= 10⁵`
- `edges[i] = [ui, vi, si, musti]`
- `0 <= ui, vi < n`
- `ui != vi`
- `1 <= si <= 10⁵`
- `musti` is `0` or `1`
- `0 <= k <= n`
- No pair of nodes is joined by two edges.

## Hints

### Hint 1

If width `x` is arrangeable, every width below `x` is too. What does that
say about searching for the answer?

### Hint 2

To test one candidate width, build greedily with a union-find: required edges
first, then the ordinary ones.

### Hint 3

A required edge weaker than the candidate fails at once — and so does a
required edge that closes a cycle with earlier required edges.

### Hint 4

An ordinary edge already at or above the candidate joins for free; one that
reaches the candidate only by doubling burns one of the `k` upgrades when its
union succeeds.

### Hint 5

If even the lowest candidate fails, the graph cannot be spanned at all — or
the required set is contradictory — and the answer is `-1`.
