# Solutions — Task Scheduler

## Frequency Formula

Instead of simulating a scheduler, the solution derives the schedule length in closed form from the task frequencies. The most frequent letter is the bottleneck: its occurrences must be spaced `n + 1` slots apart, so it alone frames `(max_freq - 1)` full cycles of length `n + 1`, followed by a final partial run. If `num_max` letters tie for the maximum frequency, each of them occupies one slot in that final run, giving `(max_freq - 1) * (n + 1) + num_max` intervals.

That frame is a lower bound, but it is only the answer when idle slots actually appear. When there are enough distinct tasks to fill every gap, the schedule has no idling at all and the total is simply the number of tasks. The two cases are reconciled by taking the maximum of the two quantities: the frame bound dominates when tasks are too homogeneous to fill the gaps, and the task count dominates otherwise.

Computing the inputs is one pass with a `Counter`, then a scan over its values (at most 26, one per letter) for the maximum frequency and the number of letters achieving it. The cooling bound `n` can be 0, in which case the frame formula collapses toward the task count and the maximum still returns the right value.

No per-task bookkeeping or heap is needed — the whole answer is three arithmetic operations on two statistics.

**Complexity:** `O(T)` time, `O(1)` space, where `T` is the number of tasks.
