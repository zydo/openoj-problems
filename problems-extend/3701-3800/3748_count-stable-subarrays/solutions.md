# Solutions — Count Stable Subarrays

A subarray is stable exactly when it reads non-decreasing, so stability is a
property of runs: cut `nums` into its maximal non-decreasing segments and no
stable subarray ever crosses a boundary between two of them. For one end
index `e`, the starts that yield a stable subarray are exactly
`s ∈ [left[e], e]`, where `left[e]` is the smallest start whose window
through `e` still reads non-decreasing — inside a run that is the run's own
start, and after a drop it resets to just past that drop. A single pass
computes `left[]` by carrying the running start forward whenever
`nums[i] >= nums[i - 1]` and resetting it to `i` otherwise.

Counting per query then only needs two prefix sums over those endpoints:
`base[e] = e - left[e] + 1` counts every stable subarray ending at `e`
within its own run, and `full[e] = left[e]` will count, summed over a range,
every subarray that stretches all the way back to the query's left edge.
For a query `[l, r]`, ends `e` with `left[e] >= l` contribute their full run
window `base[e]`, while earlier ends — sitting past a drop somewhere inside
`[l, r]` — are clipped to the query edge and contribute `e - l + 1`. Because
`left[]` never decreases, the two populations split at one threshold `p`,
found by binary search: the clipped ones are exactly `e ∈ [l, p)`.

So each answer collapses to `sum(base[l..r]) + sum(full[p..r]) - l * (r - p
+ 1)` read off the prefix arrays in constant time after the linear scan,
where the subtracted term unfolds the clipping formula over that suffix.
Values reach roughly `n * (n + 1) / 2` — about `5 * 10^9` at `n = 10^5` —
so every sum is accumulated in 64-bit integers and returned as such.

**Complexity:** `O(n + q log n)` time, `O(n)` space.
