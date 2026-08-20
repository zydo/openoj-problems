# Peak Counts Under Point Updates

## Description

An entry of an array is a **peak** when it is strictly greater than both of its
immediate neighbors in the array.

You are given an integer array `nums` and a list `queries` of instructions to
run in order:

- `[1, li, ri]` — report how many peaks lie in the stretch `nums[li..ri]`.
- `[2, indexi, vali]` — overwrite `nums[indexi]` with `vali`.

Collect the answers to the `[1, li, ri]` instructions, in order, into an array
and return it.

The first and last entries of the whole array are never peaks, and likewise
the two ends of a queried stretch cannot be peaks of that stretch.

### Example 1

```text
Input: nums = [2,6,1,6,2,9], queries = [[1,0,5],[2,3,2],[1,0,5]]
Output: [2,1]
Explanation:
Initially both sixes are peaks — the first rises over 2 and 1, the second
over 1 and 2 — so the first count is 2.
After lowering nums[3] to 2 the array is [2,6,1,2,2,9]; only the leading 6
still peaks, so the second count is 1.
```

### Example 2

```text
Input: nums = [4,4,4,4,4,4], queries = [[1,0,5],[2,3,9],[1,0,5]]
Output: [0,1]
Explanation:
The flat array has no peaks. Raising nums[3] to 9 makes [4,4,4,9,4,4], whose
middle entry beats both neighbors, so the count becomes 1.
```

### Example 3

```text
Input: nums = [1,4,2,5,3,6], queries = [[1,1,3],[2,0,9],[1,2,5]]
Output: [0,1]
Explanation:
In [4,2,5] no interior entry beats both neighbors. After nums[0] becomes 9
the array is [9,4,2,5,3,6], and in the stretch [2,5,3] the 5 peaks over 2
and 3.
```

### Constraints

- `3 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`
- `1 <= queries.length <= 10⁵`
- `queries[i][0] == 1` or `queries[i][0] == 2`
- For all `i`:
    - If `queries[i][0] == 1`: `0 <= queries[i][1] <= queries[i][2] <= nums.length - 1`
    - If `queries[i][0] == 2`: `0 <= queries[i][1] <= nums.length - 1`, `1 <= queries[i][2] <= 10⁵`

## Hints

### Hint 1

Reduce the array to a 0/1 strip marking where peaks currently stand.

### Hint 2

Overwriting one entry can flip the marker only at that entry and its two
neighbors — three constant-time recomputes.

### Hint 3

A count over `[li, ri]` is the sum of the strip strictly between the ends,
which endpoints can never contribute to.

### Hint 4

Keep the strip summed by a Fenwick (binary indexed) tree so both operations
cost logarithmic time.
