# Solutions — Best Clip Level for a Target Sum

## Binary Search with Tie Adjustment

For a level `value`, the clipped total `sum(x if x < value else value)` never
decreases as `value` rises — lifting the level can only raise the terms still
pinned at it. The curve therefore crosses any target from below exactly once,
and a lower-bound search over `[0, max(nums)]` locates the smallest level
`lo` whose total reaches `target`. Levels beyond the maximum element clamp
nothing and are never worth probing.

The answer must be `lo` or `lo - 1`: below `lo` sits the highest level whose
total falls short of the target, and since the total is piecewise linear and
rising in the level, the nearest achievable sum to `target` occurs at one of
the two levels straddling the crossing. Comparing the two absolute
differences picks the winner, and writing the comparison with `<=` favors
the smaller level on a tie — precisely the stated tie rule.

The endpoints are safe: at level 0 the total is 0, strictly under any legal
target (`target >= 1`), so the crossing exists and `lo` is at least 1; thus
`lo - 1` never dips below zero.

**Complexity:** `O(n · log(max(nums)))` time, `O(1)` space.
