# Count Bounded Even-Odd Subarrays I

## Description

You are given an integer array `nums` and two integers `a` and `b`.

For any subarray, let `x` be how many of its elements are even and `y` be
how many are odd, and compare the exact rational ratio `x / y` against
`a / b`.

Call the subarray bounded when it contains at least one odd element (so the
ratio is defined) and `x / y <= a / b`.

Return how many subarrays of `nums` are bounded.

### Example 1

```text
Input: nums = [3,4,3,4], a = 3, b = 2
Output: 7
Explanation: Bounded here means at most 3 even elements per 2 odd ones.
Indexing from 0, the seven qualifying subarrays are nums[0..0], nums[0..1],
nums[0..2], nums[0..3], nums[1..2], nums[2..2], and nums[2..3] — every
subarray holding one odd element and at most one even element automatically
qualifies. Only nums[1..1] and nums[3..3], the two lone evens, fail, since
neither contains an odd element at all.
```

### Example 2

```text
Input: nums = [4,4,3], a = 2, b = 1
Output: 3
Explanation: Bounded here means at most 2 even elements per 1 odd one.
[4,4,3] qualifies with 2 even and 1 odd (2 <= 2), as does [4,3] with 1 even
and 1 odd, and the lone [3] with 0 even and 1 odd. The subarrays [4] and
[4,4] fail because neither contains an odd element at all.
```

### Example 3

```text
Input: nums = [4,4,4], a = 1, b = 1
Output: 0
Explanation: Every element is even, so no subarray ever contains an odd
element, and none can be bounded.
```

### Constraints

- `1 <= nums.length <= 1000`
- `1 <= nums[i] <= 1000`
- `1 <= a, b <= 1000`

## Hints

### Hint 1

Fix the left end of the subarray and extend the right end one step at a
time, keeping running counts of even and odd elements seen so far.

### Hint 2

A subarray with at least one odd element is bounded exactly when
`b * x <= a * y` — cross-multiplying avoids floating-point division
entirely.
