# The Nested k-Sum Tally

## Description

You are given an integer array `nums` of length `n` and a positive integer
`k`.

Weigh a subsequence of `nums` by counting how many of its own subsequences
have elements summing to exactly `k`. For example, the subsequence `[2,2,4]`
weighs `2` when `k = 4`, because both `[2,2]` and `[4]` can be carved out of
it.

Return the sum of the weights of all subsequences of `nums`.

The total can be enormous, so report it modulo `10⁹ + 7`.

### Example 1

```text
Input: nums = [1,2,3], k = 4
Output: 2
Explanation: The only subsequence summing to 4 is [1,3]. It is nested inside itself and inside [1,2,3], so those two containers contribute 1 each.
```

### Example 2

```text
Input: nums = [2,2,4], k = 4
Output: 6
Explanation: Five subsequences weigh more than zero: [4] weighs 1, [2,2] weighs 1, each [2,4] weighs 1 (both contain the lone 4), and [2,2,4] weighs 2 since it holds both [2,2] and [4]. The total is 1 + 1 + 1 + 1 + 2 = 6.
```

### Example 3

```text
Input: nums = [5], k = 3
Output: 0
Explanation: No selection of the elements can reach 3, so every subsequence weighs 0.
```

### Constraints

- `1 <= n <= 100`
- `1 <= nums[i] <= 10⁴`
- `1 <= k <= 100`

## Hints

### Hint 1

A sum-k subsequence of length `j` nests inside exactly `2^(n − j)` of
`nums`'s subsequences, which is precisely its contribution to the total.

### Hint 2

Tally length-`j` subsequences with sum `s` in a knapsack pass over both
dimensions, then multiply each tally by `2^(n − j)` and add it up.

### Hint 3

An element above `k` can never join a sum-k subsequence — skip it.
