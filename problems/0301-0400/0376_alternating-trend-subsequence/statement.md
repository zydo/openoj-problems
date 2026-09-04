# Alternating Trend Subsequence

## Description

Call a sequence alternating when the signs of its consecutive differences
strictly switch between positive and negative. Its first difference may have
either sign. A one-element sequence, and a two-element sequence whose values
differ, are alternating by definition.

For example, `[4, 9, 3, 8]` alternates because its differences are positive,
negative, positive. Equal adjacent values do not qualify as a rise or a fall.

A subsequence is formed by removing any number of elements while preserving
the order of those that remain. Given `nums`, return the maximum possible
length of an alternating subsequence.

### Example 1

```text
Input: nums = [3,3,8,2,7,7,1]
Output: 5
Explanation: One longest alternating choice is [3, 8, 2, 7, 1]. Its steps
rise, fall, rise, then fall.
```

### Example 2

```text
Input: nums = [10,8,6,7,5]
Output: 4
Explanation: [10, 6, 7, 5] is an alternating subsequence of length 4.
```

### Constraints

- `1 <= nums.length <= 1000`
- `0 <= nums[i] <= 1000`

### Follow-up

Can you find the result in `O(n)` time?
