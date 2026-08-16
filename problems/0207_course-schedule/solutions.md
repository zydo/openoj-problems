# Solutions — Course Schedule

## Kahn's Algorithm (BFS Topological Sort)

Each prerequisite pair `[a, b]` is a directed edge `b -> a`, and all courses can be finished exactly when this graph has no cycle — a cycle is a set of courses each indirectly requiring itself. The solution detects cycles with Kahn's algorithm: repeatedly remove a node with no remaining incoming edges, and if every node eventually gets removed, the graph is acyclic.

Concretely, the code builds an adjacency list plus an `indegree` count for each course, then seeds a queue with every course whose indegree is already zero (no prerequisites). Each dequeued course counts as "taken"; taking it removes its outgoing edges, so the indegree of each dependent course is decremented, and any dependent that drops to zero joins the queue. Courses inside a cycle never reach indegree zero and are never dequeued.

The check at the end compares the number of courses taken with `numCourses`: if they match, a complete topological order exists and the answer is true; otherwise a cycle trapped the remainder and the answer is false. An empty prerequisite list starts with all courses at indegree zero and trivially succeeds.

**Complexity:** `O(V + E)` time, `O(V + E)` space.
