# Non-Adjacent Loot On A Color Change

## Description

You are given two integer arrays `nums` and `colors`, both of length
`n`. Position `i` holds loot worth `nums[i]` and is marked with the
color `colors[i]`.

Pick any set of positions and collect their loot, subject to one rule:
two neighbouring positions may both be picked only when their colors
differ. If neighbours share the same color, at most one of them can be
picked. Positions that are not adjacent never interact.

Return the largest total the picked loot can reach.

### Example 1

```text
Input: nums = [2,7,9,3,1], colors = [1,2,1,2,1]
Output: 22
Explanation: Every pair of neighbours differs in color, so the rule
never binds and all five positions may be picked: 2 + 7 + 9 + 3 + 1 =
22.
```

### Example 2

```text
Input: nums = [5,10,5], colors = [1,1,2]
Output: 15
Explanation: Positions 0 and 1 share color 1, so they cannot both be
picked. Positions 1 and 2 differ (1 vs 2) and may be taken together:
10 + 5 = 15 beats picking 5 + 5 from the ends.
```

### Example 3

```text
Input: nums = [8,6,7,4], colors = [3,3,5,5]
Output: 15
Explanation: The pairs (0,1) and (2,3) share colors and are blocked;
the middle pair (1,2) is allowed. The best set picks positions 0 and 2
for 8 + 7 = 15; taking 6 with either neighbour would force dropping
more than it gains.
```

### Constraints

- `1 <= n == nums.length == colors.length <= 10⁵`
- `1 <= nums[i], colors[i] <= 10⁵`

## Hints

### Hint 1

Scan the positions left to right with dynamic programming.

### Hint 2

Let `dp[i]` be the best total reachable using only positions up to
`i`. Any optimal set either skips `i`, worth `dp[i - 1]`, or picks it.

### Hint 3

Picking `i` alongside its neighbour `i - 1` is legal exactly when their
colors differ; the best set up to `i - 1` can then always be extended.
Otherwise the previous pick must come from `dp[i - 2]`, so the take is
`nums[i] + dp[i - 2]`.

### Hint 4

Skipping is always allowed, so `dp` never decreases — that monotonicity
makes `dp[i - 1]` dominate `dp[i - 2]` whenever the colors permit an
adjacent take, and two rolling values carry the whole scan.
