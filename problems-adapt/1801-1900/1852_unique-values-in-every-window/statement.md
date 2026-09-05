# Unique Values in Every Window

## Description

You are given an integer array `nums` of length `n` and a window width
`k`.

Slide a window of `k` consecutive elements across the array — it starts
at index 0 and moves one position at a time until its right edge reaches
the end — and for each placement report how many distinct values the
window contains.

Return the answers in order: position `i` of the result is the number of
unique values among `nums[i..i + k - 1]`, for every `0 <= i < n - k + 1`.

### Example 1

```text
Input: nums = [4,5,4,6,7,7], k = 2
Output: [2,2,2,2,1]
Explanation: Each neighboring pair is scanned in turn:
- nums[0..1] = [4,5] with 2 unique values
- nums[1..2] = [5,4] with 2
- nums[2..3] = [4,6] with 2
- nums[3..4] = [6,7] with 2
- nums[4..5] = [7,7] with just 1
```

### Example 2

```text
Input: nums = [2,2,3,3,9], k = 3
Output: [2,2,2]
Explanation: Every window of three pairs a repeated value with something
new — [2,2,3], [2,3,3], and [3,3,9] all hold exactly 2 unique values.
```

### Example 3

```text
Input: nums = [8,1,8,2,8], k = 3
Output: [2,3,2]
Explanation: [8,1,8] collapses to 2 uniques, the middle window
[1,8,2] holds 3, and [8,2,8] drops back to 2.
```

### Constraints

- `1 <= k <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^5`

## Hints

### Hint 1

Two neighboring windows overlap in `k - 1` elements — never rebuild a
window's contents from zero.

### Hint 2

Maintain one frequency table for the current window; a value enters the
unique count when its frequency climbs from zero and leaves when it
falls back to zero.
