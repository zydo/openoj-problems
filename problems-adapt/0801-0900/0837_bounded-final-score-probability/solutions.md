# Solutions — Bounded Final Score Probability

## Sliding-window probability DP

Let `dp[s]` denote the probability that the process ever reaches score `s`.
Any transition into `s` comes from one of the preceding `drawMaximum` scores,
and every draw value has probability `1 / drawMaximum`. Only predecessors
below `stopScore` can transition because reaching the stopping threshold ends
the process.

The recurrence is therefore the sum of the active predecessor probabilities
divided by `drawMaximum`. Maintain that sum as a sliding window: add `dp[s]`
when `s` is still below the stopping threshold, and remove the state that has
moved more than `drawMaximum` positions behind. This reduces each transition
from a range scan to constant work.

Seed `dp[0] = 1`. Probabilities for terminal scores from `stopScore` through
`scoreLimit` contribute to the answer but never enter the active window. The
implementation uses compensated addition for the final accumulation so small
floating-point errors do not build up across thousands of terms.

Two cases return one immediately. If `stopScore` is zero, the initial score is
already final. Otherwise the greatest terminal score is
`stopScore - 1 + drawMaximum`; when `scoreLimit` reaches that value, every
outcome is accepted.

**Complexity:** `O(scoreLimit)` time and `O(scoreLimit)` space.
