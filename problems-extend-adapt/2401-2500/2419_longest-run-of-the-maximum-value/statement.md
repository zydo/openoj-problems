# Longest Run of the Maximum Value

## Description

You are given an integer array `nums` of length `n`.

Consider the bitwise AND of every non-empty subarray of `nums`. Let `k` be
the largest such value. Now restrict attention to subarrays whose bitwise
AND equals `k` exactly.

Return the length of the longest subarray whose bitwise AND is `k`.

The bitwise AND of an array is the bitwise AND of all of its elements. A
subarray is a contiguous sequence of elements within an array.

### Example 1

```text
Input: nums = [2,4,4,2]
Output: 2
Explanation: The largest bitwise AND of any subarray is 4, achieved by
[4] and [4,4]. The longest subarray with AND 4 is [4,4], whose length is
2.
```

### Example 2

```text
Input: nums = [1,9,9,1,9,9,9]
Output: 3
Explanation: The maximum value in the array is 9, and only runs of 9 keep
their AND at 9. The trailing run [9,9,9] has length 3, the longest.
```

### Example 3

```text
Input: nums = [5,1,2,3]
Output: 1
Explanation: The largest subarray AND is 5, reached only by the
single-element subarray [5], whose length is 1.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁶`

## Hints

### Hint 1

The bitwise AND of two different numbers is always strictly smaller than
the larger of the two.

### Hint 2

Combining a value with anything else can only clear bits, never set them,
so the largest subarray AND is simply `max(nums)` — attained by the
single-element subarray holding that maximum.

### Hint 3

A subarray has AND equal to `max(nums)` exactly when every one of its
elements is the maximum; the answer is therefore the longest run of
consecutive maximum values.
