# Most Disjoint Target-Sum Runs

## Description

You are given an integer array `nums` and an integer `target`. Slice
`nums` into as many pieces as you can: count the maximum number of
non-empty contiguous runs that are pairwise disjoint (no shared
elements) and each sum to exactly `target`. Elements may be negative,
and `target` may be zero, so a run's worth of summing is not always
obvious at a glance.

Return that maximum count.

### Example 1

```text
Input: nums = [5,2,3,4,1], target = 5
Output: 3
Explanation: The runs [5], [2,3] and [4,1] each sum to 5 and share no
elements, so three disjoint runs fit.
```

### Example 2

```text
Input: nums = [3,-3,3,-3,3], target = 3
Output: 3
Explanation: Take [3], then [-3,3], then [-3,3] — three disjoint runs
despite the negative numbers in between.
```

### Example 3

```text
Input: nums = [-2,6,-2,6,-2], target = 4
Output: 2
Explanation: [-2,6] sums to 4 and the pattern repeats once more, giving
two runs; the leftover -2 values can never reach 4 on their own.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `-10⁴ <= nums[i] <= 10⁴`
- `0 <= target <= 10⁶`

## Hints

### Hint 1

Carry a running prefix sum and remember, in a hash set, every prefix
sum seen since the last run you closed. At each element, the question
"does a target-sum run end right here?" is just whether
`running_sum - target` sits in that set.

### Hint 2

Closing a valid run the instant one appears — resetting the running sum
and the set right after — is provably optimal: an early close can only
free more room for later runs. The negatives are also why a set of
prefix sums is needed rather than a single last-seen index.
