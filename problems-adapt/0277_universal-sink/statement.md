# Universal Sink

## Description

You are given `graph`, the adjacency matrix of a directed graph on `n`
vertices numbered `0` to `n - 1`. An entry of `1` at `graph[i][j]` marks an
edge from `i` to `j`; an entry of `0` marks its absence. The diagonal is
all ones, and a self-entry does not count as an edge.

A universal sink is a vertex with an incoming edge from every other vertex
and an outgoing edge to none of them. Return the label of the universal
sink, or `-1` when the graph has no such vertex.

### Example 1

```text
Input: graph = [[1,0,0],[1,1,1],[1,0,1]]
Output: 0
Explanation: Vertices 1 and 2 both have edges into 0, and row 0 has no
other 1 in it, so 0 receives from everyone and sends to nobody.
```

### Example 2

```text
Input: graph = [[1,1,0],[0,1,1],[0,0,1]]
Output: -1
Explanation: Vertex 2 sends no edges, but vertex 0 has no edge into 2 —
so 2 falls short of the definition, and every other vertex sends at
least one edge somewhere.
```

### Example 3

```text
Input: graph = [[1,0,0,1],[0,1,0,1],[0,0,1,1],[0,0,0,1]]
Output: 3
Explanation: The first three vertices all point at 3, and vertex 3
points back at none of them.
```

### Constraints

- `graph` is square with `2 <= n <= 100` rows
- every entry of `graph` is `0` or `1`
- `graph[i][i] == 1`

### Follow-up

Each question you can ask about this matrix is a single entry lookup, and
one lookup eliminates exactly one vertex from suspicion. Is that enough
leverage to settle the whole problem with at most about `3n` lookups?

## Hints

### Hint 1

One entry, one verdict. A `1` at `graph[a][b]` disqualifies `a` — a sink
sends no edges — while a `0` there disqualifies `b`, since a sink must be
pointed at by everyone. No entry leaves both alive.

### Hint 2

Apply that verdict along a walk over the vertices in order: compare the
current survivor with the next vertex, discard whichever one the entry
disqualifies, and continue. After `n - 1` comparisons exactly one suspect
remains.

### Hint 3

A survivor is a suspect, not an answer — vertices dropped early were
never compared against it, in either direction. Sweep the survivor's full
row and column before committing.
