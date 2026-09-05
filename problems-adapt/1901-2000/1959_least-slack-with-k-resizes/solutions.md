# Solutions — Least Slack With K Resizes

## Segment Waste Table and a Partition DP

At most `k` resizings cut the timeline into at most `k + 1` stretches, each
served by a single capacity. Within a stretch the optimal capacity is the
largest demand there — anything smaller is invalid at the peak moment, and
anything larger gives away slack at every moment — so a stretch covering
`nums[i..j]` wastes `g[i][j] = max(nums[i..j]) · (j - i + 1) - sum(nums[i..j])`.
Choosing capacities is therefore the same as cutting the array into at most
`k + 1` contiguous stretches with minimum total waste: an interval partition
DP.

The `g` table costs `O(n²)` altogether: anchor the start `i`, slide `j`
rightward carrying a running maximum, and read each stretch sum straight off
a prefix-sum array. The DP layer is `dp[j][i]`, the least waste for covering
the suffix that starts at `i` with exactly `j` stretches; the base
`dp[0][n] = 0` says an empty tail is free, and

    dp[j][i] = min over t >= i of g[i][t] + dp[j-1][t+1]

places the first stretch's cut. Filling `j` upward and `i` downward means
every state consulted — shorter suffix, one fewer stretch — is already
final. The answer is `dp[k+1][0]`, and using all `k + 1` stretches never
hurts: cutting a stretch in two replaces one capacity sized to the stretch's
maximum with two capacities sized to maxima no larger, so the waste cannot
rise. For `[5,40,6,7]` with one resize the table prices `[5,40]` at 35 and
`[6,7]` at 1, and no other cut does better than 36.

With `n <= 200` and `k <= n - 1` the three nested loops stay in the low
millions of iterations; memory is dominated by the `n × n` waste table.

**Complexity:** `O(k·n²)` time, `O(n²)` space.
