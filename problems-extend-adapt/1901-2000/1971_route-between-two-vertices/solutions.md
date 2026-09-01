# Solutions — Route Between Two Vertices

## Breadth-first search over an adjacency list

Build the graph as an adjacency list, adding each undirected edge in both
directions. Starting from `source`, a breadth-first search expands the
wavefront one hop at a time; the moment a neighbor equals `destination`,
the path exists and the search returns immediately. The visited array
guarantees each vertex is expanded at most once, so the search visits
exactly the connected component of `source`.

Because the graph is unweighted, breadth-first order also discovers
vertices in order of distance from `source`, though here only reachability
matters, not the length of the path. A `source == destination` shortcut
returns `true` before the queue is even built; when the queue finally
empties without ever reaching `destination`, the two vertices lie in
different components and the answer is `false`.

Every edge is scanned once while building the adjacency list and again
during the traversal, and the visited array plus the queue use space
proportional to the vertex count.

**Complexity:** `O(n + e)` time, `O(n + e)` space, where `n` is the number
of vertices and `e` is the number of edges.
