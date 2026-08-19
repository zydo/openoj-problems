# Solutions — Fewest Course Rounds

## Layered Topological Sort (Kahn's Algorithm)

Give every course a depth: zero when nothing precedes it, otherwise one past the deepest of its prerequisites. A course of depth `d` cannot possibly run before round `d + 1`, and putting every depth-`d` course into round `d + 1` meets that floor for all of them at once. So the answer is the number of distinct depths, which is the count of courses along the longest chain of arrows. Kahn's algorithm produces exactly those depth layers if you pop the queue a layer at a time.

Two arrays carry the state. `adjacency[a]` lists the courses that `a` unlocks, and `indegree[b]` counts how many prerequisites `b` is still waiting on; both are filled by one pass over `precedence`. Every course whose count is already zero seeds the queue — that is the opening round.

The outer loop is where the layering happens. Record how many entries the queue holds right now, then pop exactly that many: those are the courses of the current round, and any successor whose count falls to zero while they are popped belongs to the *next* round, not this one. Reading the length up front is the whole trick; popping until the queue empties would count courses instead of rounds. One increment of the round counter per outer pass gives the schedule length.

A cycle never lets its members reach zero, so they are never enqueued, the queue runs dry early, and the tally of popped courses stops short of `n`. That shortfall is the signal to return `-1`. Otherwise every course was popped once and the round counter is the answer.

Each course is enqueued and popped once, and each pair in `precedence` is relaxed once when its source is popped.

**Complexity:** `O(n + E)` time, `O(n + E)` space.
