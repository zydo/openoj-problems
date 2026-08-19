# Least Steps to Halve the Sum

## Description

You are given an array `nums` of positive integers.

One step picks a single entry and replaces it with exactly half of itself.
Values may become fractional, and an already-halved entry may be picked
again.

Return the fewest steps needed to bring the sum of the array down to at
most half of its starting value.

### Example 1

```text
Input: nums = [16,4,4]
Output: 2
Explanation: The sum is 24, so half is 12. Halving 16 gives [8,4,4] with
sum 16; halving the 8 gives [4,4,4] with sum 12 — exactly half. Two steps
suffice, and no single halving can remove the required 12 or more.
```

### Example 2

```text
Input: nums = [10,2]
Output: 2
Explanation: The sum is 12, half of it 6. Halving 10 removes 5, leaving
[5,2]; halving the 5 removes another 2.5, for 7.5 removed in total — past
the target. The same entry was halved twice.
```

### Example 3

```text
Input: nums = [12,12,3]
Output: 3
Explanation: The sum is 27, half of it 13.5. Halve each 12 once (12
removed so far, not yet enough), then halve one of the resulting 6s to
remove 3 more — 15 in total, and the array [3,6,3] sums to 12.
```

### Constraints

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^7`

## Hints

### Hint 1

Each step's contribution to the goal is the amount it removes from the
sum. Which entry's halving removes the most right now?

### Hint 2

That entry is the current maximum, and after halving it may still be the
maximum. Which data structure answers "current maximum" repeatedly?

### Hint 3

Keep a max-heap of the entries; halve the top, push the half back, and
count steps until the removed total reaches half the starting sum.
