# Infection Eradication II

## Description

A fleet of `n` machines is described by an `n x n` adjacency matrix `graph`:
machines `i` and `j` are directly linked exactly when `graph[i][j] == 1`,
and the matrix is symmetric.

A breach has already landed on every machine listed in `initial`. The
compromise then propagates by itself: as long as a directly linked pair
contains a compromised machine, the other member of the pair becomes
compromised too, and this repeats until the set of compromised machines
stops growing.

This time you intervene by taking exactly one machine from `initial`
permanently offline: the machine itself and every one of its links are
removed from the fleet before the propagation starts, so nothing can reach
it or pass through it afterwards.

Let `M(initial)` be the number of machines left compromised once the
propagation settles. Return the machine whose removal minimizes
`M(initial)`; if several removals achieve the same minimum, return the
machine with the smallest index.

### Example 1

```text
Input: graph = [[1,1,1,0,0],[1,1,0,0,0],[1,0,1,0,0],[0,0,0,1,1],[0,0,0,1,1]], initial = [0,3]
Output: 0
Explanation: Taking machine 0 offline strands machines 1 and 2, so only
machines 3 and 4 end up compromised. Removing machine 3 instead strands just
machine 4, leaving three machines compromised.
```

### Example 2

```text
Input: graph = [[1,1,0,0],[1,1,1,0],[0,1,1,1],[0,0,1,1]], initial = [0,2]
Output: 2
Explanation: Machine 2 is the only direct link into the clean tail {3}, so
removing it saves that machine; removing 0 saves nothing because machine 2
reaches the rest anyway.
```

### Example 3

```text
Input: graph = [[1,1,0,0,0],[1,1,1,0,0],[0,1,1,1,0],[0,0,1,1,1],[0,0,0,1,1]], initial = [0,2,4]
Output: 0
Explanation: Each clean machine sits between two breached ones, so every
removal leaves the same number of machines compromised and the tie goes to
the smallest index.
```

### Constraints

- `n == graph.length`
- `n == graph[i].length`
- `2 <= n <= 300`
- Every entry of `graph` is `0` or `1`.
- `graph` is symmetric: `graph[i][j] == graph[j][i]`.
- `graph[i][i] == 1`.
- `1 <= initial.length < n`
- Every element of `initial` lies in the range `0` to `n - 1`.
- The values in `initial` are pairwise distinct.
