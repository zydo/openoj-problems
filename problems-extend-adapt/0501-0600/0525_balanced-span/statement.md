# Balanced Span

## Description

You are given a binary array `nums` — every entry is either `0` or `1`.
Return the length of the longest contiguous stretch of the array that holds
exactly as many `0`s as `1`s.

A balanced stretch may touch either end of the array, but it must be
contiguous: you may not reorder or skip elements. If the whole array is
balanced, the answer is `nums.length`.

### Example 1

```text
Input: nums = [0,0,1,1]
Output: 4
Explanation: The entire array holds two 0s and two 1s, so the balanced
stretch of length 4 is the array itself.
```

### Example 2

```text
Input: nums = [0,1,0,1,0]
Output: 4
Explanation: Both [0,1,0,1] and [1,0,1,0] hold two 0s and two 1s. No
five-element window balances, since the array has three 0s and two 1s.
```

### Example 3

```text
Input: nums = [1,1,1,0,0,0,1]
Output: 6
Explanation: The middle six elements [1,1,1,0,0,0] hold three 1s and three
0s, the longest balanced stretch. The leading and trailing 1s cannot both be
included without tipping the count.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `nums[i]` is either `0` or `1`.
