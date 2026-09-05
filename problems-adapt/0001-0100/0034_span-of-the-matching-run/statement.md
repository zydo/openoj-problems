# Span Of The Matching Run

## Description

An array `nums` is given already arranged in non-decreasing order, so any
value that appears more than once shows up as one contiguous run. For a
value `target`, report the span of its run: the first and the last index
at which it appears.

When `target` occurs exactly once the two indices coincide. When it does
not occur at all — including the case of an empty array — report
`[-1, -1]`.

The lookup must run in `O(log n)` time; a left-to-right scan that can
touch every element does not qualify.

### Example 1

```text
Input: nums = [1,4,4,4,4,8,9,9], target = 4
Output: [1,4]
Explanation: The `4`s occupy one uninterrupted block from index 1
through index 4.
```

### Example 2

```text
Input: nums = [2,3,5,7,7,7,11], target = 7
Output: [3,5]
Explanation: The run of `7`s starts at index 3 and ends at index 5.
```

### Example 3

```text
Input: nums = [6,6,6,6], target = 6
Output: [0,3]
Explanation: Every slot matches, so the run covers the whole array.
```

### Constraints

- `0 <= nums.length <= 10⁵`
- `-10⁹ <= nums[i] <= 10⁹`
- `nums` is arranged in non-decreasing order.
- `-10⁹ <= target <= 10⁹`
