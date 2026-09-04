# Counting Inversion-Free Windows

## Description

Given an integer array `nums`, call a subarray **inversion-free** when its
values never step down: there is no pair of positions `i < j` inside the
subarray with `nums[i] > nums[j]`.

You also get a list of `q` queries, where query `i` is a pair
`queries[i] = [li, ri]`. For each pair, count the inversion-free subarrays
that lie completely inside the slice `nums[li..ri]`.

Return an array of length `q` whose `i`-th entry answers the `i`-th query.
Every one-element subarray is inversion-free.

### Example 1

```text
Input: nums = [1,3,2,4], queries = [[0,3],[2,3],[0,1]]
Output: [6,3,3]
Explanation:
    Query [0,3] covers [1,3,2,4]. Its ascending stretches are [1,3] and
    [2,4]; the 3 subarrays inside each stretch qualify and nothing
    crossing the 3 → 2 drop does, giving 6.
    Query [2,3] covers [2,4], which is already non-decreasing, so all 3
    of its subarrays count.
    Query [0,1] covers [1,3] and likewise counts 3.
```

### Example 2

```text
Input: nums = [5,5,4], queries = [[0,2],[1,2]]
Output: [4,2]
Explanation:
    Query [0,2] covers [5,5,4]: the three single elements plus [5,5]
    qualify, while [5,4] steps down — 4 in total.
    Query [1,2] covers [5,4]; only the two single elements qualify.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`
- `1 <= queries.length <= 10⁵`
- `queries[i] = [li, ri]`
- `0 <= li <= ri <= nums.length - 1`

## Hints

### Hint 1

An inversion-free subarray can never span a descent, so every qualifying
subarray sits inside one maximal non-decreasing stretch — and a stretch of
length `L` contains `L × (L + 1) / 2` subarrays.

### Hint 2

For each index, record how far left its non-decreasing stretch reaches,
and build running sums so that all stretches lying wholly inside a query
window are totaled in constant time.

### Hint 3

One stretch may straddle the query's left endpoint; only the portion at or
after `l` belongs to the answer. Since the recorded stretch starts only
move rightward, a single binary search finds where the wholly-inside
region begins.
