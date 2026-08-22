# Solutions — Smallest Maximum Workload

Both answers lean on the same smallness: twelve jobs at most means at most
`2^n` distinct sets of them, so the assignment question can be carried by
named sets rather than sequences. The pruned search never names them — it
dives through the tree of placements and lets its cuts decide how much of
the tree gets walked, so its speed is a practical fact, not a promise. The
subset table pays up front instead: every set of served jobs, for every
count of workers, gets one exact entry, and the optimum is read off a
finished table whose cost was fixed before the first job was seen.

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

## Bitmask Subset DP

Name each set of jobs by a bitmask and the assignment question becomes a
table. `dp[i][mask]` is the lightest maximum load achievable when the jobs in
`mask` have been handed to `i` workers. The first row is the subset-sum table
`sums[mask]` itself — one worker leaves nothing to choose — built by peeling
off one lowest-numbered job at a time. Placing the next worker means deciding
what that newcomer carries: for every submask `sub` of `mask`, the newcomer
takes `sub` while the workers already placed must cover `mask ^ sub`, and the
worse side of the pair is the finished assignment's maximum, so
`dp[i][mask] = min over sub of max(dp[i-1][mask ^ sub], sums[sub])`.

Enumerating every subset of every mask is the classic `3^n` sweep — each of
the `n` bits sits in the mask, in the submask, or in neither. One ordering
cut applies: workers are interchangeable, so the worker being placed may be
required to take the lowest-numbered job still present in `mask`; only
submasks holding that bit are distinct choices, which halves the sweep
without discarding any partition — whichever worker took that job can simply
be renamed the newcomer. Two rows are alive at a time (`prev` and `cur`)
alongside the sum table, and `prev[full]` after the last pass is the answer,
since another worker never raises the achievable maximum.

The contrast with the search above is the point: nothing here reacts to the
data. The `k - 1` passes run unconditionally over the same fixed sweep, so
the step count is a guarantee rather than an observation, and the worst case
is exactly as tame as the best one.

**Complexity:** `O(3^n · k)` time, `O(2^n)` space.
