# Longest Quiet Window

## Description

An integer array `nums` of length `n` and an integer `k` are given. A
contiguous window of `nums` is **quiet** when no more than `k` of its values
occur more than once within it. The tally is per value: a value appearing
three times inside the window still counts as a single offender.

Report the length of the longest quiet window in `nums`.

### Example 1

```text
Input: nums = [4,5,4,6,5,7,4], k = 1
Output: 5
Explanation: The window [5,4,6,5,7] is quiet: only the value 5 repeats
inside it, and one repeat value is within the limit. Every window of length
6 holds both 4 and 5 at least twice, which would need k >= 2.
```

### Example 2

```text
Input: nums = [8,2,8,2,9], k = 0
Output: 3
Explanation: With k = 0 nothing may repeat, and the best stretch without a
repeat is [8,2,9], which spans three elements.
```

### Example 3

```text
Input: nums = [7,7,7,7], k = 1
Output: 4
Explanation: However far the window stretches, only the single value 7 ever
repeats, so the whole array of length 4 already qualifies.
```

### Constraints

- `1 <= n <= 10⁵`
- `1 <= nums[i] <= 10⁵`
- `0 <= k <= n`

## Hints

### Hint 1

Walk two pointers across the array, treating the segment between them as
the candidate window.

### Hint 2

Carry a frequency table for the values inside the window together with a
counter of how many of those values currently sit above one occurrence.

### Hint 3

Each time the counter exceeds `k`, push the left end forward until the
counter drops back to `k` or below; the widest legal window seen is the
answer.
