# Sum of Min Times Sum Over All Subarrays

## Description

You are given a 0-indexed integer array `power`. Score any non-empty
contiguous run of the array as a product of two numbers:

- the smallest value in the run, multiplied by
- the sum of all values in the run.

Add the scores of every contiguous run and return the total. Since it can grow
enormous, give it modulo `10⁹ + 7`.

A subarray is a non-empty run of consecutive elements.

### Example 1

```text
Input: power = [2,4,1,3]
Output: 76
Explanation: The ten runs and their scores:
- [2] gives 2 * 2 = 4, and [4] gives 4 * 4 = 16.
- [1] gives 1 * 1 = 1, and [3] gives 3 * 3 = 9.
- [2,4] gives 2 * 6 = 12, and [4,1] gives 1 * 5 = 5.
- [1,3] gives 1 * 4 = 4.
- [2,4,1] gives 1 * 7 = 7, and [4,1,3] gives 1 * 8 = 8.
- [2,4,1,3] gives 1 * 10 = 10.
Adding them: 4 + 16 + 1 + 9 + 12 + 5 + 4 + 7 + 8 + 10 = 76.
```

### Example 2

```text
Input: power = [3,2,5]
Output: 82
Explanation: Six runs: [3] scores 9, [2] scores 4, [5] scores 25; [3,2]
scores 2 * 5 = 10, [2,5] scores 2 * 7 = 14; and [3,2,5] scores 2 * 10 = 20.
The total is 9 + 4 + 25 + 10 + 14 + 20 = 82.
```

### Example 3

```text
Input: power = [6,6,6]
Output: 360
Explanation: Every run's minimum is 6: the three singletons score 36 each,
the two pairs score 6 * 12 = 72 each, and the full run scores 6 * 18 = 108.
That comes to 108 + 144 + 108 = 360.
```

### Constraints

- `1 <= power.length <= 10⁵`
- `1 <= power[i] <= 10⁹`

## Hints

### Hint 1

Summing over runs directly is quadratic. Whose smallest value does a given run
belong to, and what does that owner contribute?

### Hint 2

For each position, determine the stretch of runs in which it plays the role
of the minimum — including a rule that hands runs with several equal minima to
exactly one claimant.

### Hint 3

Within one claimant's stretch, the combined run sums collapse into a closed
form — provided you can get range sums of prefix sums quickly.
