# Solutions — Least-Cost Split Within a Span

## Sliding window with dual Fenwick trees

The first piece always opens at index 0, so `nums[0]` is a fixed tax. Suppose
the second piece opens at `i1`: every later opening `i2, ..., i_{k-1}` must be
a strictly larger index at most `dist` past `i1`, and conversely any `k - 2`
distinct positions inside `(i1, i1 + dist]` are legal openings. So each `i1`
reduces to one question — what do the `k - 2` smallest values in
`nums[i1+1 .. i1+dist]` add up to? — and the answer is the minimum of
`nums[0] + nums[i1] + that sum` over all `i1` whose stretch is long enough.

Sweep `i1` left to right and maintain the stretch's multiset with two Fenwick
trees over coordinate-compressed values: one counts how many window elements
hold each value, the other accumulates their sum. Binary lifting down the
count tree locates the `(k-2)`-th smallest value; prefix count and sum queries
below it, plus the partial count times that value, give the sum of the
`k - 2` smallest. Each slide of the window removes `nums[i1+1]` and inserts
`nums[i1+1+dist]` — a couple of `O(log n)` updates — after seeding the window
for `i1 = 1` before the loop. Compression keeps the trees small next to values
up to 10^9, and duplicates cost nothing extra because the trees count
occurrences.

Worked on the third example, `[7, 5, 6, 5, 4, 3, 9]` with `k = 4` and
`dist = 3`: at `i1 = 3` the stretch `nums[4..6]` is `{4, 3, 9}`, whose two
smallest sum to 7, giving `7 + 5 + 7 = 19` — the winning candidate.

**Complexity:** `O(n log n)` time, `O(n)` space.
