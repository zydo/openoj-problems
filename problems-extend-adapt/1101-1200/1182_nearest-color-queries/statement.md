# Nearest Color Queries

## Description

The array `colors` paints each index with one of three colors, `1`, `2`,
or `3`. Answer a list of queries: query `[i, c]` asks for the distance
between index `i` and the closest index holding color `c`, where distance
means the number of steps between the two positions. Report `-1` when
color `c` does not appear in the array at all.

### Example 1

```text
Input: colors = [3,1,2,2,1,3], queries = [[0,1],[3,3],[4,2],[2,1]]
Output: [1,2,1,1]
Explanation:
The closest 1 to index 0 sits at index 1.
The closest 3 to index 3 sits at index 5, two steps away.
The closest 2 to index 4 sits right next to it at index 3.
For query [2,1], index 1 is one step closer than index 4.
```

### Example 2

```text
Input: colors = [2,2,2], queries = [[1,2],[0,1]]
Output: [0,-1]
Explanation: Index 1 already holds a 2, so its distance is zero; no 1
exists anywhere, so that query yields -1.
```

### Constraints

- `1 <= colors.length <= 5 * 10⁴`
- `1 <= colors[i] <= 3`
- `1 <= queries.length <= 5 * 10⁴`
- `queries[i].length == 2`
- `0 <= queries[i][0] < colors.length`
- `1 <= queries[i][1] <= 3`

## Hints

### Hint 1

Scanning outward per query re-does the same work whenever queries cluster;
the query volume rules that out.

### Hint 2

Precompute everything up front: the answer for every index and color is
knowable before the first query arrives.

### Hint 3

For each color, sweep once from the left carrying the gap to its latest
occurrence, then sweep once from the right; each index keeps whichever
side is closer.
