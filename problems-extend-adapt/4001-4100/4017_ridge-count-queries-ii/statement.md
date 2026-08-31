# Ridge Count Queries II

## Description

You are given an integer array `nums` of length `n` and a 2D integer array
`queries`.

Call a subarray `nums[i..j]` a ridge subarray when it holds at least 3
elements and some index `k` strictly between `i` and `j` satisfies both
`nums[k] > nums[k - 1]` and `nums[k] > nums[k + 1]` — a strict local peak
somewhere in its interior.

Each query is one of two kinds:

- `[1, li, ri]`: report how many ridge subarrays lie entirely within
  `nums[li..ri]`.
- `[2, indexi, vali]`: set `nums[indexi]` to `vali`, affecting every query
  that follows.

Return an array `answer` holding the response to each type-1 query, in the
order the queries appear.

### Example 1

```text
Input: nums = [2,5,3,6], queries = [[1,0,3],[2,1,2],[1,0,3]]
Output: [2,0]
Explanation:
    Query [1, 0, 3]: within nums[0..3], the subarray [2,5,3] has k = 1
    as a peak (5 > 2 and 5 > 3), and [2,5,3,6] shares that same peak at
    k = 1. The subarray [5,3,6] has no valid peak. Two ridge subarrays.
    Query [2, 1, 2]: nums[1] becomes 2. The array is now [2,2,3,6].
    Query [1, 0, 3]: no index in the array now beats both neighbors, so
    no ridge subarray exists.
    Thus, answer = [2, 0].
```

### Example 2

```text
Input: nums = [7,6,7,6], queries = [[1,1,3],[2,2,4],[1,0,2]]
Output: [1,0]
Explanation:
    Query [1, 1, 3]: the only length-3-or-more subarray inside nums[1..3]
    is [6,7,6], with k = 2 a peak (7 > 6 and 7 > 6). One ridge subarray.
    Query [2, 2, 4]: nums[2] becomes 4. The array is now [7,6,4,6].
    Query [1, 0, 2]: the subarray [7,6,4] has no valid peak, so no ridge
    subarray exists.
    Thus, answer = [1, 0].
```

### Example 3

```text
Input: nums = [4,8,3,9,2], queries = [[1,1,3],[2,3,1],[1,0,4]]
Output: [0,3]
Explanation:
    Query [1, 1, 3]: the subarray [8,3,9] has no valid peak — its only
    candidate index is not greater than both neighbors — so the count is
    0.
    Query [2, 3, 1]: nums[3] becomes 1. The array is now [4,8,3,1,2].
    Query [1, 0, 4]: subarrays [4,8,3], [4,8,3,1], and [4,8,3,1,2] all
    share the peak at k = 1 (8 > 4 and 8 > 3), while every subarray
    starting past index 0 has no valid peak. Three ridge subarrays.
    Thus, answer = [0, 3].
```

### Constraints

- `3 <= n == nums.length <= 10⁵`
- `0 <= nums[i] <= 10⁵`
- `1 <= queries.length <= 10⁵`
- `queries[i] = [1, li, ri]` or `queries[i] = [2, indexi, vali]`
- `0 <= li < ri <= n - 1`
- `0 <= indexi <= n - 1`
- `0 <= vali <= 10⁵`

## Hints

### Hint 1

Track every index `p` with `nums[p] > nums[p - 1]` and `nums[p] > nums[p +
1]`. After an update at `index`, only the peak status of `index - 1`,
`index`, and `index + 1` can possibly change.

### Hint 2

If the peaks strictly inside a query range `[l, r]` are
`p1 < p2 < ... < pt`, attribute every ridge subarray to its leftmost peak.
The total is `(p1 - l)(r - p1) + sum((pi - pi-1)(r - pi))` over
`2 <= i <= t`.

### Hint 3

Keep the peak indices in a sorted set, and for each peak `p` (with
`prev(p)` its predecessor, or 0 if none) maintain `value[p] = p * (p -
prev(p))` in a Fenwick tree.

### Hint 4

For a query, let `a` and `b` be the first and last peaks strictly inside
`[l, r]` and `q = prev(a)`. With no such peak the answer is 0; otherwise,
letting `W` be the Fenwick-tree sum of `value[p]` from `a` through `b`,
the answer is `r * (b - l) - W + a * (l - q)`.
