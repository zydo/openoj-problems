# Solutions — Kth Missing Positive Number

## Binary Search on Missing Count

If `arr` had no gaps it would read `1, 2, 3, ...`, so `arr[i]` would equal
`i + 1`. The difference `missing(i) = arr[i] - (i + 1)` therefore counts
exactly how many positive integers are missing among `1..arr[i]`, and
because `arr` is strictly increasing this count never decreases as `i`
grows — which is what makes binary search applicable.

The code searches `[0, n]` for the smallest index `lo` whose missing
count is at least `k` (treating the position just past the end as having
an unbounded count, so the search always terminates). Every index before
`lo` still has fewer than `k` numbers missing, so the `k`th missing
positive integer is exactly `k` past those accounted-for slots: it sits
at `lo + k`. This single formula covers both cases at once — when `lo`
lands inside the array the answer falls in a gap between two present
values, and when `lo` reaches `n` (the whole array holds fewer than `k`
missing numbers) the answer falls beyond the last element.

**Complexity:** `O(log n)` time, `O(1)` space.
