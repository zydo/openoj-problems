# The Fewest Queries To Zero II

## Description

You are given an integer array `nums` of length `n` and a list of queries
where `queries[i] = [li, ri, vali]`. Query `i` grants a budget: every
element at an index inside `[li, ri]` may be decreased by any amount up
to `vali`, with the amount at each covered index chosen independently.

Return the smallest non-negative `k` for which running the first `k`
queries — in their given order — can bring every element of `nums` down
to `0`. If even the entire query list cannot manage that, return `-1`.

### Example 1

```text
Input: nums = [3,0,2], queries = [[0,2,2],[0,2,1],[0,0,5]]
Output: 2
Explanation: The first query alone gives every index a budget of 2, so
index 0, holding 3, stays positive. With the second query added, index 0
can shed up to 2 + 1 = 3 and the others reach 0 as well, so the first 2
queries finish the job and no shorter prefix can.
```

### Example 2

```text
Input: nums = [0,0], queries = [[0,1,3]]
Output: 0
Explanation: Every element is already 0, so the first 0 queries already
suffice.
```

### Example 3

```text
Input: nums = [7,7,7], queries = [[0,2,4]]
Output: -1
Explanation: Each element holds 7, yet the only covering query budgets at
most 4 per index, so no prefix of the queries can empty the array.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `0 <= nums[i] <= 5 * 10⁵`
- `1 <= queries.length <= 10⁵`
- `queries[i].length == 3`
- `0 <= li <= ri < nums.length`
- `1 <= vali <= 5`

## Hints

### Hint 1

One more query never undoes progress — a query can always be spent as
all-zero decrements — so the test "the first `k` queries are enough"
flips at most once as `k` grows.

### Hint 2

For a fixed `k`, an index fails exactly when the summed budgets of the
first `k` queries that cover it fall short of its value; fold those
budgets into a difference array and sweep once to check every index.
