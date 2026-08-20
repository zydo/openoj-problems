# Reachable Vertices After Edge Expansion

## Description

An undirected network has `vertexCount` original vertices numbered from zero.
Each entry `links[i] = [u, v, inserted]` replaces the link between `u` and `v`
with a path containing `inserted` new internal vertices and
`inserted + 1` unit edges.

Starting at vertex `0`, count every original or inserted vertex reachable in
at most `moveBudget` edge moves.

### Example 1

```text
Input: links = [[0,1,2],[1,2,1],[0,2,4]], moveBudget = 3, vertexCount = 3
Output: 7
```

### Example 2

```text
Input: links = [[1,2,3]], moveBudget = 10, vertexCount = 3
Output: 1
Explanation: Vertex 0 is isolated.
```

### Example 3

```text
Input: links = [[0,1,0],[1,2,2]], moveBudget = 1, vertexCount = 3
Output: 2
```

### Constraints

- `0 <= links.length <= min(vertexCount * (vertexCount - 1) / 2, 10^4)`
- `links[i].length == 3`
- `0 <= links[i][0] < links[i][1] < vertexCount`
- No pair of original vertices has more than one link.
- `0 <= links[i][2] <= 10^4`
- `0 <= moveBudget <= 10^9`
- `1 <= vertexCount <= 3000`

## Hints

### Hint 1

Treat an expanded link with `inserted` internal vertices as a weighted
original link of cost `inserted + 1`.

### Hint 2

Run Dijkstra's algorithm from vertex zero to find reachable original vertices.

### Hint 3

For each link, add the unused move budgets from both endpoints, capped by its
number of inserted vertices.
