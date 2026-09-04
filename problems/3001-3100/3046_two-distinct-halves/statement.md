# Two Distinct Halves

## Description

You are given an integer array `nums` whose length is even. Decide whether
the values can be dealt into two groups `nums1` and `nums2` that satisfy all
of the following:

- `nums1` and `nums2` each hold exactly `nums.length / 2` values.
- No value repeats inside `nums1`.
- No value repeats inside `nums2`.

Return `true` when such a deal exists and `false` otherwise.

### Example 1

```text
Input: nums = [5,3,5,3,7,9]
Output: true
Explanation: One valid deal puts nums1 = [5,3,7] and nums2 = [5,3,9] —
each half is duplicate-free and the sizes match.
```

### Example 2

```text
Input: nums = [4,4,4,8]
Output: false
Explanation: The value 4 appears three times, but each half can hold at
most one 4. Some copy of 4 is forced to share a half with another 4, so no
valid deal exists.
```

### Example 3

```text
Input: nums = [10,10]
Output: true
Explanation: The two copies part ways — one per half — and both halves are
trivially duplicate-free.
```

### Constraints

- `1 <= nums.length <= 100`
- `nums.length` is even.
- `1 <= nums[i] <= 100`

## Hints

### Hint 1

A value that occurs three or more times can never work: two of its copies
must land in the same half.

### Hint 2

When every value occurs at most twice, a valid deal always exists — send one
copy of each doubled value to each half and split the singles evenly.
