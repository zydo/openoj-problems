# Distinct Values Within Reach

## Description

You are given an integer array `nums` and an integer `k`.

Every element gets one chance to change: you may add any single integer from
the range `[-k, k]` to it — a different amount for each element, or none at
all. After all the changes are made, count how many distinct values the array
can hold at best. Return that maximum.

### Example 1

```text
Input: nums = [3,3,3,5], k = 1
Output: 4
Explanation: Nudge the three 3s to 2, 3, and 4 — each moves by at most 1 —
and the array becomes [2, 3, 4, 5], four distinct values.
```

### Example 2

```text
Input: nums = [1,1,1,1,1], k = 0
Output: 1
Explanation: With k = 0 nothing can actually change, and every element holds
the value 1, so only one distinct value is possible.
```

### Example 3

```text
Input: nums = [7,7,7], k = 3
Output: 3
Explanation: Each 7 may land anywhere in [4, 10]. Setting them to 4, 5, and
6 separates all three.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`
- `0 <= k <= 10⁹`

## Hints

### Hint 1

Sort the values and hand out landing spots greedily, from smallest to
largest.

### Hint 2

For each value in sorted order, the greedy pick is the smallest landing spot
that is still free and lies inside `[v-k, v+k]`.
