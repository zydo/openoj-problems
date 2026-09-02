# Last Paint Wins

## Description

You are given an integer n and a 0-indexed array `queries` of length q,
where `queries[i] = [typeᵢ, indexᵢ, valᵢ]`.

Start from an n x n grid in which every cell holds 0. Apply the queries in
order; each one paints a whole line of the grid:

- When `typeᵢ == 0`, every cell of row `indexᵢ` is repainted to `valᵢ`,
  replacing whatever was there before.
- When `typeᵢ == 1`, every cell of column `indexᵢ` is repainted to `valᵢ`,
  replacing whatever was there before.

A stroke never disturbs cells outside its own line, but inside the line the
new value clobbers the old one. Report the total of all n² cells once every
query has been applied.

### Example 1

![diagram](figures/2718-1.svg)

```text
Input: n = 3, queries = [[0,0,1],[1,2,2],[0,2,3],[1,0,4]]
Output: 23
Explanation: The image above tracks the grid as each query lands. Wherever
two strokes overlap, the later one prevails, and the surviving values add
up to 23.
```

### Example 2

![diagram](figures/2718-2.svg)

```text
Input: n = 3, queries = [[0,0,4],[0,1,2],[1,0,1],[0,2,3],[1,2,1]]
Output: 17
Explanation: The image above tracks the grid as each query lands. Overlaps
resolve in favor of whichever stroke came last, and the surviving values
add up to 17.
```

### Constraints

- `1 <= n <= 10⁴`
- `1 <= queries.length <= 5 * 10⁴`
- `queries[i].length == 3`
- `0 <= typeᵢ <= 1`
- `0 <= indexᵢ < n`
- `0 <= valᵢ <= 10⁵`

## Hints

### Hint 1

Walk the queries backward. The stroke applied most recently is the only one
a cell still remembers, so replaying in reverse decides every cell's fate
immediately.

### Hint 2

During that backward walk, the first time you meet a particular row or
column is its final real-time stroke. Every earlier stroke on that same
line is dead weight — skip it, and record claimed lines so you can.

### Hint 3

A row claimed by its final stroke keeps that value only on columns no later
stroke ever claimed, so it contributes `val × (columns still unclaimed)`;
a freshly claimed column contributes symmetrically. Two counters over
unclaimed lines are all the state you need.
