# Flower Types for Every Garden

## Description

There are `n` gardens numbered `1` through `n`, and `paths[i] = [xi,
yi]` joins garden `xi` with garden `yi` by a two-way path. Every garden
receives exactly one flower of one of four types, numbered `1` through
`4`, and two gardens joined by a path must hold different types. No
garden touches more than three paths.

Return one such assignment as an array `answer`, where `answer[i]` is
the flower type of garden `i + 1`. An assignment is always possible.

One judging note: most inputs admit many valid assignments, but the
judge compares the returned array exactly, so the answer must come from
one fixed procedure. Walk the gardens in increasing order from `1` to
`n`. On reaching garden `i`, gather the flower types already held by its
colored neighbors — only gardens processed earlier in the walk — and
plant the smallest type from `{1, 2, 3, 4}` missing from that set.
Because no garden touches more than three paths, at most three types can
ever be blocked, so the walk never gets stuck.

### Example 1

```text
Input: n = 5, paths = [[1,2],[1,3],[1,4],[1,5]]
Output: [1,2,2,2,2]
Explanation: Garden 1 takes type 1. Each of gardens 2..5 touches only
garden 1, so each plants the smallest type different from 1, namely 2.
```

### Example 2

```text
Input: n = 4, paths = [[1,3],[2,4],[1,4]]
Output: [1,1,2,2]
Explanation: Gardens 1 and 2 see no colored neighbors when reached, so
both take type 1; gardens 3 and 4 each face a type-1 neighbor and take 2.
```

### Example 3

```text
Input: n = 6, paths = [[1,2],[2,3],[3,1],[4,5],[5,6],[6,4]]
Output: [1,2,3,1,2,3]
Explanation: The gardens form two separate triangles, and each triangle
receives types 1, 2, 3 in label order.
```

### Constraints

- `1 <= n <= 10^4`
- `0 <= paths.length <= 2 * 10^4`
- `paths[i].length == 2`
- `1 <= xi, yi <= n`
- `xi != yi`
- No garden touches more than three paths.

## Hints

### Hint 1

A garden has at most three neighbors, so at most three of the four types
can be spoken for when it is colored — one always remains. Coloring the
gardens in label order and picking greedily therefore always works.
