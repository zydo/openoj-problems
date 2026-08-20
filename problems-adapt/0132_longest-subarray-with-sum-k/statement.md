# Longest Subarray With Sum k

## Description

Given an integer array `nums` and an integer `k`, return the length of the
longest contiguous subarray whose elements total exactly `k`. If no
subarray totals `k`, return `0`.

Values may be negative, so growing a window past the target helps neither
direction — the subarray in question can sit anywhere.

### Example 1

```text
Input: nums = [2,-2,4,1,-3,5], k = 7
Output: 6
Explanation: The whole array totals 7 once the early +2 and -2 cancel and
the trailing 5 lands, so the longest qualifying subarray is all of it.
```

### Example 2

```text
Input: nums = [3,-1,4], k = 10
Output: 0
Explanation: The possible subarray totals are 3, -1, 4, 2, 3, 6 — none is 10.
```

### Example 3

```text
Input: nums = [4,-1,2,1,-2,6], k = 4
Output: 5
Explanation: [4,-1,2,1,-2] totals 4 across five elements. The shorter
[4] at the start and [6,-2] near the end also total 4 but are not the
longest.
```

### Constraints

- `1 <= nums.length <= 2 · 10⁵`
- `-10⁴ <= nums[i] <= 10⁴`
- `-10⁹ <= k <= 10⁹`

## Hints

### Hint 1

Express each subarray total through prefix sums: the stretch between two
positions is the difference of the running totals at those positions.

### Hint 2

Standing at position `i` with running total `p`, the subarray ending here
that totals `k` begins just after the earliest earlier position whose
running total was exactly `p - k`.

### Hint 3

One left-to-right sweep with a hash map from prefix value to its first
position answers that lookup in constant time — keep the first position per
value, since earliest start means longest subarray.
