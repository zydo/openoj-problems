# Sum of Extremes Over Short Subarrays

## Description

You are given an integer array `nums` and a positive integer `k`.

Walk through every contiguous subarray that holds at most `k` elements. Each
one contributes the sum of its smallest and its largest element, and a
subarray of one element contributes that element twice.

Return the total of all these contributions.

### Example 1

```text
Input: nums = [2,4,3], k = 2
Output: 31
Explanation: The subarrays holding at most 2 elements are:
  [2]       smallest 2,  largest 2,  contributes 4
  [2,4]     smallest 2,  largest 4,  contributes 6
  [4]       smallest 4,  largest 4,  contributes 8
  [4,3]     smallest 3,  largest 4,  contributes 7
  [3]       smallest 3,  largest 3,  contributes 6
The total is 4 + 6 + 8 + 7 + 6 = 31.
```

### Example 2

```text
Input: nums = [2,-1,4], k = 2
Output: 14
Explanation: The five qualifying subarrays contribute 4, 1, -2, 3, and 8,
in the order [2], [2,-1], [-1], [-1,4], [4]. Negative elements pull the
total down: 4 + 1 - 2 + 3 + 8 = 14.
```

### Example 3

```text
Input: nums = [3,1,2], k = 3
Output: 23
Explanation: All subarrays qualify. The six contributions are 6, 4, 4, 2,
3, and 4 — for [3], [3,1], [3,1,2], [1], [1,2], and [2] — totalling 23.
```

### Constraints

- `1 <= nums.length <= 80000`
- `1 <= k <= nums.length`
- `-10⁶ <= nums[i] <= 10⁶`

## Hints

### Hint 1

Rather than walking the subarrays, ask per element: in how many of them is it
the largest — and in how many the smallest? A monotonic stack answers both
spans.

### Hint 2

Split ties deliberately (non-strict comparison on one side, strict on the
other) so repeated values hand each subarray's extreme to exactly one index.

### Hint 3

The length cap turns the count into lattice points under a diagonal: with
`a` elements free on the left and `b` on the right, the subarray qualifies
when `a + b <= k - 1`. Count those pairs in closed form.
