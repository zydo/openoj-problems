# Solutions — Apply Interval Updates

## Difference Array

Instead of writing `delta` into every covered position, record only the two
boundaries where its effect changes. For `[left, right, delta]`, add `delta`
at `left` and subtract it at `right + 1`. Contributions from overlapping
updates combine in these boundary markers.

A prefix sum over the markers gives the amount active at each array index.
An update joins that running total at `left` and leaves immediately after
`right`, so it contributes exactly where its closed interval says it should.
Allocating `length + 1` marker positions also makes `right + 1` valid for an
update that reaches the final output position.

For example, the first sample produces boundary markers whose running totals
are `[1, 5, 3, 2, -2]`. Negative deltas need no special handling, and an empty
update list simply leaves every running total at zero.

**Complexity:** `O(k + n)` time for `k` updates and output length `n`, with
`O(n)` auxiliary space.
