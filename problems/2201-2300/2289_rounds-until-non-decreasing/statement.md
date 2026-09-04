# Rounds Until Non-decreasing

## Description

You are given an integer array `nums`. The array is repeatedly trimmed in
rounds. In a single round, every element that currently has a strictly
larger element immediately before it is removed — all such elements in
that one round, together.

Return how many rounds it takes before what remains is non-decreasing.

### Example 1

```text
Input: nums = [9,2,4,4,10,3,6,12,9,5,12]
Output: 3
Explanation: The rounds run as follows:
- Round 1 removes 2, 3, 9 and 5, leaving [9,4,4,10,6,12,12]
- Round 2 removes 4 and 6, leaving [9,4,10,12,12]
- Round 3 removes 4, leaving [9,10,12,12]
[9,10,12,12] is non-decreasing, so the answer is 3.
```

### Example 2

```text
Input: nums = [3,6,6,9]
Output: 0
Explanation: The array is already non-decreasing — no element has a
strictly larger element before it, so no round ever runs.
```

### Example 3

```text
Input: nums = [6,2,2,2]
Output: 3
Explanation: Each round removes only the first 2 of the run, since
neither neighbour of the later 2s is strictly larger: [6,2,2,2] becomes
[6,2,2], then [6,2], then [6].
```

### Constraints

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`

## Hints

### Hint 1

An element is doomed exactly when some strictly larger element stands
somewhere to its left. Which elements are never removed at all?

### Hint 2

Rather than simulating rounds, work out for each element the round in
which it disappears. The answer is the largest such round over the whole
array.

### Hint 3

Sweep left to right with a stack of elements whose fate is still
unsettled. When `nums[i]` arrives and pops smaller entries, the round it
itself dies is one past the latest round among everything it popped.
