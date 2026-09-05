# Peak-Rich Subarrays

## Description

Given an integer array `nums` and a positive integer `k`, count the
contiguous segments of `nums` in which the array's largest value shows
up at least `k` times. Return that count.

A segment is any run of consecutive elements `nums[i..j]`, including
single elements.

### Example 1

```text
Input: nums = [4,7,9,3,9,9,2], k = 2
Output: 13
Explanation: The maximum is 9, appearing at indices 2, 4 and 5. The
segments holding the index-2 nine together with the index-4 nine are
[4,7,9,3,9], [7,9,3,9] and [9,3,9] — 3 of them. A segment covering
the two nines at indices 4 and 5 can start at any of the 5 positions
0..4 and end at index 5 or 6, adding 5 × 2 = 10 more. In total
3 + 10 = 13.
```

### Example 2

```text
Input: nums = [8,1,8], k = 3
Output: 0
Explanation: The value 8 occurs only twice in the whole array, so no
segment can hold it three times.
```

### Example 3

```text
Input: nums = [2,6,3], k = 1
Output: 4
Explanation: With k = 1 a segment qualifies as soon as it touches the
single 6. The qualifying segments are [6], [2,6], [6,3] and
[2,6,3].
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁶`
- `1 <= k <= 10⁵`
