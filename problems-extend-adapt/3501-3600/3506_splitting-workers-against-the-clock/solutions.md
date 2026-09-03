# Solutions — Splitting Workers Against The Clock

The splitting process is a full binary tree: every worker that splits has two
children, and a worker that never splits is a leaf that takes one job.
A leaf at depth d only becomes available at d * splitTime, so the deadline
a job can meet depends on the depth of the leaf assigned to it — and the
leaf-depth multisets of a binary tree are exactly the Kraft-legal ones,
those with `sum 2^-d <= 1`.

## Deadline binary search over a Kraft feasibility sum

Deadline T is feasible when every job i can sit on a leaf no deeper than
`D_i = (T - jobs[i]) / splitTime`, and a legal multiset of leaf depths
with `d_i <= D_i` exists. Both conditions reduce to one check: the Kraft
sum `sum 2^-D_i <= 1` (taking every job at its full bound minimizes the
sum, and each bound must also be at least 1 since one job per leaf
forces at least one split). The sum is monotone in T — larger deadlines
only loosen the bounds — so binary search finds the minimal feasible T
between `max + splitTime` and `max + (n - 1) * splitTime` (a chain of
splits, whose depths `1..n-1` are always Kraft-legal).

The check is O(n) with no sorting: each job contributes the slot term
`2^-D_i`, evaluated exactly in integer arithmetic by summing `2^(30 - D_i)`
against a `2^30` budget (jobs with bounds beyond depth 30 fit together
in less than one 2^-30 unit of slack, so they count as a single unit).
The sums stay far below 2^63, and the largest feasible deadline is about
`10^9 + 10^5 * 10^9 ≈ 10^14`, so the answer is returned as a 64-bit
integer.

**Complexity:** `O(n log(n * max(splitTime)))` time, `O(1)` space.
