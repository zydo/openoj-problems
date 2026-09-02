# Walks That Empty The Row

## Description

You are given an integer array `nums`, read as a row of cells. Begin by
choosing a starting cell `curr` whose value is `0`, together with an
initial direction — left or right. Then repeat the following:

- If `curr` has left the range `[0, n - 1]`, the walk ends.
- If `nums[curr] == 0`, continue the same way: take one step in the
  current direction.
- If `nums[curr] > 0`, spend one unit there — decrement `nums[curr]` by
  `1` — turn around, and take one step in the new direction.

A choice of starting cell and initial direction is successful when every
cell holds `0` by the time the walk ends. Return how many successful
choices exist.

### Example 1

```text
Input: nums = [2,0,1,0,2]
Output: 2
Explanation: Exactly two walks succeed: start at index 1 heading right,
or start at index 3 heading left. Each spends one unit on every positive
cell it meets and finishes with the whole row at zero.
```

### Example 2

```text
Input: nums = [4,0,0,0,4]
Output: 6
Explanation: Every one of the three zero cells works in either direction
— six successful choices in all.
```

### Example 3

```text
Input: nums = [0,3,0]
Output: 0
Explanation: However the walk starts, the middle cell can never be
drained to exactly zero, so no choice succeeds.
```

### Constraints

- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 100`
- At least one element of `nums` is `0`.

## Hints

### Hint 1

The bounds are tiny — replay each candidate walk literally on a scratch
copy of the array, exactly as the rules describe.

### Hint 2

Every candidate must start on a zero cell, and each zero cell offers at
most two walks, one per initial direction.
