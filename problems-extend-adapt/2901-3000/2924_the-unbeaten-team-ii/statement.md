# The Unbeaten Team II

## Description

A tournament has `n` teams numbered `0` through `n - 1`; each team is
also a node of a DAG.

You are given the integer `n` and a 0-indexed array `edges` of `m`
pairs describing that DAG: `edges[i] = [ui, vi]` is a directed edge
from team `ui` to team `vi`. An edge from `a` to `b` means team `a` is
stronger than team `b` (and `b` weaker than `a`).

A team is the unbeaten one when no other team in the tournament is
stronger than it.

Return the number of that team if the unbeaten team is unique, and
`-1` otherwise.

Notes

A cycle is a node sequence `a1, a2, ..., ak, a(k+1)` in which
`a1` is the same node as `a(k+1)`, the nodes `a1, ..., ak` are all
distinct, and a directed edge runs from `ai` to `a(i+1)` for every
`i` in `[1, k]`. A DAG is a directed graph holding no such cycle.

### Example 1

![diagram](figures/2924-1.svg)

```text
Input: n = 3, edges = [[0,1],[1,2]]
Output: 0
Explanation: Team 1 is weaker than team 0, and team 2 in turn is
weaker than team 1, so team 0 is the only team nobody is stronger
than.
```

### Example 2

![diagram](figures/2924-2.svg)

```text
Input: n = 4, edges = [[0,2],[1,3],[1,2]]
Output: -1
Explanation: Team 2 is weaker than both team 0 and team 1, and team 3
is weaker than team 1. But neither team 0 nor team 1 is weaker than
anyone, so there is no single unbeaten team and the answer is -1.
```

### Constraints

- `1 <= n <= 100`
- `m == edges.length`
- `0 <= m <= n * (n - 1) / 2`
- `edges[i].length == 2`
- `0 <= edges[i][j] <= n - 1`
- `edges[i][0] != edges[i][1]`
- No team is stronger than a team that is stronger than it.
- Whenever team `a` is stronger than team `b` and team `b` is stronger
  than team `c`, team `a` is also stronger than team `c`.

## Hints

### Hint 1

A team that some edge points at is weaker than somebody, so any
unbeaten team must have in-degree 0 in the DAG.

### Hint 2

Count incoming edges once and inspect the counts: exactly one team
with in-degree 0 crowns it, while zero such teams or two or more mean
there is no unique answer.
