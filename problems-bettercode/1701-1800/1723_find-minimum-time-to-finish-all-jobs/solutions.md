# Solutions — Find Minimum Time to Finish All Jobs

## Pruned Backtracking (Branch and Bound)

With at most 12 jobs, the assignment space `k^n` is small enough to search exhaustively provided aggressive pruning. The solution assigns jobs one at a time in a depth-first search, tracking the per-worker loads in a single array, and carries the best maximum load found so far in `best`, initialized pessimistically to `sum(jobs)`. When all jobs are placed, the candidate answer is `max(loads)`; every complete assignment is a legal one, so the search returns the true optimum once it finishes.

Three prunings make it fast. Jobs are sorted in descending order first, so the largest loads appear at the shallowest levels where the bound tightens soonest. A branch is abandoned as soon as it cannot improve: if `loads[w] + jobs[i] >= best`, placing job `i` on worker `w` is pointless. Symmetry is cut two ways — a `seen` set skips workers whose current load was already tried for this job (identical subproblems), and after trying a job on an empty worker the loop breaks, because all remaining empty workers are interchangeable.

These prunings never remove a branch that could contain a strictly better assignment: they only drop branches whose lower bound already reaches `best` or that duplicate, state-for-state, a branch explored earlier. The worst case remains exponential in `n`, but with `n <= 12` and the descending order plus symmetry cuts, the practical search tree is far smaller. Space is just the load array, the `seen` set per level, and the recursion stack of depth `n`; the stated time bound is the pruned worst case.

**Complexity:** `O(k^n)` time, `O(n + k)` space.
