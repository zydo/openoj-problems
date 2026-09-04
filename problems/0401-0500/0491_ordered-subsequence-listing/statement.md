# Ordered Subsequence Listing

## Description

A subsequence of an array is obtained by deleting zero or more elements
without changing the order of the remaining elements. You are given an
integer array `nums`.

Return every distinct non-decreasing subsequence of `nums` that has at least
two elements. Two subsequences are considered the same when they consist of
the same values in the same order, regardless of which positions of `nums`
supplied them.

The answer may be produced in any order, but this judge pins a deterministic
output: the subsequences are listed in ascending lexicographic order —
compared element by element, with a shorter sequence that is a prefix of a
longer one sorted before it.

### Example 1

```text
Input: nums = [1,2,1,1]
Output: [[1,1],[1,1,1],[1,2]]
Explanation: The distinct non-decreasing subsequences with at least two
elements are `[1,1]`, `[1,1,1]`, and `[1,2]`, listed lexicographically.
Sequences such as `[2,1]` or `[1,2,1]` decrease at some step and are not
included.
```

### Example 2

```text
Input: nums = [1,2,3]
Output: [[1,2],[1,2,3],[1,3],[2,3]]
Explanation: Every selection of at least two elements is already
non-decreasing, and each distinct value sequence appears once.
```

### Example 3

```text
Input: nums = [3,3,3]
Output: [[3,3],[3,3,3]]
Explanation: Equal values may be repeated, so both a two-element and a
three-element run of `3`s appear.
```

### Constraints

- `1 <= nums.length <= 15`
- `-100 <= nums[i] <= 100`

## Hints

### Hint 1

Each index of `nums` faces one binary decision: take the value into the
subsequence or skip it.

### Hint 2

A take is legal only when the value does not decrease — the order rule prunes
a path the moment it would be violated.

### Hint 3

Different index sets can reach the same value sequence. Deduplicate by the
sequence itself, then sort the survivors into the pinned order.
