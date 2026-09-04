# Cheapest Hop Chain VIII

## Description

You are given a 0-indexed integer array `nums` of length `n`, and you start
at index `0`. From an index `i` you may hop to a later index `j` — that is,
`i < j` — but only under one of two rules:

- **Level-or-up hop:** `nums[i] <= nums[j]`, and every index `k` strictly
  between them satisfies `nums[k] < nums[i]`; or
- **Down hop:** `nums[i] > nums[j]`, and every index `k` strictly between
  them satisfies `nums[k] >= nums[i]`.

A second array `costs` of length `n` gives the price of landing: hopping
onto index `i` costs `costs[i]`, regardless of where the hop started.

Return the smallest total landing cost of a chain of hops that ends at
index `n - 1`.

### Example 1

```text
Input: nums = [4,1,3,2,5], costs = [2,5,1,4,3]
Output: 3
Explanation:
From index 0 the rules allow a level-or-up hop straight over the smaller
values 1, 3, 2 to index 4, since `nums[4] = 5 >= nums[0] = 4`. Landing
there costs `costs[4] = 3`, and index 4 is the last index, so the total is
3. No cheaper chain exists.
```

### Example 2

```text
Input: nums = [7,7,7], costs = [10,1,2]
Output: 3
Explanation:
Index 0 can hop only to index 1 (the next value is not smaller), and index
1 only to index 2. The hops cost `costs[1] + costs[2] = 1 + 2 = 3`.
```

### Example 3

```text
Input: nums = [2], costs = [9]
Output: 0
Explanation:
The start is already the last index, so no hop — and no cost — is needed.
```

### Constraints

- `n == nums.length == costs.length`
- `1 <= n <= 10⁵`
- `0 <= nums[i], costs[i] <= 10⁵`

## Hints

### Hint 1

Work out, for every index, which later indexes are actually reachable
under the two rules — you will find there are at most two per index.

### Hint 2

A backward sweep with two monotonic stacks finds those targets: one stack
tracks candidates at or above the current value, the other tracks
candidates below it.

### Hint 3

Because every hop moves rightward, indexes can be settled left to right:
keep `dp[i]`, the cheapest known cost of standing on index `i`, and relax
each index's two targets as you reach it.
