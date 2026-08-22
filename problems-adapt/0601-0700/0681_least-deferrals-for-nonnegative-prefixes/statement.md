# Least Deferrals for Nonnegative Prefixes

## Description

You are given an integer array `nums`, whose total sum is non-negative. In
one move you may take any single element and reattach it at the end of the
array; the other elements slide up to close the gap.

The running totals of the array are the sums of its longer and longer
prefixes. Return the fewest moves needed to reach an arrangement in which
**every** running total is non-negative.

### Example 1

```text
Input: nums = [4,-3,1,-2]
Output: 0
Explanation: The running totals are 4, 1, 2 and 0 — none dips below zero, so
no move is needed.
```

### Example 2

```text
Input: nums = [2,-7,5,3]
Output: 1
Explanation: Move the -7 to the end. The arrangement [2,5,3,-7] has running
totals 2, 7, 10 and 3.
```

### Example 3

```text
Input: nums = [-1,-2,6,-4,1]
Output: 2
Explanation: Move -1 and then -2 to the end. The arrangement [6,-4,1,-1,-2]
has running totals 6, 2, 3, 2 and 0; one move alone always leaves a negative
total behind.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `-10⁹ <= nums[i] <= 10⁹`
- The total sum is non-negative, so a valid arrangement exists.

## Hints

### Hint 1

A negative total can only be repaired by moving some earlier element to the
back — the later elements cannot change their position relative to it.

### Hint 2

Which element is worth deferring? Removing the smallest one seen so far
lifts the running total the most.

### Hint 3

An exchange argument backs that choice: any plan that defers something else
while a smaller candidate sits earlier can be rewritten to defer the smaller
one, never using more moves.

### Hint 4

Scan left to right holding the running total and a min-heap of everything
seen; whenever the total dips below zero, pop the minimum, count one move,
and continue.
