# Solutions — Maximum Contiguous Mean Score

## Partition DP with prefix sums

Build prefix sums so the mean of `values[i:j]` is available in constant time.
The remaining choice is where each group ends, which naturally leads to a
dynamic program over suffixes.

Let the rolling array `dp[i]` represent the best score for the suffix beginning
at `i` when a fixed number of groups is used. For one group, no cut is
possible, so initialize every entry to the mean of its entire suffix.

To add another group, choose an endpoint `j` for the first group. Its score is
the mean from `i` through `j - 1`, followed by the previously computed optimum
`dp[j]` for the remaining groups. Take the maximum over all endpoints that
leave enough elements for those later groups. Repeating this transition up to
`groupLimit` groups produces the requested value at index zero.

All input values are positive, so making an additional cut cannot reduce the
score: if a nonempty segment is split immediately before its final value, the
two resulting means sum to at least the original mean. Thus the optimum with
at most the limit is attained using exactly the limit, and the last DP pass is
sufficient.

Only the preceding group-count layer is read during a transition, allowing a
single length-`n` array to carry the state.

**Complexity:** `O(groupLimit · n²)` time and `O(n)` space.
