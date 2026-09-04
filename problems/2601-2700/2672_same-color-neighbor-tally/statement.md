# Same-Color Neighbor Tally

## Description

Start with an integer `n` and an array `colors` of length `n` whose entries
all begin at `0`, meaning unpainted. You are also given a 2D integer array
`queries` where `queries[i] = [indexi, colori]`.

Process the queries in order. The `i`th query first repaints
`colors[indexi]` with `colori`, then asks how many adjacent pairs of `colors`
currently match — that is, how many neighboring positions hold the same
nonzero color as each other, whatever `colori` just painted.

Return an array `answer` whose `i`th entry is the matching-pair count seen
right after the `i`th query.

### Example 1

```text
Input: n = 5, queries = [[2,3],[3,3],[2,4],[0,3],[3,4]]
Output: [0,1,0,0,1]
Explanation: After query 1 the array is [0,0,3,0,0] and no pair matches.
Query 2 paints index 3 the same color as index 2, so the tally rises to 1.
Query 3 repaints index 2 with 4, breaking that pair and dropping the tally
back to 0. Query 4 paints index 0, whose only neighbor is still unpainted,
so the tally stays 0. Query 5 repaints index 3 with 4, matching index 2
again — the final tally is 1.
```

### Example 2

```text
Input: n = 1, queries = [[0,7]]
Output: [0]
Explanation: A single painted cell has no adjacent pair, so the tally is 0.
```

### Example 3

```text
Input: n = 4, queries = [[1,2],[2,2],[1,2]]
Output: [0,1,1]
Explanation: After query 2 the array is [0,2,2,0] with one matching pair.
Query 3 repaints index 1 with the very color it already had, so the pair
survives and the tally stays at 1.
```

### Constraints

- `1 <= n <= 10⁵`
- `1 <= queries.length <= 10⁵`
- `queries[i].length == 2`
- `0 <= indexi <= n - 1`
- `1 <= colori <= 10⁵`

## Hints

### Hint 1

A single repaint touches only one cell, so only the two pairs that cell
belongs to can change state.

### Hint 2

Before overwriting the cell, check whether it matched its left or right
neighbor; each such match lowers the tally by one.

### Hint 3

After the overwrite, repeat the same two checks against the incoming color;
each new match raises the tally by one.
