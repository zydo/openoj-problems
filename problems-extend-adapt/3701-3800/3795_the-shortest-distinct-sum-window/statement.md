# The Shortest Distinct-Sum Window

## Description

An integer array nums and an integer k are in your hands. For any
contiguous window of nums, add up the values that appear in it, counting
each distinct value a single time no matter how often it repeats. Your
task is to report the length of the shortest window whose so-counted sum
reaches k, and -1 when no window ever gets there.

### Example 1

```text
Input: nums = [4,1,4,7], k = 11
Output: 2
Explanation: The window [4, 7] holds the distinct values {4, 7} whose sum
is 4 + 7 = 11, meeting the bar of k = 11. No single element reaches it,
so the answer is 2.
```

### Example 2

```text
Input: nums = [6,2,6], k = 8
Output: 2
Explanation: The window [6, 2] carries distinct values {6, 2} summing to
8, exactly k. Length 1 falls short, and length 2 is achievable, so the
answer is 2.
```

### Example 3

```text
Input: nums = [5,5,5], k = 16
Output: -1
Explanation: Every window of this array contains the single distinct
value 5, so the largest distinct sum anywhere is 5 — far below 16. The
answer is -1.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`
- `1 <= k <= 10⁹`

## Hints

### Hint 1

Sweep a window across the array: stretch the right end until its
distinct-value sum clears k.

### Hint 2

Once it clears the bar, pull the left end in as far as the bar still
holds, noting the window length at its tightest — the earliest qualifying
left end for a fixed right end is always the best one there.

### Hint 3

A per-value counter tells you when a value's contribution flips: the sum
gains a value only as its first copy enters and loses it only as its last
copy leaves.
