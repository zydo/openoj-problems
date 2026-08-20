# Solutions — Minimum Starting Energy

## Greedy by Slack

Call `start - cost` a task's slack: the buffer it insists on beyond what
it actually takes from you. For a fixed ordering, the level you must
start from is the largest, over every prefix, of (energy already drained
by earlier tasks plus this task's `start`). To shrink that maximum, put
tasks with generous slack in front — while the budget is still intact is
exactly when a demanding threshold hurts most, and the cheap task ahead
of it has barely dented the level by the time it runs.

An exchange argument pins the ordering down. With `A` immediately before
`B`, the pair contributes `max(start_A, cost_A + start_B)`; run the other
way and it contributes `max(start_B, cost_B + start_A)`. Since `start` is
never below `cost`, the first arrangement is never worse precisely when
`start_A - cost_A >= start_B - cost_B`. So sorting by slack, largest
first, and sweeping once is optimal: keep a running total of drained
energy, and the answer is the largest `drained + start` seen along the
way.

On `[[3,4],[2,7],[6,13],[5,9],[1,10]]` the slacks are `1, 5, 7, 4, 9`,
giving the order `[1,10], [6,13], [2,7], [5,9], [3,4]` and prefix
requirements `10, 14, 14, 18, 18` — so 18 is the answer. Sorting
dominates the running time; among equal slacks the tie is irrelevant,
because the maximum over prefixes is unchanged by any interleaving of
them.

**Complexity:** `O(n log n)` time, `O(n)` space.
