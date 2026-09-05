# Banking The Biggest Subarray Spreads

## Description

You are given an integer array `nums` of length `n` and an integer `k`.

Pick **exactly** `k` non-empty contiguous subarrays `nums[l..r]`. Picks may
overlap each other without restriction, and one exact subarray — the same
`l` and the same `r` — is allowed to be picked several times.

A subarray's **spread** is `max(nums[l..r]) - min(nums[l..r])`, the gap
between its largest and smallest elements. Your score is the sum of the
spreads of all `k` picks.

Return the largest score that can be reached.

### Example 1

```text
Input: nums = [5,1,9], k = 3
Output: 24
Explanation: Every pick is best served by the whole array, whose largest
element 9 and smallest element 1 give a spread of 8. Three such picks
score 8 + 8 + 8 = 24.
```

### Example 2

```text
Input: nums = [4,4,4], k = 7
Output: 0
Explanation: All elements are equal, so every subarray's largest and
smallest values coincide and each of the seven picks contributes nothing.
```

### Example 3

```text
Input: nums = [2,10,6,3], k = 1
Output: 8
Explanation: A single pick of the whole array spans the minimum 2 and the
maximum 10, scoring 10 - 2 = 8.
```

### Constraints

- `1 <= n == nums.length <= 5 * 10⁴`
- `0 <= nums[i] <= 10⁹`
- `1 <= k <= 10⁵`
- The answer fits in a signed 64-bit integer.

## Hints

### Hint 1

No slice of the array can spread wider than the array itself: slicing can
only lose candidates for the extremes, never gain them.

### Hint 2

Since a pick may be repeated, the widest spread available can be banked all
`k` times — so the answer is simply the full-array spread multiplied by
`k`, computed in 64-bit width.
