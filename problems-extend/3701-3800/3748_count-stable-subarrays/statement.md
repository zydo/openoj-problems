# Count Stable Subarrays

## Description

You are given an integer array `nums` and a 2D integer array `queries` of
length `q`, where `queries[i] = [li, ri]`.

A subarray of `nums` is called stable when it contains no inversion: there
are no indices `i < j` inside it such that `nums[i] > nums[j]`. Every
stable subarray therefore reads in non-decreasing order, equal neighbours
never break stability, and a single element is always stable.

For each query `[li, ri]`, count the stable subarrays that lie entirely
within the inclusive segment `nums[li..ri]`. Return an integer array `ans`
of length `q`, where `ans[i]` is the answer to `queries[i]`.

### Example 1

```text
Input: nums = [3,1,2], queries = [[0,1],[1,2],[0,2]]
Output: [2,3,4]
Explanation:
    [0, 1] covers [3, 1]; the stable subarrays are [3] and [1], so the
    count is 2.
    [1, 2] covers [1, 2]; the stable subarrays are [1], [2], and [1, 2],
    so the count is 3.
    [0, 2] covers [3, 1, 2]; the stable subarrays are [3], [1], [2], and
    [1, 2], so the count is 4.
```

### Example 2

```text
Input: nums = [2,2], queries = [[0,1],[0,0]]
Output: [3,1]
Explanation:
    [0, 1] covers [2, 2]; the stable subarrays are [2], [2], and [2, 2],
    so the count is 3.
    [0, 0] covers [2]; the only stable subarray is [2], so the count is 1.
```

### Constraints

- `1 <= n == nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`
- `1 <= q == queries.length <= 10⁵`
- `queries[i] = [li, ri]`
- `0 <= li <= ri <= n - 1`

## Hints

### Hint 1

Identify the maximal non-decreasing segments. Each segment of length L
contributes L * (L + 1) / 2 stable subarrays.

### Hint 2

Build a prefix array of the number of stable subarrays ending at each
index.

### Hint 3

For a query `[l, r]`, take the prefix sum over the range and adjust for
the one non-decreasing segment that crosses `l`.
