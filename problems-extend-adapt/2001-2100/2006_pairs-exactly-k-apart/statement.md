# Pairs Exactly K Apart

## Description

Given an integer array `nums` and an integer `k`, count the index pairs `i`
and `j` with `i < j` whose values sit exactly `k` from each other, that is
`|nums[i] - nums[j]| == k`. The absolute value of `x` is `x` when `x` is not
negative and `-x` otherwise.

Return that count.

### Example 1

```text
Input: nums = [5,1,8,3], k = 2
Output: 2
Explanation: The pairs 5 & 3 and 1 & 3 each differ by exactly 2.
```

### Example 2

```text
Input: nums = [4,10], k = 7
Output: 0
Explanation: The only two values are 6 apart, not 7.
```

### Example 3

```text
Input: nums = [2,9,2,7,4], k = 5
Output: 3
Explanation: Each of the two 2s pairs with 7, and 9 pairs with 4 — three
pairs in total.
```

### Constraints

- `1 <= nums.length <= 200`
- `1 <= nums[i] <= 100`
- `1 <= k <= 99`

## Hints

### Hint 1

With at most 200 values, every one of the pairs can be inspected directly.

### Hint 2

Loop over each index and, inside it, loop over the later indices, comparing
the absolute difference of the two values against `k`.
