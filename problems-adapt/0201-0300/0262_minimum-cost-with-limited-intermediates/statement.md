# Minimum Cost with Limited Intermediates

## Description

A directed network has `nodeCount` nodes numbered from `0` to
`nodeCount - 1`. Each entry `[from, to, cost]` in `links` describes a directed
connection with a positive traversal cost.

Return the minimum cost of a route from `source` to `target` that visits at
most `maxIntermediates` other nodes. Return `-1` when no such route exists.

### Example 1

```text
Input: nodeCount = 4,
       links = [[0,1,40],[1,3,70],[0,2,15],[2,3,120],[0,3,200]],
       source = 0, target = 3, maxIntermediates = 1
Output: 110
Explanation: The route 0 -> 1 -> 3 costs 110. The alternative through node
2 costs 135, and the direct link costs 200.
```

### Example 2

```text
Input: nodeCount = 3, links = [[0,1,30],[1,2,25],[0,2,80]],
       source = 0, target = 2, maxIntermediates = 1
Output: 55
```

### Example 3

```text
Input: nodeCount = 3, links = [[0,1,30],[1,2,25],[0,2,80]],
       source = 0, target = 2, maxIntermediates = 0
Output: 80
Explanation: With no intermediate node allowed, only the direct link is
eligible.
```

### Constraints

- `2 <= nodeCount <= 100`
- `0 <= links.length <= nodeCount * (nodeCount - 1) / 2`
- Every link has the form `[from, to, cost]`.
- `0 <= from, to < nodeCount` and `from != to`.
- `1 <= cost <= 10^4`
- No ordered pair of nodes has more than one link.
- `0 <= source, target, maxIntermediates < nodeCount`
- `source != target`

## Hints

### Hint 1

A route with at most `maxIntermediates` internal nodes uses at most
`maxIntermediates + 1` links.

### Hint 2

Perform that many rounds of Bellman-Ford relaxation.

### Hint 3

Each round must read from the previous distance array so it cannot chain
multiple links prematurely.
