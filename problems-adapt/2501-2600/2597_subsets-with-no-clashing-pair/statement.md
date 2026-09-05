# Subsets With No Clashing Pair

## Description

You are given an array `nums` of positive integers and a positive
integer `k`. Call a subset of `nums` clash-free when no two of its
members differ by exactly `k`.

Count the non-empty clash-free subsets of `nums`.

A subset is any selection of positions from `nums`, kept in their
original order; two selections differ when the set of positions they
keep differs, even if the values read the same.

### Example 1

```text
Input: nums = [1,2,3,4], k = 1
Output: 7
Explanation: Consecutive integers clash, so every kept pair must skip
a neighbor. The valid picks are the four singletons plus [1,3], [1,4],
and [2,4].
```

### Example 2

```text
Input: nums = [5,7,9], k = 2
Output: 4
Explanation: The pairs [5,7] and [7,9] both differ by exactly 2, so
only the three singletons and [5,9] survive.
```

### Example 3

```text
Input: nums = [3,3,3], k = 1
Output: 7
Explanation: Equal values differ by 0, never by 1, so nothing clashes
and every one of the 2³ - 1 non-empty subsets counts.
```

### Constraints

- `1 <= nums.length <= 18`
- `1 <= nums[i], k <= 1000`

## Hints

### Hint 1

Sort the values first; then the only earlier value that could clash
with a kept `nums[i]` is exactly `nums[i] - k`.

### Hint 2

Walk the sorted array once, taking or skipping each index: a take is
allowed only while the counter for `nums[i] - k` reads zero, and
counters are bumped and rolled back around each take.

### Hint 3

Bonus: can you count in `O(n log n)` by processing equal-residue
chains independently?
