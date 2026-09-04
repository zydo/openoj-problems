# Infection Quarantine Choice

## Description

A cluster of `n` services is described by an `n x n` adjacency matrix
`graph`: services `i` and `j` are directly linked exactly when
`graph[i][j] == 1`, and the matrix is symmetric.

Every service named in `initial` is already compromised. The compromise then
propagates on its own: as long as a directly linked pair contains a
compromised service, the other member of the pair becomes compromised as
well, and this repeats until the set of compromised services stops growing.

You get to intervene once, before the propagation starts, by quarantining
exactly one service from `initial`. A quarantined service no longer spreads
the compromise itself, but nothing prevents it from being compromised later
through its links.

Let `M(initial)` denote the number of compromised services once the
propagation settles. Return the service whose quarantine minimizes
`M(initial)`; if several quarantines achieve the same minimum, return the
service with the smallest index.

### Example 1

```text
Input: graph = [[1,1,0,0,0],[1,1,1,0,0],[0,1,1,0,0],[0,0,0,1,1],[0,0,0,1,1]], initial = [2,4]
Output: 2
Explanation: The cluster splits into {0, 1, 2} and {3, 4}. Quarantining 2
cuts service 2 off from {0, 1, 2}, which then stays clean, so only 2 services
end up compromised. Quarantining 4 spares just one service.
```

### Example 2

```text
Input: graph = [[1,1,0,0],[1,1,0,0],[0,0,1,1],[0,0,1,1]], initial = [0,2]
Output: 0
Explanation: Either quarantine confines the compromise to a single pair, so
both choices tie at 2 compromised services and the smaller index wins.
```

### Example 3

```text
Input: graph = [[1,1,0,0],[1,1,1,0],[0,1,1,1],[0,0,1,1]], initial = [0,3]
Output: 0
Explanation: Services 0 and 3 feed the same connected cluster, so whichever
one is quarantined, the other keeps the whole cluster compromised — all 4
services fall either way, and 0 is the smaller index.
```

### Constraints

- `n == graph.length`
- `n == graph[i].length`
- `2 <= n <= 300`
- Every entry of `graph` is `0` or `1`.
- `graph` is symmetric: `graph[i][j] == graph[j][i]`.
- `graph[i][i] == 1`.
- `1 <= initial.length <= n`
- Every element of `initial` lies in the range `0` to `n - 1`.
- The values in `initial` are pairwise distinct.
