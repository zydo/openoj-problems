# Solutions — Smallest Maximum Workload

## Pruned Backtracking (Branch and Bound)

Twelve jobs at most, so the `k^n` assignment space is small enough to search
outright if the search is pruned hard. Jobs are placed one at a time down a
depth-first path; a single array holds each worker's running load, and `best`
carries the lightest maximum load seen so far, seeded pessimistically with
`sum(jobs)`. Once every job sits somewhere, `max(loads)` is a complete,
legal candidate, so a full search is guaranteed to end on the true optimum.

Three cuts keep the tree small. Sorting the jobs descending brings the
heaviest placements to the top of the search, where a weak bound gets exposed
before the tree fans out. A branch dies the moment it stops looking promising:
when `loads[w] + jobs[i] >= best`, putting job `i` on worker `w` cannot beat
what is already in hand. Interchangeability is charged twice — a `seen` set
skips workers whose current load equalled one already tried for this job (the
same subproblem twice), and after the job is tried on one empty worker the
loop stops, since every remaining empty worker offers an identical choice.

None of the cuts can discard a strictly better assignment: they only drop
branches whose bound already reaches `best`, or branches that replay, state
for state, something explored earlier. The worst case stays exponential in
`n`, but with `n <= 12`, the descending order, and the symmetry cuts, the
tree that actually gets walked is far smaller. Memory is the load array, the
per-level `seen` set, and the recursion stack.

**Complexity:** `O(k^n)` time, `O(n + k)` space.
