# Solutions — Most Separated Points on a Square Boundary

## Rim coordinates, binary search, and greedy hops

For two points that both sit on the boundary of an axis-aligned square, the
Manhattan distance between them equals the shorter of the two rim walks
joining them. So give every point its clockwise rim coordinate: `x` along
the bottom edge, `side + y` along the right, `2 * side + (side - x)` along
the top, `3 * side + (side - y)` along the left. Distances become
`min(gap, 4 * side - gap)` on a circle of circumference `4 * side`, and the
answer is at most `2 * side`, the corner-to-opposite-corner walk.

That bound makes the search a binary one: for a candidate `d`, deciding
whether `k` points can be pairwise at least `d` apart is monotone in `d`, so
bisect `[0, 2 * side]`. A corner belongs to two edges, but the rim map
assigns it one consistent coordinate, so nothing is double-counted.

Testing one `d` is a hop game. Sort the coordinates and append a copy shifted
by `4 * side`, opening the circle into a line. Precompute `nxt[j]`, the first
index whose coordinate reaches `arr[j] + d` — one binary search per index.
Then try every starting point `i`: hop `k - 1` times along `nxt`, requiring
every landing inside the window of `n` circular successors, and finally check
`arr[cur] + d <= arr[i] + 4 * side`, which is the wrap-around step back to
the start. When all `k` hops close the ring, the chosen points are pairwise
`d` apart in both directions, which on the rim is exactly pairwise Manhattan
`d`; starting from every `i` covers every possible member of the optimal
set.

Example 2 shows the crowning constraint at work: the five points sit at rim
coordinates 0, 2, 5, 6, 7, and `d = 2` would need four of them spaced two
rim units apart all the way around — only the pattern 0, 2, 4, 6 qualifies,
and coordinate 4 is absent. So the answer falls to 1, realized by any four
picks. Duplicate coordinates (two points at the same rim spot) make large
`d` fail through the strict successor comparison, and `d = 0` is trivially
feasible, anchoring the search.

**Complexity:** `O(n * (k + log n) * log(side))` time, `O(n)` space.
