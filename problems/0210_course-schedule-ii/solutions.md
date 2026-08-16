# Solutions — Course Schedule II

## Kahn's Algorithm (BFS Topological Sort)

A valid course order is exactly a topological ordering of the directed graph where each pair `[a, b]` is the edge `b -> a`. Kahn's algorithm produces such an ordering — or proves none exists — by repeatedly emitting a course whose prerequisites have all been emitted, which is precisely the definition of a legal next course.

The code builds an adjacency list and an `indegree` array (the number of unfinished prerequisites per course), then seeds a queue with all courses at indegree zero. Each dequeued course is appended to `order`, and its edges are "consumed" by decrementing the indegrees of the courses that depend on it; any course that falls to zero becomes available and joins the queue. This layer-by-layer peeling guarantees every course is emitted only after all of its prerequisites, and the flexibility in which zero-indegree course to take next is why multiple correct orders exist.

If the graph contains a cycle, the courses on it keep positive indegrees forever and never enter the queue, leaving `order` shorter than `numCourses`; in that case the function returns an empty list, as the problem requires, rather than a partial order. When the loop drains every course, the collected order is a complete valid answer.

**Complexity:** `O(V + E)` time, `O(V + E)` space.
