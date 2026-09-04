# Largest Repeat-Free Window Sum

## Description

You are given an integer array `nums` and an integer `k`.

A subarray of `nums` is a contiguous run of its elements. A subarray qualifies
when it has exactly `k` elements and no value occurs in it more than once.

Return the largest sum over all qualifying subarrays. If no subarray of
length `k` qualifies, return `0`.

### Example 1

```text
Input: nums = [8,3,5,6,7,7,7], k = 3
Output: 18
Explanation: The subarrays of length 3 are:
- [8,3,5] qualifies and sums to 16.
- [3,5,6] qualifies and sums to 14.
- [5,6,7] qualifies and sums to 18.
- [6,7,7] does not qualify: the value 7 occurs twice.
- [7,7,7] does not qualify: the value 7 occurs three times.
18 is the largest qualifying sum.
```

### Example 2

```text
Input: nums = [6,6,6], k = 3
Output: 0
Explanation: The only subarray of length 3 repeats the value 6, so nothing
qualifies and the answer is 0.
```

### Example 3

```text
Input: nums = [3,1,3,2,1], k = 2
Output: 5
Explanation: The values 3 and 1 come back later in the array, but never
inside one window: all four length-2 subarrays qualify, with sums 4, 4, 5,
and 3. The best is [3,2] with sum 5.
```

### Constraints

- `1 <= k <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`

## Hints

### Hint 1

Compare the length-`k` window ending at index `i` with the one ending at
index `i + 1`: which members actually change?

### Hint 2

Exactly two do — one element joins on the right and one leaves on the left —
so a running sum and a value-tally let each slide happen in constant work.

### Hint 3

The window is repeat-free exactly when its tally holds `k` different values.
Erase a tally entry the moment its count hits zero, or the count of keys stops
reflecting the number of distinct values present.
