# Assign The Missing Weights

## Description

An undirected weighted connected graph has `n` vertices numbered `0` through
`n - 1`. Its edges arrive as an array `edges`, where `edges[i] = [ai, bi, wi]`
joins `ai` and `bi` and carries weight `wi`. Every weight is either a fixed
positive number or `-1`, and a `-1` marks a placeholder whose real value is
yours to choose.

Replace every placeholder with a positive integer between `1` and `2 * 10⁹`
so that, afterwards, the shortest distance from `source` to `destination`
lands exactly on `target`. Weights that started positive must stay untouched,
and when several different assignments do the job, any one of them is
accepted.

Return the complete edge list with your choices filled in — edges you never
touched included, in any order — or an empty array if no assignment can bring
the shortest distance to `target`.

### Example 1

![diagram](figures/2699-1.svg)

```text
Input: n = 5, edges = [[4,1,-1],[2,0,-1],[0,3,-1],[4,3,-1]], source = 0, destination = 1, target = 5
Output: [[4,1,1],[2,0,1],[0,3,3],[4,3,1]]
Explanation: Handing edge `0-3` a weight of `3` and the other three
placeholders a weight of `1` each turns `0 -> 3 -> 4 -> 1` into a route of
`3 + 1 + 1 = 5`, which is exactly `target`, and nothing cheaper exists.
```

### Example 2

![diagram](figures/2699-2.svg)

```text
Input: n = 3, edges = [[0,1,-1],[0,2,5]], source = 0, destination = 2, target = 6
Output: []
Explanation: The only way out of `0` toward `2` is the fixed edge of weight
`5`; the placeholder trails off to vertex `1` and never touches that route.
No assignment can stretch the distance from `5` to `6`, so the answer is an
empty array.
```

### Example 3

![diagram](figures/2699-3.svg)

```text
Input: n = 4, edges = [[1,0,4],[1,2,3],[2,3,5],[0,3,-1]], source = 0, destination = 2, target = 6
Output: [[1,0,4],[1,2,3],[2,3,5],[0,3,1]]
Explanation: Giving placeholder `0-3` weight `1` opens the route
`0 -> 3 -> 2`, which measures `1 + 5 = 6` and matches `target`.
```

### Constraints

- `1 <= n <= 100`
- `1 <= edges.length <= n * (n - 1) / 2`
- `edges[i].length == 3`
- `0 <= ai, bi < n`
- `ai != bi`
- `wi = -1` or `1 <= wi <= 10⁷`
- `0 <= source, destination < n`
- `source != destination`
- `1 <= target <= 10⁹`
- The graph is connected and has no self-loops or duplicate edges.

## Hints

### Hint 1

Settle whether the goal is reachable at all before assigning anything; two
extreme shortest-path runs decide it.

### Hint 2

Run Dijkstra on the graph with every `-1` edge deleted. That distance is the
largest any assignment can produce, because restoring a deleted edge with
weight at least `1` can only offer shortcuts. If it already comes out below
`target`, `target` is out of reach.

### Hint 3

Now run Dijkstra granting every `-1` edge its smallest legal weight, `1`.
That distance is the smallest any assignment can produce; if even it exceeds
`target`, nothing fits either.

### Hint 4

Otherwise an assignment exists. While the current shortest distance misses
`target`, look for a `-1` edge `(u, v)` on a current shortest route whose
endpoint distances leave room: with `dis1` the shortest `source -> u`
distance and `dis2` the shortest `v -> destination` distance, filling that
edge so the gap closes routes the whole deficit through it and lands a path
exactly on `target`.

### Hint 5

Every `-1` edge that no longer matters can simply receive a huge value —
`target`, `target + 1`, or `200000000` — so it stays out of the way of the
routes that do.
