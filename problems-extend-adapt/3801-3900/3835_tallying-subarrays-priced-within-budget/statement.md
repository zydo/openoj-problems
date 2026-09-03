# Tallying Subarrays Priced Within Budget

## Description

You are given an integer array `nums` and an integer `k`.

Give every contiguous subarray `nums[l..r]` a price:

    price = (max(nums[l..r]) - min(nums[l..r])) * (r - l + 1)

That is, the spread between the subarray's largest and smallest values,
multiplied by how many elements it covers.

Return how many subarrays of `nums` are priced at most `k`.

### Example 1

```text
Input: nums = [2,1,4], k = 3
Output: 4
Explanation: Each single element costs 0. The subarray [2, 1] costs
(2 - 1) * 2 = 2, which fits. [1, 4] costs (4 - 1) * 2 = 6 and the whole
array (4 - 1) * 3 = 9, both over. So 4 subarrays fit.
```

### Example 2

```text
Input: nums = [4,4,4], k = 0
Output: 6
Explanation: Max and min agree on every subarray here, so each costs 0
and all 4 * 5 / 2 = 6 subarrays count.
```

### Example 3

```text
Input: nums = [1,5,1,5], k = 6
Output: 4
Explanation: Any two neighbors differ by 4, so every length-2 subarray
costs 8 — over budget — and longer ones cost more still. Only the 4
single-element subarrays fit.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`
- `0 <= k <= 10¹⁵`

## Hints

### Hint 1

Stretching a window can only widen its spread and lengthen it, so the
price never decreases as the window grows — a sliding window applies.

### Hint 2

Keep one deque of decreasing candidates for the maximum and one of
increasing candidates for the minimum; either extreme of the current
window is then a constant-time lookup.

### Hint 3

When the window's price passes `k`, advance the left end (evicting
candidates that drop out) until it fits again; every subarray ending at
the right end and starting at or after the left end is affordable, and
there are `right - left + 1` of those.
