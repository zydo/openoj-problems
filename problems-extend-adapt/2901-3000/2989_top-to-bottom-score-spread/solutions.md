# Solutions — Top-To-Bottom Score Spread

## Highest total minus lowest total

Each learner's total score is the sum of their three homework columns,
and the answer is the gap between the largest and the smallest of those
per-row sums. A CTE computes `total_score` for every learner in one pass,
and the outer query reduces that column with a single expression:
`MAX(total_score) - MIN(total_score)`.

The aggregate needs no deduplication or tie handling. `MAX` and `MIN`
take the extremes of the whole multiset of totals, so learners sharing
the top or the bottom total collapse silently, and equal totals
everywhere simply produce `0`. Because the outer query is a plain
aggregate over the CTE, its row count is fixed at exactly one — the
shape the output contract asks for, with no wrapper query needed.

Computing the totals walks the `n` rows once, and the aggregate walks the
`n` totals once more, materializing one integer per learner along the
way. **Complexity:** `O(n)` time, `O(n)` space.
