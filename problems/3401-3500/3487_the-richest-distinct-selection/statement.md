# The Richest Distinct Selection

## Description

You are given an integer array `nums`.

First you may strike out any elements you like, as long as at least one
element remains. From what survives the strike-out, choose one contiguous
run in which no value appears twice. Among every run you could form this
way, you want the one whose elements add up to as much as possible.

Return that largest achievable sum.

### Example 1

```text
Input: nums = [2,4,2,5,4]
Output: 11
Explanation:
Strike out the second 2 and the second 4. The remaining array [2,4,5] is
itself a run of pairwise distinct values, and its sum 11 cannot be beat.
```

### Example 2

```text
Input: nums = [-8,-3,-8,-3]
Output: -3
Explanation:
Every value is negative, so keeping more than one element only lowers the
total. Strike everything except a single -3; the run [-3] sums to -3.
```

### Example 3

```text
Input: nums = [6,-7,3,6,0,-5]
Output: 9
Explanation:
Strike -7, 0, -5, and the duplicate 6. From the survivors [6,3,0] the run
[6,3] is distinct and sums to 9.
```

### Example 4

```text
Input: nums = [0]
Output: 0
Explanation:
Nothing may be deleted without emptying the array, so the only run is [0]
with sum 0.
```

### Constraints

- `1 <= nums.length <= 100`
- `-100 <= nums[i] <= 100`

## Hints

### Hint 1

Striking elements is free, so any two survivors can be pulled next to each
other. The "run" requirement therefore reduces to picking a set of values
that are pairwise distinct — order and position do not matter.

### Hint 2

If some value is positive, taking each distinct positive value exactly once
is optimal, and every non-positive value can be discarded. If nothing is
positive, the strike-out may not empty the array, so the best you can do is
keep a single copy of the largest element.
