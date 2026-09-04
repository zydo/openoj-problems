# Longest Window With Capped Frequencies

## Description

You are given an integer array `nums` and an integer `k`.

A value's frequency inside a stretch of the array is how many times it
appears there. Call a stretch capped when no value's frequency in it
exceeds `k`.

Find the length of the longest capped stretch of `nums`. A stretch here
means a non-empty run of consecutive elements.

### Example 1

```text
Input: nums = [4,5,4,6,4,6], k = 2
Output: 5
Explanation: The stretch [5,4,6,4,6] is capped: 4 and 6 each occur
twice and 5 once, all within the cap. The full array is not capped
because 4 occurs three times, so no length-6 stretch works.
```

### Example 2

```text
Input: nums = [2,2,2,2], k = 1
Output: 1
Explanation: Every element equals 2, so any stretch of length 2 or
more carries a frequency above 1. A single element is the best a
capped stretch can do.
```

### Example 3

```text
Input: nums = [9,1,9,1,9], k = 3
Output: 5
Explanation: The entire array is capped — 9 occurs three times and 1
twice, and the cap is 3 — so the answer is its full length 5.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁹`
- `1 <= k <= nums.length`

## Hints

### Hint 1

For each right endpoint, the widest capped stretch ending there has a
left edge that only moves right as the right edge advances.

### Hint 2

Run a sliding window with a live count per value: when a newly admitted
element pushes its own count past `k`, shrink from the left until one
copy of it leaves.
