# Solutions — Seconds Needed to Level a Mountain

## Binary Search on the Deadline

Ask the question backwards: instead of hunting for the best schedule,
test a deadline. Deadlines are monotone — any crew that levels the
mountain by time `T` also levels it by every later time, since workers
may always be given less to do. That monotonicity is exactly what a
binary search needs, and a generous upper end for the search interval is
`max(workerTimes) · H·(H+1)/2`: the bill for the slowest worker doing the
whole job unaided. The answer is the smallest feasible deadline in that
interval.

Testing a deadline `T` means counting how many units the whole crew can
clear. A worker with base time `wt` who removes `x` units pays the
arithmetic series `wt · x(x+1)/2`, so its capacity is the largest `x`
satisfying `x·(x+1) ≤ 2T/wt`. Solving that quadratic with an integer
square root — `(isqrt(1 + 4c) - 1) // 2` for `c = 2T // wt` — keeps every
step in exact integer arithmetic, which the final comparison demands.
Adding the capacities of all workers (stopping early once the running
total passes `H`) decides feasibility of `T`.

Why a feasible capacity sum always corresponds to a real schedule:
height units are indistinguishable, so the workers may be assigned any
unit counts up to their individual caps, and the elapsed time of such an
assignment is the largest individual series, which is at most `T` by
construction. Nothing about the order of removal matters because only
each worker's own count enters its bill.

For `mountainHeight = 5` and `workerTimes = [3,1,2]`, the deadline `T = 5`
gives capacities `1, 2, 1` — four units short — while `T = 6` gives
`1, 3, 2`, whose sum reaches `5`, so the answer is `6`. A lone worker
collapses to the pure triangular bill: `H = 6`, `wt = 5` costs
`5 · 21 = 105`. With `w` workers and an upper bound `T`, the search makes
`O(log T)` passes over the crew, each pass `O(w)`.

**Complexity:** `O(w log T)` time, `O(1)` extra space.
