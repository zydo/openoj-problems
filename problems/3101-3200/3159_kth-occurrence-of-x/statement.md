# The Kth Occurrence of X

## Description

An integer array `nums`, an array of rank queries `queries`, and a
single integer `x` are given.

Every query is a rank `k`: count the positions where `x` appears in
`nums` from left to right starting at 1, and report the zero-based
index of the `k`-th such position. When `nums` holds fewer than `k`
copies of `x`, that query has no answer and reports `-1`.

Return the answers as an array, one entry per query, in order.

### Example 1

```text
Input: nums = [4,8,4,2,8,6], queries = [1,2,3,4], x = 4
Output: [0,2,-1,-1]
Explanation:
The value 4 sits at indices 0 and 2, so ranks 1 and 2 resolve to those
indices, while ranks 3 and 4 outrun the two occurrences and report -1.
```

### Example 2

```text
Input: nums = [5,1,5], queries = [1,2,3], x = 7
Output: [-1,-1,-1]
Explanation:
The value 7 never appears, so every rank is unanswered.
```

### Example 3

```text
Input: nums = [2,2,9,2], queries = [3], x = 2
Output: [3]
Explanation:
The three copies of 2 occupy indices 0, 1, and 3, so rank 3 lands on
the last of them.
```

### Constraints

- `1 <= nums.length, queries.length <= 10⁵`
- `1 <= queries[i] <= 10⁵`
- `1 <= nums[i], x <= 10⁴`

## Hints

### Hint 1

Sweep `nums` once and jot down every index that holds `x`; read left to
right, that list is the 1st, 2nd, 3rd, ... occurrence in order.

### Hint 2

Each query is then a single table read: rank `k` has an answer exactly
when `k` does not exceed how many occurrences were recorded.
