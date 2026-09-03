# Counting Right-Triangle Nodes

## Description

You are given an integer `n` and an undirected tree whose `n` nodes are
numbered `0` through `n - 1`. The tree comes as a 2D array `edges` of
length `n - 1`, where `edges[i] = [uᵢ, vᵢ]` joins nodes `uᵢ` and `vᵢ`.

Three more integers `x`, `y`, and `z` name three distinct target nodes.

For a node `u`, measure:

- `dx` — the distance from `u` to `x`
- `dy` — the distance from `u` to `y`
- `dz` — the distance from `u` to `z`

Node `u` is a right-triangle node when its three distances can be sorted
into some order `a <= b <= c` with `a² + b² = c²` — that is, when the
triple would make a right triangle.

The distance between two nodes is the number of edges on the unique path
connecting them.

Return how many right-triangle nodes the tree contains.

### Example 1

```text
Input: n = 5, edges = [[0,1],[0,2],[0,3],[0,4]], x = 1, y = 2, z = 4
Output: 3
Explanation: Each target node sees distances (0, 2, 2): it is 0 away from
itself and 2 away from each other leaf, and 0² + 2² = 2². The center node
0 sees (1, 1, 1) and the spare leaf 3 sees (2, 2, 2) — neither triple
works. So exactly nodes 1, 2, and 4 qualify.
```

### Example 2

```text
Input: n = 10, edges = [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]], x = 1, y = 9, z = 0
Output: 1
Explanation: Node 4 sits 3 edges from node 1, 5 edges from node 9, and 4
edges from node 0. Sorted, the triple is (3, 4, 5), and 3² + 4² = 5², so
node 4 qualifies. Closest rivals fail: node 5 holds (4, 4, 5) and node 6
holds (3, 5, 6). The answer is 1.
```

### Example 3

```text
Input: n = 4, edges = [[0,1],[1,2],[2,3]], x = 0, y = 3, z = 1
Output: 0
Explanation: The triples are (0,1,3) at node 0, (0,1,2) at node 1,
(1,1,2) at node 2, and (0,2,3) at node 3. None satisfies a² + b² = c².
```

### Constraints

- `4 <= n <= 10⁵`
- `edges.length == n - 1`
- `edges[i] = [uᵢ, vᵢ]`
- `0 <= uᵢ, vᵢ, x, y, z <= n - 1`
- `x`, `y`, and `z` are pairwise distinct.
- The input is generated so that `edges` always forms a valid tree.

## Hints

### Hint 1

Three separate breadth-first passes — one from each of `x`, `y`, and `z`
— hand you the complete distance arrays, since every tree edge counts as
one step.

### Hint 2

For each node, sort its three distances and check the right-triangle
equation on the sorted values.
