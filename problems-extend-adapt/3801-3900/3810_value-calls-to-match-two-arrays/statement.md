# Value Calls To Match Two Arrays

## Description

Two integer arrays of equal length `n` sit side by side: `nums` holds
the current value at each index, and `target` holds the value that
index should end up with.

You may repeatedly make a value call:

- Pick an integer `x`.
- Find every maximal run of consecutive indices whose `nums` value is
  `x` — a run is maximal when it cannot stretch left or right without
  picking up a different value.
- Stamp each such run `[l, r]` at once: `nums[l] = target[l]`,
  `nums[l + 1] = target[l + 1]`, ..., `nums[r] = target[r]`.

Indices outside a stamped run keep their values, and an index inside a
stamped run whose value already equals its target simply stays put.

Return the fewest value calls after which `nums` equals `target`
everywhere.

### Example 1

```text
Input: nums = [3,1,4,1,5], target = [3,2,4,9,5]
Output: 1
Explanation: Only indices 1 and 3 are wrong, and both currently hold 1.
Calling x = 1 stamps the runs [1, 1] and [3, 3], setting them to 2 and
9. nums becomes [3, 2, 4, 9, 5], so a single call is enough.
```

### Example 2

```text
Input: nums = [2,2,3,7,7], target = [1,2,3,8,8]
Output: 2
Explanation: Index 0 needs 2 -> 1, and indices 3 and 4 need 7 -> 8
(one run). Calling x = 2 stamps [0, 0]; calling x = 7 stamps [3, 4].
Both calls together finish the job, and no single call can fix values
2 and 7 at the same time, so 2 is minimal.
```

### Example 3

```text
Input: nums = [5,6,8,7,6], target = [4,1,2,7,3]
Output: 3
Explanation: The wrong indices hold 5, 6, 8, and 6 — three distinct
values. One call per distinct value settles all of them (x = 5, then
x = 6, then x = 8), and two calls cannot cover three values, so the
answer is 3.
```

### Constraints

- `1 <= n == nums.length == target.length <= 10⁵`
- `1 <= nums[i], target[i] <= 10⁵`

## Hints

### Hint 1

A cell whose value already matches its target is never an obstacle — a
stamped run that covers it rewrites it to the value it already holds.

### Hint 2

Naming the current value of any wrong cell settles every wrong cell
that holds that same value, since each of them sits in some maximal
run and every run of `x` is stamped together.

### Hint 3

No call names two values at once, so wrong cells with different
current values can never be cleared by the same call.

### Hint 4

The answer is therefore the number of distinct values `nums[i]` takes
over the indices where `nums[i] != target[i]`.
