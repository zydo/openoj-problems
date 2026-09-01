# Smallest Value Gap in Ranges

## Description

Call the smallest value gap of an array `a` the smallest quantity
`|a[i] - a[j]|` taken over all pairs of positions `i < j` holding
**different** values; when every element of `a` is equal, no such pair
exists and the gap is `-1`.

- For example, the array `[6,9,4,6]` has smallest value gap
  `|4 - 6| = 2` — the pair `6, 6` does not qualify because the two
  values must differ.

You are given an integer array `nums`, plus a list `queries` where each
entry is a pair `[l, r]`. Treat every query independently: restrict
`nums` to the contiguous stretch between the **0-based** positions `l`
and `r`, endpoints included, and compute that stretch's smallest value
gap.

Return the list of per-query answers, in order.

### Example 1

```text
Input: nums = [7,2,9,2,5], queries = [[0,4],[1,3],[3,4]]
Output: [2,7,3]
Explanation:
- [0,4]: the stretch is [7,2,9,2,5]; distinct values 2, 5, 7, 9 leave
  the smallest gap |5-7| = 2.
- [1,3]: the stretch is [2,9,2]; only the values 2 and 9 occur, and
  their gap is 7.
- [3,4]: the stretch is [2,5]; the gap is |2-5| = 3.
```

### Example 2

```text
Input: nums = [3,3,3], queries = [[0,2]]
Output: [-1]
Explanation: Every element of the stretch [3,3,3] is the same value,
so no qualifying pair exists and the answer is -1.
```

### Example 3

```text
Input: nums = [10,1,10,1], queries = [[0,3]]
Output: [9]
Explanation: The whole array holds only the values 1 and 10, whose
gap is 9.
```

### Constraints

- `2 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 100`
- `1 <= queries.length <= 2 × 10⁴`
- `0 <= l < r < nums.length` for every query.

## Hints

### Hint 1

Positions can be numerous, but values never climb past 100 — the value
axis is the cheap one to sweep once per query.

### Hint 2

Precompute, for every value, how many times it occurs in each prefix of
`nums`; a count that increases between the query's two ends means the
value occurs inside the stretch. Among the values found, only
value-adjacent neighbours can form the closest pair.
