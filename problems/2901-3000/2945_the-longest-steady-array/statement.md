# The Longest Steady Array

## Description

You are given a 0-indexed integer array `nums`.

One operation picks a subarray and collapses it into a single value —
the total of its elements. Collapsing `[3,5]` inside `[1,3,5,6]`, for
instance, turns the array into `[1,8,6]`. You may run the operation any
number of times.

Return the length of the longest non-decreasing array reachable this way.

A subarray is a contiguous, non-empty run of elements taken from the
array.

### Example 1

```text
Input: nums = [2,1,1]
Output: 2
Explanation: The three elements cannot stand alone, since 2 > 1.
Collapsing the tail [1,1] into 2 yields [2,2], which is non-decreasing,
so two elements is the best finish.
```

### Example 2

```text
Input: nums = [1,2,3]
Output: 3
Explanation: The array already never decreases, so nothing needs
merging.
```

### Example 3

```text
Input: nums = [6,2,2,3]
Output: 2
Explanation: No cut into three blocks keeps the block totals in order,
but collapsing the whole tail [2,2,3] into 7 leaves [6,7] — a
non-decreasing pair.
```

### Example 4

```text
Input: nums = [7,1,1,1]
Output: 1
Explanation: Any block ending before the trailing ones totals at least
7, while everything after it totals at most 3, so no two-block cut
rises. Collapsing everything gives [10], length 1.
```

### Constraints

- `1 <= nums.length <= 10⁵`
- `1 <= nums[i] <= 10⁵`

## Hints

### Hint 1

Let `dp[i]` count the most elements a steady array can keep while
consuming exactly the first `i` values of `nums`.

### Hint 2

Start from `dp[0] = 0`, and note `dp[i + 1] >= dp[i]`: the partition of
the first `i` values stays usable when its closing block simply swallows
`nums[i]`.

### Hint 3

To extend, look for the largest `j` whose closing block total `v[j]` fits
under the run of sums `nums[i - 1] + nums[i - 2] + ... + nums[j]`; that
block can close a partition with one more element.
