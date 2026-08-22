# Solutions — Fewest Course Months

## Topological sort with finish times

Since courses may all run at once, the earliest month a course can finish
is its own duration added to the latest finish among its prerequisites —
the longest weighted chain ending there. That is a longest-path computation
over the prerequisite DAG, and it fits a topological order exactly: when a
course's in-degree falls to zero, every prerequisite has already taken its
final finish time, so the course's own finish time is correct the moment it
is computed.

Kahn's algorithm supplies the order. Courses without prerequisites begin
at month 0 and finish at their own duration. Whenever a course leaves the
queue, its outgoing edges relax each successor — `finish[course] +
time[nxt]` kept when larger — and decrement the successor's in-degree;
successors reaching zero join the queue with their finish times already
settled. The relaxation is a maximum, not an assignment, because a course
waits for _all_ of its prerequisites, not merely the first to clear.

The answer is the largest finish time across all courses: to finish
everything is to finish the chain that ends last. An empty `precedence`
list needs no special handling (every course starts immediately), and the
guaranteed acyclicity means the queue always drains.

**Complexity:** `O(V + E)` time, `O(V + E)` space.
