# Count Subarrays With Given Extremes

## Description

You are given an integer array `nums` and two integers `lo` and `hi`.

Count the subarrays of `nums` — contiguous runs — whose smallest element is
exactly `lo` and whose largest element is exactly `hi`.

### Example 1

```text
Input: nums = [2,4,6,3,9,6], lo = 2, hi = 6
Output: 2
Explanation: The qualifying runs are [2,4,6] and [2,4,6,3]. Each holds a 2 as
its smallest and a 6 as its largest entry. Every longer run swallows the 9,
whose value leaves the allowed range.
```

### Example 2

```text
Input: nums = [7,7,7], lo = 7, hi = 7
Output: 6
Explanation: Every run's smallest and largest element is 7, and three cells
give six runs.
```

### Constraints

- `2 <= nums.length <= 10^5`
- `1 <= nums[i], lo, hi <= 10^6`

## Hints

### Hint 1

Imagine first that every element already sat inside `[lo, hi]`. For a run
ending at a fixed right end, which starts guarantee that both a `lo` and a
`hi` are on board?

### Hint 2

An element outside `[lo, hi]` is a wall: no qualifying run may contain it.
How do walls cut the counting into independent stretches?

### Hint 3

One left-to-right sweep can carry three recent positions — the latest wall,
the latest `lo`, the latest `hi` — and charge each run to its right end.
