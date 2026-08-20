# Subarray Sums Within Bounds

## Description

Given an integer array `nums` and two integers `lower` and `upper`, count
the subarrays whose sum lies in the inclusive interval
`[lower, upper]`.

There are `n · (n + 1) / 2` subarrays in total — count only those whose
element total falls inside the interval.

### Example 1

```text
Input: nums = [3,-4,2], lower = -1, upper = 4
Output: 4
Explanation: The subarray sums are 3, -4, 2 (single elements), -1, -2
(pairs) and 1 (the whole array). Four of these lie in [-1, 4]: the 3, the
2, the -1, and the 1.
```

### Example 2

```text
Input: nums = [-7], lower = -7, upper = 0
Output: 1
Explanation: The only subarray is [-7] itself, and -7 sits exactly on the
interval's lower end.
```

### Example 3

```text
Input: nums = [2,2], lower = 2, upper = 2
Output: 2
Explanation: Both single elements sum to 2, which qualifies; the whole
array sums to 4, which does not.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `-2³¹ <= nums[i] <= 2³¹ - 1`
- `-10⁵ <= lower <= upper <= 10⁵`
- the answer fits in a 32-bit integer.

## Hints

### Hint 1

A subarray total is a difference of prefix sums, so the count becomes: how
many pairs of prefixes differ by a value inside `[lower, upper]`?

### Hint 2

The prefixes arrive unsorted, but divide-and-conquer — merge sort over them —
tallies the qualifying pairs in `O(n log n)`.

### Hint 3

At each merge the left half is sorted, so for every left prefix, two
forward-only pointers over the right half bracket exactly the right values
whose difference stays inside the interval.

### Hint 4

Prefix sums of 32-bit-scale elements overflow 32-bit arithmetic — carry them
in a wider type.
