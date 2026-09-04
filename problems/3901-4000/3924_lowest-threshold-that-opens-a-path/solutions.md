# Solutions — The Lowest Threshold That Opens A Path

Binary search the threshold and test each candidate with a zero-one shortest
path search.

## Binary search with zero-one BFS

For a fixed threshold, assign cost zero to every cheap edge and cost one to
every costly edge. A route is acceptable exactly when its total cost is at
most `k`.
A deque-based zero-one BFS finds the minimum costly-edge count from `source`
to every node: zero-cost moves go to the front and one-cost moves go to the
back. If `target` remains unreachable even when every edge is cheap, the
answer is `-1`.

Feasibility is monotone as the threshold grows, so binary search the integer
range from zero through the largest edge weight. This includes threshold zero,
which is necessary when `source == target` or when the allowance already
admits a route without making any edge cheap.

**Complexity:** `O((n + m) log W)` time, `O(n + m)` space.
