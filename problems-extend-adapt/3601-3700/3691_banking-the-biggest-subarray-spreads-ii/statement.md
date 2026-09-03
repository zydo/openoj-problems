# Banking The Biggest Subarray Spreads II

## Description

You are given an integer array `nums` of length `n` and an integer `k`.

Choose exactly `k` subarrays of `nums`. A subarray is any contiguous slice
`nums[l..r]`; two subarrays may overlap arbitrarily, but each pair of
endpoints `(l, r)` counts as a distinct subarray and can be chosen only
once.

A subarray is scored by its spread — the gap between its largest and
smallest entries: `max(nums[l..r]) - min(nums[l..r])`. Your score is the
sum of the spreads of the `k` subarrays you picked. Return the largest
score possible.

### Example 1

```text
Input: nums = [2,7,1], k = 2
Output: 12
Explanation: The whole array [2,7,1] spans the maximum 7 and the minimum
1, so it is worth 7 - 1 = 6; the slice [7,1] touches the same two
extremes and is also worth 6. Together they score 6 + 6 = 12.
```

### Example 2

```text
Input: nums = [5,5,5], k = 3
Output: 0
Explanation: Every subarray holds equal values, so all spreads are 0 and
any three subarrays sum to 0.
```

### Example 3

```text
Input: nums = [4,2,9,7], k = 3
Output: 21
Explanation: The subarrays [4,2,9], [2,9,7], and [4,2,9,7] each contain
both the 2 and the 9, so each is worth 7, for a total of 21.
```

### Example 4

```text
Input: nums = [8,3], k = 1
Output: 5
Explanation: The only possible pick is [8,3], worth 8 - 3 = 5.
```

### Constraints

- `1 <= n == nums.length <= 5 * 10^4`
- `0 <= nums[i] <= 10^9`
- `1 <= k <= min(10^5, n * (n + 1) / 2)` — the array always offers at
  least `k` distinct subarrays.

## Hints

### Hint 1

For a fixed left end `l`, a subarray only spreads out more as it grows to
the right: `max(nums[l..r]) - min(nums[l..r])` never decreases when `r`
advances.

### Hint 2

That monotonicity means each left endpoint owns a row of subarray values
already sorted from largest to smallest; the answer is the `k` largest
values across all `n` rows.

### Hint 3

Merge the rows with a max-heap: start each row at its widest subarray
`(l, n-1)`, and whenever you pop `(l, r)`, insert `(l, r-1)` if it
exists. A pair of sparse tables answers any row entry's spread in
constant time.
