# Scaling The Smallest Slot

## Description

You are given an integer array `nums` along with two integers `k` and
`multiplier`. Carry out exactly `k` rounds of the same operation:

- Locate the smallest value in `nums`. When the minimum shows up several
  times, take the leftmost of those slots.
- Multiply that slot's value by `multiplier`.

Output the array as it stands once all `k` rounds have run.

### Example 1

```text
Input: nums = [3,1,2], k = 4, multiplier = 3
Output: [9,9,6]
Explanation: The 1 is raised to 3 first, then the 2 grows to 6; the two
remaining rounds scale the two 3s in left-to-right order, ending at
[9,9,6].
```

### Example 2

```text
Input: nums = [5,5,5], k = 2, multiplier = 2
Output: [10,10,5]
Explanation: Equal values hand the turn to the leftmost slot each time, so
the first two entries are scaled in order.
```

### Example 3

```text
Input: nums = [4,1,7,1], k = 3, multiplier = 2
Output: [4,4,7,2]
Explanation: Both 1s are scaled first; the final round lands on the 2 at
index 1, the leftmost of the two smallest values.
```

### Constraints

- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 100`
- `1 <= k <= 10`
- `1 <= multiplier <= 5`

## Hints

### Hint 1

The limits are tiny — just replay the rounds literally instead of looking
for a shortcut.

### Hint 2

A plain scan that only replaces on a strictly smaller value naturally picks
the leftmost occurrence of the minimum, which is exactly the tie-break the
operation asks for.
