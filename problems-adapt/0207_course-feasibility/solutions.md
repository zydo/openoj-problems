# Solutions — Course Feasibility

Two loop tests on the same prerequisite graph: peel it from its free ends, or
walk its chains depth-first and watch for one folding back onto itself.

## kahn

Each entry `[a, b]` is an arrow `b -> a`, and the programme is completable
exactly when this graph holds no loop — a loop is a set of courses each
indirectly waiting on another. The peel makes that visible. Build an adjacency
list plus, for each course, a count of the arrows entering it; a course with a
zero count has nothing left in front of it and starts in the queue.

Every course leaving the queue counts as completed. Completing it removes the
arrows leaving it, so each course it feeds loses one from its count, and any
course whose count reaches zero joins the queue. Courses on a loop never see
their counts reach zero, so they never leave — and the final comparison of
completed courses against `courseCount` turns that shortfall into the answer.
With no rules at all, every course starts at zero and the peel finishes
immediately.

**Complexity:** `O(V + E)` time, `O(V + E)` space.

## dfs_cycle

The same graph, attacked from the depth side. Every course carries a state —
untouched, currently on the walking path, or finished — and the sweep descends
from each untouched course as far as its arrows reach. The tell is an arrow
into a course still on the current path: that course lies above the walker, so
the requirements close into a circle, and the answer is `false` the instant one
appears.

A course whose entire downstream set has been walked is marked finished and
never descended into again, so a prerequisite shared by several courses costs
one walk rather than one per dependent. The walk keeps its own stack of
(course, next-arrow) frames, each resuming where it left off and discarded once
its arrows run out, because a programme whose rules form one long chain would
otherwise exhaust the language's call stack — Python's default thousand frames
among them.

If every descent finishes without ever meeting a course on its own path, no
course indirectly waits on itself, and the whole programme is completable.

**Complexity:** `O(V + E)` time — each course joins a path once and each arrow
advances one frame's index once. `O(V)` extra for the states, plus the frames,
which on a chain-shaped programme can hold one per course.
