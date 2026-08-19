# Count Shortest Routes

## Description

A road network has `n` junctions numbered `0` to `n - 1`, joined pairwise by
undirected roads; the network is connected and no pair of junctions shares
more than one road. Each road `roads[i] = [u, v, t]` links junctions `u` and
`v` and takes `t` minutes to drive.

Count the distinct routes that go from junction `0` to junction `n - 1` in
the least possible time. Two routes differ when their edge sequences differ.
Because the count can be enormous, report it modulo `10⁹ + 7`.

### Example 1

```text
Input: n = 6, roads = [[0,1,3],[0,2,3],[0,3,3],[0,4,3],[1,5,3],[2,5,3],[3,5,3],[4,5,3]]
Output: 4
Explanation: Every route from 0 to 5 must cross from the first five junctions
to junction 5, and each hop costs 3 plus 3 = 6 minutes. There are four
middle junctions to hop through, hence four fastest routes.
```

### Example 2

```text
Input: n = 3, roads = [[0,1,4],[1,2,4],[0,2,9]]
Output: 1
Explanation: Driving 0 -> 1 -> 2 takes 8 minutes; the direct road takes 9,
so it is not part of any fastest route.
```

### Example 3

```text
Input: n = 4, roads = [[0,1,4],[1,3,4],[0,2,2],[2,3,6],[0,3,9]]
Output: 2
Explanation: 0 -> 1 -> 3 and 0 -> 2 -> 3 both cost 8 minutes, and the
9-minute direct road again loses. Two routes tie for fastest.
```

### Constraints

- `1 <= n <= 200`
- `n - 1 <= roads.length <= n * (n - 1) / 2`
- `roads[i].length == 3`
- `0 <= u_i, v_i <= n - 1` with `u_i != v_i`
- `1 <= time_i <= 10⁹`
- at most one road joins any pair of junctions
- every junction is reachable from every other junction

## Hints

### Hint 1

Start by finding the fastest time from junction 0 to each junction — a
priority-queue sweep over positive travel times does it.

### Hint 2

An edge `u -> v` can appear in a fastest route only when
`dist[u] + t == dist[v]`. Those edges form a directed acyclic graph.

### Hint 3

Count source-to-sink paths on that graph by dynamic programming, adding
counts modulo `10⁹ + 7`.
