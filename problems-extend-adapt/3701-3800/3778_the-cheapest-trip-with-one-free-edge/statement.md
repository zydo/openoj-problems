# The Cheapest Trip With One Free Edge

## Description

A connected simple undirected graph has `n` nodes labeled `0` through
`n - 1`, and `edges[i] = [ui, vi, wi]` describes an undirected edge
between `ui` and `vi` carrying the positive weight `wi`.

A trip travels from node `0` to node `n - 1` by following edges. Its fare
is the total weight of every edge it uses — except that exactly one edge
per trip rides for free: an edge whose weight is maximal along the trip.
When several edges tie for the maximum, one of them still rides free and
the rest are paid in full.

Return the smallest fare any trip from node `0` to node `n - 1` can
achieve.

### Example 1

```text
Input: n = 4, edges = [[0,1,3],[1,2,3],[2,3,3]]
Output: 6
Explanation: The only trip 0 -> 1 -> 2 -> 3 uses three edges, each of
weight 3. One of them rides free, so the fare is 3 + 3 = 6.
```

### Example 2

```text
Input: n = 2, edges = [[0,1,10]]
Output: 0
Explanation: The trip's single edge is also its heaviest, so it rides
free and the whole trip costs nothing.
```

### Example 3

```text
Input: n = 4, edges = [[0,1,5],[1,3,5],[0,2,4],[2,3,4]]
Output: 4
Explanation: Two trips reach node 3. Through the weight-5 edges the fare
is 5, since one edge of the pair rides free; through the weight-4 edges
the fare is 4. The cheaper trip costs 4.
```

### Constraints

- `2 <= n <= 5 * 10⁴`
- `n - 1 <= edges.length <= 10⁹`
- `edges[i] = [ui, vi, wi]`
- `0 <= ui < vi < n`
- `[ui, vi] != [uj, vj]` for `i != j`
- `1 <= wi <= 5 * 10⁴`
- The graph is connected.

## Hints

### Hint 1

A trip's fare is its total weight minus its heaviest edge, so there is no
need to decide up front which edge rides free — the search can leave that
open.

### Hint 2

Run Dijkstra over doubled states: each node exists in a layer where the
free ride is still unspent and a layer where it has been used. Staying in
a layer pays the edge weight; dropping one layer down takes an edge for
free.
